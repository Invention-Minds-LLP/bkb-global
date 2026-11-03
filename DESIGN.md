---
name: BKG Global School
description: The school's own navy, royal blue, crest gold and tie red, illustrated and lively; hand-drawn lines carry parents through a serious school.
colors:
  navy: "#1e3a8a"
  navy-dark: "#16296b"
  deep: "#0f1b44"
  royal: "#3557c4"
  mist: "#eef2fb"
  sky: "#c9d6f2"
  gold: "#e5a823"
  red: "#c8252c"
  white: "#ffffff"
  ink: "#131a33"
  ink-soft: "#4a5272"
  on-navy: "#ffffff"
  on-navy-soft: "#d9e1f5"
  error-red: "#b3122e"
  placeholder-cream: "#fff3d6"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(46px, min(6vw, 10svh), 96px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  statement:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 72px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 64px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  figure:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 36px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
  quote:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 500
    lineHeight: 1.4
  button:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  lede:
    fontFamily: "Figtree Variable, Figtree, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree Variable, Figtree, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree Variable, Figtree, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
  note:
    fontFamily: "Figtree Variable, Figtree, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  tape: "4px"
  field: "12px"
  s: "14px"
  tile: "16px"
  notice: "18px"
  card-s: "20px"
  card: "22px"
  frame: "28px"
  pill: "999px"
  round: "50%"
spacing:
  "1": "8px"
  "2": "16px"
  "3": "24px"
  "4": "40px"
  "5": "64px"
  "6": "clamp(88px, 10vw, 152px)"
  gutter: "clamp(20px, 4vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-navy}"
  button-primary-compact:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  button-on-deep:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-on-deep-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.deep}"
  button-gold-on-navy:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-gold-on-navy-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
    height: "48px"
  input-field-bar:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
    height: "48px"
  chip-fact:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-status:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  chip-status-recent:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  chip-choice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-choice-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.pill}"
  card-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "clamp(22px, 2.6vw, 36px)"
  card-event:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
    rounded: "{rounded.card}"
    padding: "0 0 22px"
  blog-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(20px, 2.4vw, 28px)"
  form-bar:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "18px"
  smile-tile:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.deep}"
    rounded: "{rounded.tile}"
    size: "56px"
  step-number:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.round}"
    size: "52px"
  parent-link-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep}"
    rounded: "{rounded.tile}"
    padding: "10px 18px"
    height: "56px"
  parent-link-tile-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.deep}"
  founder-card:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.deep}"
    rounded: "{rounded.card-s}"
    padding: "16px"
  announcement-bar:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-navy}"
    height: "40px"
    padding: "0 {spacing.gutter}"
  masthead:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "88px"
    padding: "0 {spacing.gutter}"
  fee-notice:
    backgroundColor: "{colors.navy-dark}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.notice}"
    padding: "24px"
  footer:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-navy}"
---

# Design System: BKG Global School

## Overview

**Creative North Star: "The Drawn Route"**

BKG Global School is a navy-and-white school world, dressed in the school's own colours, where a pen is always at work. Lines draw themselves under headlines, icons draw themselves in the proof grid, and a dotted route inks itself down the page as a parent scrolls from Pre-KG to Class X. Small flat illustrations (blocks, books, flasks, compasses, caps, a paper plane, an atom, a marigold flower, a diya, a lit hostel at night, a trophy) live around the school's real photographs. They idle gently and never perform. The illustrations make it lively, the heavy grotesque headlines and plain sentences make it serious, and the blazer navy with crest gold keeps it from feeling either childish or corporate.

The page is airy on white, with mist bands, one full navy band for the SMILE framework, and deep navy at both ends: the announcement bar on top and the footer below. Everything has an outline. Photos, cards, the form, step numbers, letter tiles and every illustration share the same 2.5px deep-navy stroke, so photography and drawing read as one material. Depth comes from outlines, tilt, tape and overlap, never from shadows.

The system turns down the photo-hero-plus-three-cards template and the earlier rejected two-ink textbook look. Motion serves understanding: it guides the eye along the journey and never holds back information. With reduced motion everything is fully drawn and still.

