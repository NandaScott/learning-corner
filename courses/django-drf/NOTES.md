# Notes — Django & DRF course

Teaching preferences specific to this course. Cross-topic preferences live in the repo `CLAUDE.md`.

## Origin

Learner invoked `/teach` with a precise three-part ask: (1) what problem Django solves / why use it, (2) what problems DRF solves *about* Django, (3) a remembered detail — "jankiness about how Django maps different HTTP verbs to a view, and DRF solves that somehow." That third point is the spine of the course.

## The verb-mapping story (the spine)

Three rungs, taught in order. Keep them straight; the learner will test the boundaries.

1. **Function-based view** — one callable per URL, all methods land in it, you branch on `request.method`. This is the "jank" the learner remembers. (Django docs show exactly this.)
2. **Django's own fix: class-based `View`** — `as_view()` returns a callable; `dispatch()` looks at `request.method` and calls a like-named method (`get`, `post`, ...). Unlisted method → `http_method_not_allowed` → 405. So Django *already* solves the branching, before DRF enters.
3. **DRF `APIView`** — subclasses Django's `View`, keeps the same `get()/post()` dispatch, but swaps `HttpRequest`→`Request` (with `request.data`) and `HttpResponse`→`Response` (content-negotiated), and auto-handles 405/ParseError. Then **ViewSets** go one rung further: verb→*action* (`list/retrieve/...`), with the map (`{"get": "list"}`) supplied by a Router.

Important framing to hold the learner to: DRF does not "fix Django's verb branching" from scratch — Django's CBVs already did that. DRF inherits that fix and adds the *API* layer (content negotiation, parsing, serialization, browsable API) on top, then abstracts routing with viewsets/routers. Correcting the "DRF invented the verb mapping" misconception is a teachable moment (it's L5's trap).

## Style

- Repo house style: `assets/course.css` + `assets/quiz.css`/`quiz.js`. Lessons at `lessons/`, depth-3 asset links (`../../../assets/`).
- Lesson prose plain (article-voice), key line / trap / recall on every teaching lesson.
- Code samples are illustrative and lifted from / faithful to the cited docs. Keep them minimal.
