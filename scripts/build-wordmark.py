"""Build the editable vector wordmark. Normal website builds use the saved SVG."""

from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.ttLib import TTFont


ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / "public/fonts/barlow-condensed-black-italic.ttf"
OUTPUT = ROOT / "public/assets/yahagi-wordmark.svg"

font = TTFont(FONT)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()

# Keep the first and final letters intact; vary the middle letters' rhythm.
letters = [
    ("Y", -80, 1.00),
    ("A", 400, 0.95),
    ("H", 859, 1.02),
    ("A", 1322, 0.95),
    ("G", 1801, 1.04),
    ("I", 2279, 1.00),
]
paths = []
outline_a = ""
for letter, x, width in letters:
    pen = SVGPathPen(glyphs)
    # Font coordinates point upwards; retain the italic and add a small lean.
    glyphs[cmap[ord(letter)]].draw(TransformPen(pen, (width, 0, 0.04, -1, x, 720)))
    paths.append(pen.getCommands())
    if len(paths) == 4:
        # Outline only the outer contour, leaving the A's counter open below
        # the seam instead of producing a small enclosed stroke fragment.
        recording = RecordingPen()
        glyphs[cmap[ord(letter)]].draw(recording)
        contours, current = [], []
        for operation, arguments in recording.value:
            current.append((operation, arguments))
            if operation in ("closePath", "endPath"):
                bounds = BoundsPen(glyphs)
                svg_pen = SVGPathPen(glyphs)
                transformed = TransformPen(svg_pen, (width, 0, 0.04, -1, x, 720))
                for action, points in current:
                    getattr(bounds, action)(*points)
                    getattr(transformed, action)(*points)
                x0, y0, x1, y1 = bounds.bounds
                contours.append(((x1 - x0) * (y1 - y0), svg_pen.getCommands()))
                current = []
        outline_a = max(contours)[1]

definitions = "\n".join(f'<path id="letter-{n}" d="{path}"/>' for n, path in enumerate(paths))
middle = "\n".join(f'<use href="#letter-{n}"/>' for n in range(1, 5))
lower_solid = "\n".join(f'<use href="#letter-{n}"/>' for n in (1, 2, 4))

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2600 750" fill="none">
  <title>YAHAGI</title>
  <desc>Custom italic lettering with a rising seam, displaced lower sections and an outlined second A.</desc>
  <!-- Outlines derived from Barlow Condensed Black Italic, SIL OFL 1.1.
       Letter widths, spacing and the seam are project-specific edits. -->
  <defs>
    {definitions}
    <path id="outline-a" d="{outline_a}"/>
    <clipPath id="upper"><path d="M0 0H2600V312L0 546Z"/></clipPath>
    <clipPath id="lower"><path d="M0 558L2600 324V750H0Z"/></clipPath>
  </defs>
  <g fill="#111318">
    <use href="#letter-0"/>
    <use href="#letter-5"/>
    <g clip-path="url(#upper)">{middle}</g>
    <g transform="translate(-12 7)">
      <g clip-path="url(#lower)">
        {lower_solid}
        <use href="#outline-a" fill="none" stroke="#111318" stroke-width="30" stroke-linejoin="bevel"/>
      </g>
    </g>
  </g>
</svg>
'''

OUTPUT.write_text(svg, encoding="utf-8")
print(f"Saved {OUTPUT.relative_to(ROOT)}: 2600 x 750, six outlined letters")
