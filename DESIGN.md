---
name: BKB Global
description: Burgundy and white, illustrated and lively; hand-drawn lines carry parents through a serious school.
colors:
  burgundy: "#7b1e3a"
  burgundy-dark: "#5f142b"
  wine: "#4a0e22"
  blush: "#f8e9ee"
  rose: "#e7b4c3"
  marigold: "#f2a93b"
  white: "#ffffff"
  ink: "#23131a"
  ink-soft: "#5b4650"
  on-burgundy: "#ffffff"
  on-burgundy-soft: "#f6dbe3"
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
  title-sm:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
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
  form-bar: "22px"
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
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.on-burgundy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.on-burgundy}"
  button-primary-compact:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.on-burgundy}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "46px"
  button-on-wine:
    backgroundColor: "{colors.white}"
    textColor: "{colors.wine}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-on-wine-hover:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.wine}"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
    height: "48px"
  input-field-bar:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
    height: "48px"
  chip-tag:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.wine}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  chip-tag-hover:
    backgroundColor: "{colors.rose}"
    textColor: "{colors.wine}"
  chip-choice:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-choice-selected:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.on-burgundy}"
    rounded: "{rounded.pill}"
  card-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "clamp(24px, 3vw, 40px)"
  form-bar:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.form-bar}"
    padding: "18px"
  parent-link-tile:
    backgroundColor: "{colors.white}"
    textColor: "{colors.wine}"
    rounded: "{rounded.tile}"
    padding: "10px 18px"
    height: "56px"
  parent-link-tile-hover:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.wine}"
  step-number:
    backgroundColor: "{colors.white}"
    textColor: "{colors.burgundy}"
    rounded: "{rounded.round}"
    size: "52px"
  masthead:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "76px"
    padding: "0 {spacing.gutter}"
  footer:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.on-burgundy}"
---

# Design System: BKB Global

## Overview

**Creative North Star: "The Drawn Route"**

BKB Global is a burgundy-and-white school world where a pen is always at work. Lines draw themselves under headlines, ticks draw themselves beside principles, and a dotted route inks itself down the page as a parent scrolls from Nursery to Class 12. Small flat illustrations of blocks, books, flasks, compasses, caps, a paper plane, an atom and a marigold flower live around real photographs of students. They idle gently and never perform. The illustrations make it lively, the heavy grotesque headlines and plain sentences make it serious, and the warm wine-and-blush palette keeps it from feeling either childish or corporate.

The page is airy on white, with blush bands and one full burgundy band for rhythm and a wine footer to close. Everything has an outline: photos, cards, the form, step numbers and every illustration share the same 2.5px wine stroke, so photography and drawing read as one material. Depth comes from outlines, tilt and overlap, never from shadows.

The system turns down the photo-hero-plus-three-cards template and the earlier rejected two-ink textbook look. Animation follows PRODUCT.md's principle that motion serves understanding: it guides the eye along the journey and never holds back information. With reduced motion everything is fully drawn and still.

**Key Characteristics:**
- Burgundy and white as the school colours, with wine outlines, blush and rose panels, and marigold kept for highlights.
- Bricolage Grotesque at 800 for headlines and Figtree for reading.
- 2.5px wine outlines on every frame, card and illustration, and 28px-rounded photo frames.
- Flat illustrations with round caps that draw on view and idle gently.
- Pill-shaped actions, pill tags and round step numbers.
- No shadows. Depth comes from outline, tilt, tape and overlap.
- Unconfirmed facts appear in cream placeholder highlights and stock photos are labelled.

## Colors

A warm, single-hue family from wine to blush, lifted by one marigold spark.

### Primary
- **School Burgundy** (`burgundy`): the school colour. Use it for primary buttons, the selected choice chip, the full-bleed teaching band, the inked journey route, emphasised headline words ("Serious learning.", "stick for good."), form labels, stage meta lines and the wordmark's "Global".
- **Deep Wine** (`wine`): the outline and anchor colour. Every illustration stroke, photo frame, card and form-bar border, the default heading colour, the hover state of burgundy buttons, and the footer background.
- **Burgundy Dark** (`burgundy-dark`): declared as a deeper burgundy step. Wine currently does its job in the build, so keep it in reserve.

### Secondary
- **Blush** (`blush`): soft panels. The statement and visit bands, tag pills, bar-form field fills, sleeping stage medallions, masthead hairline and mobile nav dividers.
- **Rose** (`rose`): the mid-pink. Illustration fills, the dotted unread journey route, resting borders on inputs and choice chips, parent-tile borders, tag hover, photo tape, text selection, and the "Global" and fact labels in the footer.