**Key Characteristics:**
- Navy and white as the school colours, with deep-navy outlines, mist and sky panels, crest gold for small faces and highlights, and tie red only as a spark inside drawings.
- The official raster crest logo in the masthead. Never redraw it.
- Bricolage Grotesque at 800 for headlines and Figtree for reading.
- 2.5px deep-navy outlines on every frame, card, tile and illustration, with 28px-rounded photo frames and 22px-rounded cards.
- Flat illustrations with round caps that draw on view and idle gently.
- Pill-shaped actions and tags, round step numbers, tilted letter tiles.
- No shadows. Depth comes from outline, tilt, tape and overlap.

## Colors

A single cool family from deep navy to mist, warmed by crest gold and touched once in a while with tie red.

### Primary
- **Blazer Navy** (`navy`): the school colour. It is used for primary buttons, the selected choice chip, the SMILE teaching band, the blog panel, the inked journey route, emphasised headline words ("Serious learning.", "stick for good."), form labels, stage meta lines, timing terms and drawn icon strokes.
- **Deep Navy** (`deep`): the outline and anchor colour. It covers every illustration stroke and photo, card, tile and form-bar border, the default heading colour, the hover state of navy buttons, the announcement bar and the footer.
- **Navy Dark** (`navy-dark`): a step between navy and deep, used only for the fee-safety notice panel inside the deep footer.
- **Royal Blue** (`royal`): the logo's lettering blue. It is declared but no surface uses it yet. Keep it in reserve for a brighter navy role and do not use it as a second primary.

### Secondary
- **Mist** (`mist`): soft panels. It covers the statement band, the news band, the visit panel, bar-form field fills, sleeping stage medallions, illustration fills, the founder card, fact chips, the masthead hairline and mobile nav dividers.
- **Sky** (`sky`): the mid-blue. It covers illustration fills, the dotted unread journey route, resting borders on inputs, choice chips, parent tiles and the menu toggle, proof-grid dividers, photo tape, text selection, and the footer fact terms and "Global School".

### Tertiary
- **Crest Gold** (`gold`): the crest's gold. It appears in illustration fills (flower, books, pencil, flame, trophy, windows, tassel), hand-drawn underline scribbles, tick fills, the SMILE letter tiles, the "Recent" status tag, the blog-panel button, the motto on the footer, ticker dots, nav hover underlines, focus rings, the skip link and photo tape.
- **Tie Red** (`red`): the school tie's red. It is used only as a small fill inside an illustration, such as the core of the diya flame or the centre of a flower.

### Neutral
- **White** (`white`): the page ground, card and panel faces, and a fill colour inside illustrations.
- **Ink** (`ink`): body text and input values.
- **Ink Soft** (`ink-soft`): ledes, supporting paragraphs, placeholders, captions and the disabled button.
- **On Navy / On Navy Soft** (`on-navy`, `on-navy-soft`): text on navy and deep grounds, with the soft tint for secondary copy. Dividers on dark grounds are translucent white hairlines (`#ffffff33`).
- **Error Red** (`error-red`): field error borders and messages. It is hard-coded in the form CSS and is not a custom property yet. It is not tie red.
- **Placeholder Cream** (`placeholder-cream`): the global `.placeholder` highlight for an unconfirmed fact, and the glow of lit windows in the residential drawing.

### Named Rules
**The Crest Gold Rule.** Gold appears as a stroke, an illustration fill, a highlight a few pixels wide, or a small face of 56px or less (letter tiles, status tags, one pill button on a navy panel). Never use it for a section band, a large panel or the primary action. Gold text appears only on deep or navy grounds, never on white.

**The Tie Red Rule.** Red is a spark, not a colour role. Use it only as a small fill inside a drawing, and never for text, borders, buttons or errors.

**The Deep Outline Rule.** On light grounds, deep navy is the only outline colour. Every new figure, frame, tile or card on white or mist gets a deep-navy stroke, so drawings and photos belong to the same world.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback: Bricolage Grotesque, system-ui, sans-serif), self-hosted via @fontsource-variable
**Body Font:** Figtree Variable (fallback: Figtree, system-ui, sans-serif), self-hosted via @fontsource-variable

