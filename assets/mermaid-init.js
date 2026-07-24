/* ============================================================
   Shared Mermaid bootstrap for every course.
   Pairs with the vendored assets/mermaid.min.js (v11, MIT).

   Diagram source lives in <pre class="mermaid">…</pre> inside a
   .figure block. This file reads the course.css palette at
   runtime and feeds it to Mermaid's `base` theme, so rendered
   SVG matches the page instead of Mermaid's cold blue default.
   Read the vars live — if course.css changes, diagrams follow.

   Load order on a page (end of <body>):
     <script src="…/assets/mermaid.min.js"></script>
     <script src="…/assets/mermaid-init.js"></script>
   ============================================================ */
(function () {
  function cssVar(name, fallback) {
    var value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return value || fallback;
  }

  function render() {
    if (typeof mermaid === "undefined") return;

    var sans = '-apple-system, system-ui, "Segoe UI", Roboto, sans-serif';

    var ink   = cssVar("--ink", "#1a1a1a");
    var paper = cssVar("--paper", "#fdfcf9");
    var rule  = cssVar("--rule", "#d8d4c8");
    var accent = cssVar("--accent", "#8a3324");
    var accentBg = cssVar("--accent-bg", "#f6ece9");
    var muted = cssVar("--muted", "#6b6256");
    var codeBg = cssVar("--code-bg", "#f2efe6");

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      fontFamily: sans,
      // useMaxWidth:false = render at natural pixel size instead of
      // width:100% (which downscales to the column and shrinks text).
      // Tightened spacing keeps dense diagrams compact; wide ones still
      // overflow and scroll via pre.mermaid overflow-x.
      // Flowcharts render at natural size (readable text, tall not squashed).
      // Sequence diagrams keep useMaxWidth so they fit the column: they only
      // run slightly over, so the mild downscale stays readable and avoids a
      // horizontal scrollbar.
      flowchart: { useMaxWidth: false, htmlLabels: true, nodeSpacing: 30, rankSpacing: 38, padding: 6 },
      sequence: { useMaxWidth: true },
      state: { useMaxWidth: false },
      themeVariables: {
        fontFamily: sans,
        fontSize: "14px",
        background: paper,

        primaryColor: accentBg,
        primaryTextColor: ink,
        primaryBorderColor: accent,

        secondaryColor: codeBg,
        secondaryTextColor: ink,
        secondaryBorderColor: rule,

        tertiaryColor: paper,
        tertiaryTextColor: ink,
        tertiaryBorderColor: rule,

        lineColor: muted,
        textColor: ink,
        nodeBorder: accent,
        titleColor: accent,

        edgeLabelBackground: paper,
        clusterBkg: paper,
        clusterBorder: rule,

        noteBkgColor: accentBg,
        noteBorderColor: accent,
        noteTextColor: ink,
      },
    });

    mermaid.run({ querySelector: ".mermaid" });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