### Tertiary
- **Marigold** (`marigold`): the Indian-garden note. It appears inside illustrations (flower petals, books, pencil, tassel, atom nucleus), in hand-drawn underline scribbles, drawn-tick fills, the success mark, nav hover underlines, focus rings, the skip link and one strip of photo tape.

### Neutral
- **White** (`white`): the page ground, card and panel faces, and a fill colour inside illustrations.
- **Ink** (`ink`): body text and input values.
- **Ink Soft** (`ink-soft`): ledes, supporting paragraphs, placeholders, photo notes and the disabled button.
- **On Burgundy / On Burgundy Soft** (`on-burgundy`, `on-burgundy-soft`): text on the burgundy band and wine footer, with the soft tint for secondary copy. Dividers on dark bands are translucent white hairlines (`#ffffff33`).
- **Error Red** (`error-red`): field error borders and messages. It is hard-coded in the form CSS and not yet a custom property.
- **Placeholder Cream** (`placeholder-cream`): the highlight behind every "[to be confirmed]" placeholder.

### Named Rules
**The Marigold Spark Rule.** Use marigold only as a stroke, a fill inside an illustration, or a highlight a few pixels wide: underline scribbles, ticks, focus rings, nav underlines, tape and the skip link. Never use it for a panel, a section band, a button face or text.

**The Wine Outline Rule.** Wine is the only outline colour on light grounds. Every new figure, frame or card on white or blush gets a wine stroke, so drawings and photos belong to the same world.

## Typography

**Display Font:** Bricolage Grotesque Variable (fallback: Bricolage Grotesque, system-ui, sans-serif), self-hosted via @fontsource-variable
**Body Font:** Figtree Variable (fallback: Figtree, system-ui, sans-serif), self-hosted via @fontsource-variable

**Character:** A chunky, slightly quirky grotesque, set heavy and tight, gives the school a confident voice. Figtree's open, friendly shapes keep long reading calm.

### Hierarchy
- **Display** (800, `clamp(46px, min(6vw, 10svh), 96px)`, line-height 0.98, -0.035em, opsz 96): the hero headline only. It is capped by viewport height so the form stays in the first viewport.
- **Statement** (700, `clamp(34px, 4.6vw, 72px)`, line-height 1.12): one large wine sentence on blush, with photo pills set inline.
- **Headline** (800, `clamp(36px, 4.4vw, 64px)`, line-height 1.02): section h2s. Card-scale h2s step down to `clamp(28px, 2.8vw, 40px)`.
- **Title** (800, `clamp(30px, 3vw, 44px)`, line-height 1.05): journey stage names.
- **Title Small** (700, 24px): principle and visit-step titles. The panel title is 30px/800.
- **Button** (Bricolage 700, 18px): every pill action. Compact nav buttons inherit 16px.
- **Lede** (400, `clamp(18px, 1.4vw, 21px)`, max 44ch, ink-soft): the hero introduction.
- **Body** (400, 18px, line-height 1.6): all reading text. Supporting paragraphs run up to about 48ch.
- **Label** (700, 13px, burgundy on light, rose on wine): form labels and footer fact terms. Sentence case.
- **Note** (400, 12px, ink-soft): stock-photo provenance lines.

### Named Rules
**The Heavy Head Rule.** Set headings in Bricolage at 700 to 800 with negative tracking and `text-wrap: balance`. Body and labels are always Figtree.

**The Sentence-Case Rule.** No text is uppercased anywhere in the system. Labels stay small, bold and in sentence case.

## Layout

The page is a full-bleed vertical story with gutters of `clamp(20px, 4vw, 64px)`. Major sections pad with `clamp(88px, 10vw, 152px)` and alternate grounds: white, then a blush statement, white journey, burgundy teaching band, white school life, blush visit, white parent links and a wine footer. Spacing follows an 8 / 16 / 24 / 40 / 64 step scale.

- The hero is a two-column grid at `100svh` minus the 76px masthead. Copy and the bar form sit on the left and the outlined photo with its illustrations on the right.
- The journey is a centred route, at most 1100px wide, with an S-curve running down the middle. Stage rows alternate between illustration-left and illustration-right.
- Teaching and visit sections are 1:1 splits. Parent links sit in a 1:2 split with an auto-fit grid of tiles at least 220px wide.
- In school life, a white card overlaps the bottom edge of a wide 16:8 photo.
- Breakpoints: 1240px moves the bar form's submit to its own row. 1080px stacks every split into one column. 900px swaps the nav for a menu toggle and turns the journey into a left rail with 88px medallions. 560px tightens the hero art. 480px puts the bar form in a single column.