**Character:** A chunky, slightly quirky grotesque, set heavy and tight, gives the school a confident voice. Figtree's open, friendly shapes keep long reading calm.

### Hierarchy
- **Display** (800, `clamp(46px, min(6vw, 10svh), 96px)`, line-height 0.98, -0.035em, opsz 96): the hero headline only. It is capped by viewport height so the form stays in the first viewport.
- **Statement** (700, `clamp(34px, 4.6vw, 72px)`, line-height 1.12): one large deep-navy sentence on mist, with photo pills set inline.
- **Headline** (800, `clamp(36px, 4.4vw, 64px)`, line-height 1.02): section h2s. Split-layout h2s step down: the chairman h2 to `clamp(32px, 3.6vw, 52px)`, card-scale h2s to `clamp(28px, 2.8vw, 40px)`, and the parents h2 to `clamp(28px, 2.6vw, 38px)`.
- **Title** (800, `clamp(30px, 3vw, 44px)`, line-height 1.05): journey stage names.
- **Figure** (800, `clamp(26px, 2.4vw, 36px)`, line-height 1): proof values such as "17 acres", with a 16px/600 ink-soft label below.
- **Title Small** (700 to 800, 24px): SMILE principle, admission step, life pillar and blog-panel titles. Event-card titles are 19px/700 and person names 20 to 22px/700.
- **Quote** (Bricolage 500, `clamp(22px, 2vw, 28px)`, line-height 1.4, max 34ch): the chairman's words.
- **Button** (Bricolage 700, 18px): every primary pill action. Compact and secondary pills inherit 16px.
- **Lede** (400, `clamp(18px, 1.4vw, 21px)`, max 44ch, ink-soft): the hero introduction. Section intros sit at 19px in ink-soft.
- **Body** (400, 18px, line-height 1.6): all reading text, with supporting paragraphs up to about 48 to 52ch.
- **Label** (700, 13 to 14px, navy on light, sky on deep): form labels, timing terms and footer fact terms, in sentence case.
- **Note** (400, 12 to 14px, ink-soft): captions and photo notes.

### Named Rules
**The Heavy Head Rule.** Set headings in Bricolage at 700 to 800 with negative tracking and `text-wrap: balance`. Body and labels are always Figtree.

**The Sentence-Case Rule.** No text is uppercased anywhere in the system. Labels stay small, bold and in sentence case.

## Layout

The page is a full-bleed vertical story with gutters of `clamp(20px, 4vw, 64px)`. Major sections pad with `clamp(88px, 10vw, 152px)` and alternate grounds. The order runs: deep announcement bar, white masthead and hero, mist statement, white why-choose and journey, navy SMILE band, white chairman's message, life and campus, mist news, white admissions (with a mist visit panel), white parents, and a deep footer. Spacing follows an 8 / 16 / 24 / 40 / 64 step scale.

- The hero is a two-column grid at `100svh` minus 128px (the 40px bar plus the 88px masthead). Copy and the bar form sit on the left, and the outlined photo with its illustrations on the right.
- Why-choose is a 5:7 split with the outlined two-by-two proof grid on the right.
- The journey is a centred route, at most 1100px wide, with an S-curve down the middle. Stage rows alternate sides.
- Teaching and admissions are 1:1 splits. The chairman's message is a 4:8 split, at most 1240px wide. Parents is a 1:2 split with an auto-fit grid of tiles at least 220px wide.
- Life is a five-column row of 3:4 tilted frames. It becomes 3+2 at 1100px and two columns at 640px, where the last pillar spans the row at 16:9.
- On the campus band, a white card overlaps the bottom edge of a wide 16:8 photo, at most 1320px wide.
- News is a 3:1 grid of three-up event cards and a navy blog panel.
- Breakpoints: at 1240px the bar form's submit drops to its own row. At 1100px life goes 3+2 and the news grid stacks. At 1080px every split stacks. At 900px a menu toggle replaces the nav, the journey becomes a left rail with 88px medallions, and the campus card drops below its photo. At 820px the chairman split stacks. At 760px the ticker's utility links hide and its badge shrinks to an icon. At 720px event cards turn into horizontal rows. At 640px life goes to two columns. At 560px the hero art tightens and the proof grid goes to one column. At 480px the bar form stacks.

