/* Cube face/grid diagrams as inline SVG.
 *
 * Usage:
 *   <div class="cube-face"
 *        data-cells="C w m w C / w x + x w / m + F + m / w x + x w / C w m w C"
 *        data-legend="C:corner, w:wing, m:midge, x:x-center, +:plus-center, F:fixed center"></div>
 *
 * Rows are separated by "/", cells by whitespace. Any rectangular grid works
 * (a 1x3 bar, a 5x5 face). Two token families:
 *   piece types (labelled in the cell): C w m x + F
 *   sticker colors (no label):         W Y R O G B  and "." for don't-care
 */
(function () {
  const TYPES = {
    "C": { fill: "#d9a441", text: "#1a1a1a" },
    "m": { fill: "#33658a", text: "#ffffff" },
    "w": { fill: "#a8c8e4", text: "#1a1a1a" },
    "x": { fill: "#7d5ba6", text: "#ffffff" },
    "+": { fill: "#cdb4dd", text: "#1a1a1a" },
    "F": { fill: "#3a3a40", text: "#ffffff" }
  };
  const COLORS = {
    "W": "#ffffff", "Y": "#f6d32d", "R": "#cf3529",
    "O": "#e8771f", "G": "#3a9e4d", "B": "#2d5fc4",
    ".": "#dcd7ca"
  };
  const CELL = 40, GAP = 4, PAD = 2, STROKE = "#948d7c";

  function renderGrid(el) {
    const rows = el.dataset.cells.split("/").map(function (r) {
      return r.trim().split(/\s+/);
    });
    const cols = Math.max.apply(null, rows.map(function (r) { return r.length; }));
    const w = PAD * 2 + cols * CELL + (cols - 1) * GAP;
    const h = PAD * 2 + rows.length * CELL + (rows.length - 1) * GAP;

    let svg = '<svg viewBox="0 0 ' + w + " " + h + '" role="img" ' +
      'style="max-width:' + Math.min(w, 320) + 'px;width:100%;height:auto;display:block;margin:0 auto">';
    rows.forEach(function (row, ri) {
      row.forEach(function (tok, ci) {
        const x = PAD + ci * (CELL + GAP), y = PAD + ri * (CELL + GAP);
        const type = TYPES[tok];
        const fill = type ? type.fill : (COLORS[tok] || "#dcd7ca");
        svg += '<rect x="' + x + '" y="' + y + '" width="' + CELL + '" height="' + CELL +
          '" rx="5" fill="' + fill + '" stroke="' + STROKE + '" stroke-width="1.5"/>';
        if (type) {
          svg += '<text x="' + (x + CELL / 2) + '" y="' + (y + CELL / 2) + '" fill="' + type.text +
            '" font-family="ui-monospace,monospace" font-size="19" font-weight="600" ' +
            'text-anchor="middle" dominant-baseline="central">' + (tok === "+" ? "+" : tok) + "</text>";
        }
      });
    });
    svg += "</svg>";

    let legend = "";
    if (el.dataset.legend) {
      legend = '<p class="cube-legend">' + el.dataset.legend.split(",").map(function (entry) {
        const kv = entry.trim().split(":");
        const tok = kv[0].trim(), name = (kv[1] || "").trim();
        const type = TYPES[tok];
        const fill = type ? type.fill : (COLORS[tok] || "#dcd7ca");
        return '<span class="chip"><span class="swatch" style="background:' + fill + '"></span>' +
          (type ? "<code>" + tok + "</code> " : "") + name + "</span>";
      }).join(" ") + "</p>";
    }
    const label = el.dataset.label
      ? '<p class="cube-label">' + el.dataset.label + "</p>"
      : "";
    el.innerHTML = label + svg + legend;
  }

  const style = document.createElement("style");
  style.textContent =
    ".cube-face{margin:1.4rem auto}" +
    ".cube-strip{display:flex;justify-content:center;align-items:flex-start;gap:1.6rem;flex-wrap:wrap;margin:1rem 0}" +
    ".cube-strip .cube-face{margin:0;flex:0 0 auto}" +
    ".cube-label{text-align:center;font-family:-apple-system,system-ui,sans-serif;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted,#6b6256);margin:0 0 .35rem}" +
    ".cube-legend{text-align:center;font-size:.82rem;color:var(--muted,#6b6256);margin:.7rem 0 0;line-height:1.9}" +
    ".cube-legend .chip{white-space:nowrap;margin:0 .45rem}" +
    ".cube-legend .swatch{display:inline-block;width:.75em;height:.75em;border-radius:3px;" +
    "border:1px solid #948d7c;margin-right:.3em;vertical-align:-.06em}";
  document.head.appendChild(style);

  function init() {
    document.querySelectorAll(".cube-face[data-cells]").forEach(renderGrid);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