## Elevation & Depth

The system has no shadows at all. Depth comes from the shared 2.5px wine outline, slight rotations (photos at -2deg and photo pills at plus or minus 3deg), translucent strips of tape pinning photos into the drawn world, cards overlapping photo edges, and illustrations breaking out of photo frames. The masthead is the only layered surface: 92% white with `saturate(1.4) blur(12px)` and a 1.5px blush hairline.

### Named Rules
**The Paper, Not Plastic Rule.** Use no `box-shadow` or drop shadow anywhere. If an element needs lift, give it an outline, a tilt, tape or an overlap.

## Shapes

Every shape is soft and drawn.

- **Photo frames and cards** (`rounded.frame`, 28px) carry a 2.5px wine border. This covers the hero, teaching and life photos, the life card and the visit panel.
- **Actions, tags, choices and inline photo pills** are full pills (999px).
- **Medallions and step numbers** are circles with a 2.5px wine border.
- **Controls** use smaller radii with 2px borders: 12px fields with rose borders, 16px parent tiles with rose borders, a 22px form bar with a wine border, a 20px success card with a wine border, and a 14px menu toggle with a rose border.
- **Dividers** are 1.5px hairlines, in blush on light grounds and translucent white on dark ones.
- **Tape** is a 120x30px rectangle with 4px corners, a 2px wine outline and a slight rotation.

**The Three Weights Rule.** Borders come in three weights: 2.5px wine for frames and figures, 2px for interactive controls, and 1.5px for dividers.

### Illustration grammar
Illustrations are flat inline SVG. Fills come only from burgundy, rose, blush, marigold and white, and the one apple uses error red as a single exception. Every shape has a 2.5px wine outline, with round caps and joins on open strokes. Accent strokes are thicker: 3 to 3.5px for ticks and stars, 5 to 6px for underline scribbles and the inked route. There are no gradients and no textures. Figures stay small and sit around a photo or inside a medallion. They never fill a whole hero.