## Elevation & Depth

The system has no shadows at all. Depth comes from the shared 2.5px deep-navy outline, slight rotations, translucent strips of tape that pin photos into the drawn world, cards overlapping photo edges, and illustrations breaking out of photo frames. Rotations run -2deg on the teaching and chairman photos, plus or minus 3deg on photo pills, plus or minus 1.5deg on life frames and plus or minus 4deg on letter tiles. The masthead is the only layered surface: 92% white with `saturate(1.4) blur(12px)` and a 1.5px mist hairline.

### Named Rules
**The Paper, Not Plastic Rule.** Use no `box-shadow` or drop shadow anywhere. If an element needs lift, give it an outline, a tilt, tape or an overlap.

## Shapes

Every shape is soft and drawn.

- **Photo frames and panel cards** (`rounded.frame`, 28px) carry a 2.5px deep-navy border. This covers the hero, teaching, chairman and campus photos, the proof grid, the campus card and the visit panel.
- **Cards** (`rounded.card`, 22px) cover event cards, life frames, the blog panel and the hero form bar.
- **Actions, tags, choices and inline photo pills** are full pills (999px).
- **Medallions and step numbers** are circles with a 2.5px deep-navy border.
- **Tiles and controls** use smaller radii: 16px letter tiles (2.5px deep border), 16px parent tiles (2px sky), 12px fields (2px sky), a 14px menu toggle (2px sky), a 20px founder card and success card, and an 18px fee notice with a translucent white border.
- **Dividers** are 1.5px hairlines: mist on white, sky inside the proof grid, and translucent white on dark grounds.
- **Tape** is a 110 to 120 by 28 to 30px rectangle with 4px corners, a 2px deep outline, sky or gold at 80 to 85% opacity, and a 3 to 5deg rotation.

**The Three Weights Rule.** Borders come in three weights: 2.5px deep navy for frames, tiles and figures, 2px for interactive controls and tape, and 1.5px for dividers and small status tags.

### Illustration grammar
Illustrations are flat inline SVG. Fills come from navy, deep, sky, mist, gold and white, with tie red as a single small spark. Every shape has a 2.5px deep outline (2px on small details), with round caps and joins on open strokes. Accent strokes are thicker: 3 to 3.5px for ticks and tassels, 5 to 6px for underline scribbles, roof lines and the inked route. Line icons in the proof grid are 2.5px navy strokes on a mist disc that draw on view. There are no gradients and no textures. Figures stay small and sit around a photo, inside a medallion, a card thumbnail or a life frame. They never fill a whole hero.

### Motion
- **Draw-on-view:** stroked paths (`pathLength="1"`) draw from dashoffset 1 to 0 over 1.1s with ease-out after a 0.15s delay, triggered by an intersection observer. A figure is fully drawn by default and is only primed for drawing when script runs, motion is allowed and the figure is still off-screen.
- **Scroll-drawn route:** the journey route inks itself in proportion to scroll progress (pivot at 60% of the viewport) over a sky dotted guide (`2 12` dash). As the ink reaches each stage, its medallion springs from 0.82 scale and 55% opacity to full and its figure starts an idle loop.
- **Idle loops:** gentle loops of 1.8 to 7s. A pencil wiggles, an apple bobs, blocks hop, a page turns, bubbles rise, an arc draws, compass legs swing, a tassel sways, sparkles and stars twinkle, hostel windows glow, and a diya flame flickers. An atom spins with orbits at 5s and 40s, the flower turns at 18s, and the plane flies its dotted loop in 7s.
- **Ticker:** announcements scroll at 32s linear and pause on hover or focus.
- **Hover:** spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Buttons lift 2px, arrows nudge 3 to 4px, event cards lift 6px with a -0.6deg tilt, life frames straighten and lift 6px, letter tiles straighten and scale 1.08, photo pills widen, and the logo scales 1.04. State fades use ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) at 160 to 260ms.
- **Reduced motion:** all durations collapse to 0.01ms. Figures render fully drawn, the route is fully inked, every stage is awake, the plane rests at 82% of its loop, and the ticker stops, hides its duplicate and becomes horizontally scrollable.

