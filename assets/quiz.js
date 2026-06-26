/* ============================================================
   Reusable interleaved-quiz engine. Pairs with assets/quiz.css.

   Usage in a lesson:
     <div id="quiz"></div>
     <script src="../assets/quiz.js"></script>
     <script>
       Quiz.mount("#quiz", [
         { lesson: "L1", q: "…?",
           options: ["right answer", "distractor", "distractor"],
           answer: 0,                       // index into options BEFORE shuffle
           explain: "why, with a <a href=…>link</a>." },
         …
       ]);
     </script>

   Behaviour: shuffles question order AND option order each run,
   one question at a time, immediate auto-feedback, running score,
   and an end screen that names the lessons to review.
   ============================================================ */
var Quiz = (function () {
  // Deterministic-free shuffle (Date/Math.random allowed in the browser).
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function mount(selector, questions) {
    var root = document.querySelector(selector);
    if (!root) return;

    var state = { items: [], idx: 0, score: 0, missed: [] };

    function start() {
      state.items = shuffle(questions);
      state.idx = 0;
      state.score = 0;
      state.missed = [];
      render();
    }

    function render() {
      if (state.idx >= state.items.length) return renderResult();

      var item = state.items[state.idx];
      // Track the correct option's text, then shuffle the options.
      var correctText = item.options[item.answer];
      var opts = shuffle(item.options);
      var total = state.items.length;
      var pct = Math.round((state.idx / total) * 100);

      root.innerHTML =
        '<div class="quiz">' +
          '<div class="quiz-bar">' +
            '<span>Question ' + (state.idx + 1) + ' / ' + total + '</span>' +
            '<span class="score">Score ' + state.score + '</span>' +
          '</div>' +
          '<div class="quiz-progress"><span style="width:' + pct + '%"></span></div>' +
          '<span class="quiz-tag">' + item.lesson + '</span>' +
          '<p class="quiz-q">' + item.q + '</p>' +
          '<ul class="quiz-opts"></ul>' +
          '<div class="quiz-feedback"></div>' +
          '<button class="quiz-next">Next question →</button>' +
        '</div>';

      var list = root.querySelector('.quiz-opts');
      var feedback = root.querySelector('.quiz-feedback');
      var next = root.querySelector('.quiz-next');

      opts.forEach(function (text) {
        var li = document.createElement('li');
        var btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.innerHTML = text;
        btn.onclick = function () { choose(text === correctText, correctText, item, list, feedback, next, btn); };
        li.appendChild(btn);
        list.appendChild(li);
      });
    }

    function choose(isCorrect, correctText, item, list, feedback, next, clicked) {
      var buttons = list.querySelectorAll('.quiz-opt');
      buttons.forEach(function (b) {
        b.disabled = true;
        if (b.innerHTML === correctText) b.classList.add('correct');
      });
      if (isCorrect) {
        state.score++;
      } else {
        state.missed.push(item.lesson);
        clicked.classList.add('wrong');   // mark the option the user actually clicked
      }

      feedback.className = 'quiz-feedback show ' + (isCorrect ? 'ok' : 'no');
      feedback.innerHTML =
        '<span class="verdict">' + (isCorrect ? 'Correct.' : 'Not quite.') + '</span> ' + item.explain;

      next.className = 'quiz-next show';
      next.textContent = (state.idx + 1 >= state.items.length) ? 'See results →' : 'Next question →';
      next.onclick = function () { state.idx++; render(); };
    }

    function renderResult() {
      var total = state.items.length;
      // Unique lessons to review, in lesson order.
      var uniq = state.missed.filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();
      var reviewHtml = uniq.length
        ? '<p>Worth another pass:</p><ul class="review">' +
            uniq.map(function (l) { return '<li>' + l + ' — revisit before relying on it.</li>'; }).join('') +
          '</ul>'
        : '<p>Clean sweep — that\'s storage strength, not just fluency. Space it out and retest in a few days.</p>';

      root.innerHTML =
        '<div class="quiz"><div class="quiz-result">' +
          '<div class="big">' + state.score + ' / ' + total + '</div>' +
          reviewHtml +
          '<button class="quiz-next show" style="margin-top:1.2rem">Shuffle & retry →</button>' +
        '</div></div>';
      root.querySelector('.quiz-next').onclick = start;
    }

    start();
  }

  return { mount: mount };
})();