### Motion
- **Draw-on-view:** stroked paths (`pathLength="1"`) draw from dashoffset 1 to 0 over 1.1s with ease-out after a 0.15s delay, triggered by an intersection observer. A figure is fully drawn by default and only primed for drawing when script runs, motion is allowed and the figure is still off-screen.
- **Scroll-drawn route:** the journey route inks itself in proportion to scroll progress (pivot at 60% of the viewport) over a rose dotted guide (`2 12` dash). Each stage wakes as the ink reaches it. The medallion springs from 0.82 scale and 55% opacity to full, and its figure starts an idle loop.
- **Idle loops:** gentle loops of 1.8 to 7s. A pencil wiggles, an apple bobs, blocks hop, a page turns, bubbles rise, an arc draws, compass legs swing, a tassel sways and a sparkle twinkles. An atom spins with orbits at 5s and 40s, the flower turns at 18s, and the plane flies its dotted loop in 7s.
- **Hover:** spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`). Buttons lift 2px, arrows nudge 3 to 4px, tags lift and tilt, photo pills widen, and the wordmark mark tilts. State fades use ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) at 160 to 260ms.
- **Reduced motion:** all durations collapse to 0.01ms. Figures render fully drawn, the route is fully inked, every stage is awake and the plane rests at 82% of its loop.

## Components

### Buttons
Confident pills in the display face.
- **Shape:** full pill (999px), no border.
- **Primary:** burgundy face with white Bricolage 700 text at 18px, 56px tall with 0 28px padding. A trailing inline-SVG arrow with round caps is optional.
- **Compact (nav):** 46px tall with 0 22px padding.
- **On wine (footer):** white face with wine text. Hover turns it blush.
- **Hover / Focus / Active:** hover turns the face wine and nudges the arrow 4px right, or lifts the button 2px when there is no arrow. Focus shows a 3px marigold outline at a 2 to 3px offset. Active scales to 0.98. Disabled turns ink-soft with a progress cursor.

### Chips
- **Tags:** blush pills with wine 15px/600 text and 6px 14px padding. On hover they turn rose and lift 3px with a -2deg tilt. They are display only.
- **Choice chips:** 44px pills with a 2px rose border and ink text. Hover brings a burgundy border. Selected chips are filled burgundy with white text. The native radio input stays in place, invisible, and focus-visible shows a marigold ring.

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** white on blush or over photos.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 2.5px wine.
- **Internal Padding:** `clamp(22px, 2.6vw, 36px)` to `clamp(24px, 3vw, 40px)`.

### Inputs / Fields
- **Style:** 48px tall, 12px radius, 2px rose border, white fill, ink text at 17px, 10px 14px padding, burgundy caret. Selects use a burgundy chevron drawn in inline SVG. Labels sit above the field in 13px/700 burgundy.
- **Focus:** 3px marigold outline at a 2px offset. Hover brings a burgundy border.
- **Error:** error-red border with an error-red 14px/600 message below, linked to the field by `aria-describedby`.

### Visit form (signature)
One form component with two layouts.
- **Bar:** used in the hero. A white container with a 2px wine border, 22px radius and 18px padding. The stage select spans the top row and name, contact and submit share the second row. Fields are filled blush with blush borders. On error a field turns white with a red border. The layout falls to two columns at 1240px and one column at 480px.
- **Full:** used in the visit panel. The fields stack and a "Best time to visit" set of choice chips is added.
- **Success:** a white card with a 2px wine border and 20px radius. A marigold tick medallion pops in with spring easing and the copy states plainly that this is a preview.

### Navigation
- **Masthead:** sticky and 76px tall on translucent white, with a blush hairline. It holds the wordmark (a burgundy mark plus "BKB" in wine at 600 and "Global" in burgundy at 800), 16px/600 links and a compact primary button. Each link hover draws a 3px marigold underline from left to right. "Parents" sits apart, beside the button.
- **Mobile (900px and below):** a 48px menu toggle with a 14px radius and rose border opens a white drop panel. Links are 20px with blush dividers, and the button runs full width at 56px.

### Stage row (signature)
The stage row has a circular medallion (`clamp(150px, 16vw, 220px)`, 88px on mobile) with a blush face, a 2.5px wine border and an illustration inside. Beside it sit a stage title, a 15px/700 burgundy meta line ("Class 1 to 5 · Ages 6–11") and an ink-soft summary. Rows alternate sides on desktop and the route runs between them. When the route reaches a row, its medallion face turns white and the figure animates.

### Principle list
The principle list is a vertical list on the burgundy band. Each item has a 40px drawn tick (marigold disc, wine check at 3.5px, drawn on view), a white 24px/700 title, on-burgundy-soft text and a translucent white hairline divider.

### Step numbers
Step numbers are 52px white circles with a 2.5px wine border, holding a burgundy Bricolage 800 numeral at 22px.

### Parent link tiles
Parent link tiles are 56px rows with a 2px rose border and 16px radius. They hold a wine 700 label and a burgundy diagonal arrow drawn in inline SVG. On hover the face turns blush, the border turns burgundy and the arrow moves 3px up and to the right.

### Footer
The footer has a wine ground. It carries an oversized wordmark (`clamp(56px, 10vw, 150px)`, with "Global" in rose), an on-wine button, a four-column fact list (rose 13px terms and 15px values) above a translucent hairline, and a 13px imprint.

### Placeholder convention
- Unconfirmed facts are written as bracketed text, for example "[phone number]" or "[Stages to be confirmed.]", inside a cream highlight span with wine text and a 4px radius. The span wraps cleanly across lines.
- Every stock photo carries a 12px ink-soft note ("Stock photo, to be replaced…").
- The footer imprint credits Unsplash.
- Placeholders never pass for real content.

## Do's and Don'ts

### Do:
- **Do** outline every photo frame, card, medallion and illustration shape in 2.5px wine.
- **Do** round photo frames and cards at 28px and shape every action, tag and choice as a 999px pill.
- **Do** draw illustrations as flat shapes in burgundy, rose, blush, marigold and white, with round caps and joins.
- **Do** let lines draw on view (1.1s ease-out) and let figures idle gently. Use spring easing for hover.
- **Do** render everything fully drawn and still under `prefers-reduced-motion`.
- **Do** set headings in Bricolage Grotesque at 700 to 800 with negative tracking, and body text in Figtree at 18px/1.6.
- **Do** show unconfirmed facts in the cream placeholder highlight and label every stock photo.
- **Do** use a 3px marigold outline for every focus state.

### Don't:
- **Don't** use `box-shadow` or drop shadows. Depth comes from outline, tilt, tape and overlap.
- **Don't** use marigold for a panel, band, button face or text.
- **Don't** add gradients, textures or detailed rendering to illustrations.
- **Don't** uppercase labels or put small labels above headings.
- **Don't** set body or label text in Bricolage, or headings in Figtree.
- **Don't** present stock photos or placeholder facts as real school evidence.