## Components

### Buttons
Confident pills in the display face.
- **Shape:** full pill (999px).
- **Primary:** navy face with white Bricolage 700 text at 18px, 56px tall with 0 28px padding. A trailing inline-SVG arrow with round caps is optional.
- **Compact (nav):** 46px tall with 0 22px padding.
- **Outline (secondary):** 48px, a 2px navy border and navy text. On hover it fills navy with white text and the arrow nudges 4px.
- **On deep (footer):** white face with deep text. Hover turns it mist.
- **Gold on navy:** 44px, a gold face with deep text, used only inside a navy panel (the blog panel). Hover turns it white.
- **Hover / Focus / Active:** hover turns the primary face deep and nudges the arrow 4px right, or lifts the button 2px when there is no arrow. Focus shows a 3px gold outline at a 2 to 3px offset. Active scales to 0.98. Disabled turns ink-soft with a progress cursor.
- **Text link with arrow:** Bricolage 700 in navy. On hover it underlines and the arrow nudges 4px.

### Chips
- **Fact chips:** mist pills with deep 14px/600 text and 6px 14px padding, for display only (campus distances).
- **Status tags:** 12px/700 pills with a 1.5px deep border, pinned to the top-left of an event thumbnail. "Past" is white and "Recent" is gold.
- **Choice chips:** 44px pills with a 2px sky border and ink text. Hover brings a navy border. Selected chips are filled navy with white text. The native radio stays in place, invisible, and focus-visible shows a gold ring.

### Cards / Containers
- **Corner Style:** 28px for panels, 22px for cards.
- **Background:** white on white or mist, or over photos. Mist for the visit panel. Navy for the blog panel.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 2.5px deep. The navy blog panel has no border.
- **Internal Padding:** `clamp(20px, 2.4vw, 32px)` to `clamp(24px, 3vw, 40px)`.

### Inputs / Fields
- **Style:** 48px tall, 12px radius, a 2px sky border, white fill, ink text at 17px, 10px 14px padding and a navy caret. Selects use a navy chevron drawn in inline SVG. Labels sit above the field in 13px/700 navy.
- **Focus:** a 3px gold outline at a 2px offset. Hover brings a navy border.
- **Error:** an error-red border with an error-red 14px/600 message below, linked by `aria-describedby`.

### Visit form (signature)
One form component with two layouts.
- **Bar:** used in the hero. A white container with a 2px deep border, a 22px radius and 18px padding. The stage select spans the top row, and name, contact and submit share the second. Fields are filled mist with mist borders. On error a field turns white with a red border.
- **Full:** used in the visit panel. Fields stack, and a "Best time to visit" set of choice chips is added.
- **Success:** a white card with a 2px deep border and a 20px radius. A gold tick medallion pops in with spring easing.

### Navigation
- **Announcement bar:** a 40px deep strip above the masthead. A navy "Announcements" pill with a gold speaker icon sits beside a scrolling ticker of 14px notices separated by gold dots, with edges faded by a mask. Phone and email utility pills in on-navy-soft turn navy on hover.
- **Masthead:** sticky, 88px, translucent white with a mist hairline. It holds the official crest logo (raster, 76px tall, 66px at 900px and below), 16px/600 links and a compact primary button. Each link hover draws a 3px gold underline from left to right. "Parents" sits apart, beside the button.
- **Mobile (900px and below):** a 48px menu toggle with a 14px radius and sky border opens a white drop panel. Links are 20px with mist dividers, and the button runs full width at 56px.

### Proof grid (signature)
A white, 28px-rounded, 2.5px deep-outlined two-by-two grid divided by 1.5px sky hairlines. Each cell has a 64px drawn line icon (navy strokes on a mist disc, drawn on view), a Figure value in deep and a 16px/600 ink-soft label.

### Stage row (signature)
A circular medallion (`clamp(150px, 16vw, 220px)`, 88px on mobile) with a mist face, a 2.5px deep border and an illustration inside. Beside it sit a stage title, a 15px/700 navy meta line and an ink-soft summary. Rows alternate sides and the route runs between them. When the route reaches a row, its face turns white and the figure animates.

### SMILE letter tiles
A vertical list on the navy band. Each item has a 56px gold tile with a 16px radius and a 2.5px deep border, holding one Bricolage 800 letter at 30px in deep. Tiles tilt -4deg and +4deg alternately and straighten on hover. Beside each tile sit a white 24px/700 title and on-navy-soft text, above a translucent white hairline.

### Chairman message and founder card
A tilted 4:5 portrait in a 28px deep-outlined frame, pinned with gold tape and captioned by name (22px/700) and role. The words column carries the headline, a gold drawn quote mark, the Quote-size statement, an ink-soft follow-up and an outline button. Below that sits the founder card: a mist card with a 20px radius and 16px padding, an 84 by 108px greyscale portrait with a 14px radius and 2px deep border, a 20px/700 name, a 14px/600 navy role and a 15px italic ink-soft quote.

### Life pillars
Five 3:4 frames with a 22px radius and 2.5px deep border, tilted by plus or minus 1.5deg. Each holds a school photo or, where no photo exists, a drawn scene on mist (a night-time hostel on a deep disc, a diya on a white disc). Below each sit a 24px/800 title and 16px ink-soft text.

### Event cards and blog panel
Event cards are white, 22px-rounded and deep-outlined, with a 16:10 mist thumbnail of a flat illustration above a 2.5px deep rule, a status tag and a 19px/700 deep title. At 720px they become 120px-thumbnail rows. The blog panel is navy with white 16px/600 post links on translucent hairlines, 13px on-navy-soft dates and a gold pill button.

### Campus band
A 16:8 landscape photo in a 28px deep-outlined frame, pinned with gold tape. A white campus card overlaps its bottom-left edge, holding a cited quote (Bricolage 18px/600 navy, 14px ink-soft cite), a card-scale h2, ink-soft copy and fact chips.

### Step numbers
52px white circles with a 2.5px deep border, holding a navy Bricolage 800 numeral at 22px.

### Parent link tiles and timings
Parent link tiles are 56px rows with a 2px sky border and 16px radius, holding a deep 700 label and a navy diagonal arrow. On hover the face turns mist, the border turns navy and the arrow moves 3px up and to the right. School timings beside them are a definition list with 14px/700 navy terms and 15px ink-soft values.

### Footer and fee-safety notice
The footer has a deep ground. It carries an oversized text mark (`clamp(48px, 7.4vw, 116px)`, with "Global School" in sky), the motto in gold Bricolage 600, an on-deep button, and a four-column fact list (13px sky terms, 15px values) above a translucent hairline. The fee-safety notice follows: a navy-dark panel with an 18px radius, a 1.5px translucent white border and 24px padding, a navy shield-and-tick icon, an 18px/700 white heading and 14px on-navy-soft copy at most 90ch. A 13px imprint closes the page.

## Do's and Don'ts

### Do:
- **Do** outline every photo frame, card, tile, medallion and illustration shape in 2.5px deep navy.
- **Do** round photo frames and panels at 28px and cards at 22px, and shape every action, tag and choice as a 999px pill.
- **Do** draw illustrations as flat shapes in navy, deep, sky, mist, gold and white, with round caps and joins.
- **Do** use the official raster logo (`public/images/bkg/logo.png`) as the brand mark.
- **Do** let lines draw on view (1.1s ease-out) and let figures idle gently. Use spring easing for hover.
- **Do** render everything fully drawn and still under `prefers-reduced-motion`, and let tickers stop and scroll by hand.
- **Do** set headings in Bricolage Grotesque at 700 to 800 with negative tracking, and body text in Figtree at 18px/1.6.
- **Do** use a 3px gold outline for every focus state.

### Don't:
- **Don't** use `box-shadow` or drop shadows. Depth comes from outline, tilt, tape and overlap.
- **Don't** use gold for a section band, a large panel, the primary action, or text on white.
- **Don't** use tie red for text, borders, buttons or error states.
- **Don't** redraw, recolour or rebuild the crest logo as SVG or type.
- **Don't** add gradients, textures or detailed rendering to illustrations.
- **Don't** uppercase labels or put small labels above headings.
- **Don't** set body or label text in Bricolage, or headings in Figtree.
