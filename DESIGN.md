---
name: BKG Global School
description: A professional, photo-led school site in navy and crest gold, with serif headings and quiet motion.
colors:
  navy-deep: "#0b1838"
  navy: "#13285e"
  navy-soft: "#e8ecf6"
  gold: "#c9a24c"
  gold-hover: "#d8b465"
  gold-deep: "#9c7a2c"
  gold-soft: "#f4ecd9"
  white: "#ffffff"
  paper: "#f6f7fb"
  ink: "#161c2e"
  ink-soft: "#4b5368"
  placeholder: "#6b7389"
  line: "#d9deea"
  line-hover: "#c3cbe0"
  line-on-navy-soft: "#c6cee2"
  input-hover: "#aeb7cc"
  on-navy-soft: "#c9d2e8"
  red: "#b4232a"
  outline-light: "rgb(255 255 255 / 0.7)"
  hairline-on-navy: "rgb(255 255 255 / 0.15)"
  hairline-on-navy-faint: "rgb(255 255 255 / 0.12)"
  hairline-on-navy-strong: "rgb(255 255 255 / 0.18)"
  gold-focus-ring: "rgb(201 162 76 / 0.35)"
  gold-border: "rgb(201 162 76 / 0.45)"
  navy-shadow: "rgb(11 24 56 / 0.08)"
typography:
  display:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(44px, 5.6vw, 80px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline-feature:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(36px, 4.4vw, 60px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(32px, 3.6vw, 48px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(40px, 4.4vw, 60px)"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
  letter:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: 1
  numeral:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1
  quote:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(24px, 2.4vw, 34px)"
    fontWeight: 400
    lineHeight: 1.3
  pull:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 400
    lineHeight: 1.35
  epigraph:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(20px, 2vw, 26px)"
    fontWeight: 400
  title-lg:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.12
  title:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.12
  title-sm:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.12
  list-serif:
    fontFamily: "'Source Serif 4 Variable', 'Source Serif 4', Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
  lede-hero:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 20px)"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  label:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.02em"
  label-caps:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.12em"
  button:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.02em"
rounded:
  cap: "3px"
  control: "6px"
  card: "12px"
spacing:
  space-1: "8px"
  space-2: "16px"
  space-3: "24px"
  space-4: "40px"
  space-5: "64px"
  space-6: "clamp(80px, 9vw, 128px)"
  gutter: "clamp(20px, 5vw, 80px)"
  max: "1280px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  button-gold-hover:
    backgroundColor: "{colors.gold-hover}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  button-navy-hover:
    backgroundColor: "{colors.navy-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  button-outline-light-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-deep}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
    height: "48px"
  choice-chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "42px"
  choice-chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  card-stage:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "32px 28px 30px"
  panel:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 2.6vw, 36px)"
  panel-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 2.6vw, 36px)"
  form-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3vw, 40px)"
  care-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(24px, 3vw, 40px)"
  resource-link:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "58px"
  resource-link-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.navy-deep}"
    padding: "8px 0"
  utility-bar:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-navy-soft}"
    height: "38px"
  admissions-strip:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
    height: "58px"
---

# Design System: BKG Global School

## Overview

**Creative North Star: "The School Prospectus"**

The site reads like a well-made printed prospectus from an established Indian school: the school's own photographs carry the page, set against navy and white grounds, with serif headings, a short gold rule under every section title, and gold accents used the way a crest uses metal leaf. The client rejected an earlier playful, illustrated version as not professional; this world is its replacement, modelled on the Bishop Cotton School site the client chose as a reference.

Density is generous and calm. Sections are full-bleed bands that alternate white, paper, navy and navy-deep grounds, each with a `1280px` reading column inside a fluid gutter. Photography is real and documentary: students in labs, at sport, at ceremony, and the Sandur hills. Depth comes from the photographs under navy scrims and from a few soft, navy-tinted shadows on white cards, never from texture or ornament.

Motion is quiet and arrives once. The hero photo settles from a slow zoom while the headline, lede, actions and enquiry card rise in on a stagger; sections below the fold fade up as they enter; the campus figures count up; the header condenses on scroll. Every effect is static under reduced motion, and no content is ever hidden from a reader without JavaScript.

**Key Characteristics:**
- Photo-led: only the school's own photographs, full-bleed under navy gradients or in 12px-rounded frames.
- Navy and crest gold on white and paper grounds; gold is the accent, never the field (except the one admissions strip).
- Source Serif 4 headings with italic for emphasis; Figtree for everything read or clicked.
- A 56px gold rule under every section title, and an inset gold cap on featured cards.
- 6px controls, 12px cards; hairline borders; soft navy-tinted shadows only.
- Quiet, once-only motion on a single ease-out curve; all of it off under reduced motion.

## Colors

A two-metal palette: deep school navy for structure and authority, crest gold for emphasis, on cool white and paper grounds.

### Primary
- **Midnight Blazer** (navy-deep): the deepest ground. Utility bar, footer, BKG-SMILE band, hero and campus image fallbacks, and the colour of every heading on light grounds. Also the base of every scrim and shadow tint.
- **School Navy** (navy): the working navy. Navy buttons, the figures band, the blog panel, selected choice chips, input focus border, outline-button stroke, link colour on light grounds.
- **Navy Mist** (navy-soft): the parents band ground; one tonal step off white for practical, reference content.

### Secondary
- **Crest Gold** (gold): the accent metal. Section-title rules, card caps, the primary call-to-action button, the admissions strip, hero emphasis word, figure values, SMILE letters, nav-link hover underline, focus outlines, icons in the utility bar, footer motto and hover links. Text use only on navy grounds.
- **Polished Gold** (gold-hover): gold button hover; lighter, never darker.
- **Antique Gold** (gold-deep): gold that has to sit on light grounds as content: admission step numbers, check marks, arrow icons in resource links, the enquiry success mark. Not for text below title size on light grounds (about 4:1 on white).
- **Gold Wash** (gold-soft): text selection background only.

### Neutral
- **White** (white): default page ground, cards, header, form fields.
- **Paper** (paper): alternate light ground (Chairman, Happenings) and the residential-care card; also the scrollbar track.
- **Ink** (ink): body text and field values.
- **Slate Ink** (ink-soft): ledes, secondary body copy, card descriptions.
- **Placeholder Slate** (placeholder): form placeholders only.
- **Hairline** (line): all borders and dividers on light grounds. **Hairline Lift** (line-hover) is the stage-card hover border; **Field Hover** (input-hover) is the input and select hover border; **Mist Hairline** (line-on-navy-soft) divides the timings list on navy-soft.
- **Moonlit Text** (on-navy-soft): secondary text on navy grounds: utility bar, hero lede, figure labels, captions, footer copy.
- **On-navy hairlines** (hairline-on-navy 0.15 on navy-deep bands and the blog panel; hairline-on-navy-faint 0.12 for the footer base rule; hairline-on-navy-strong 0.18 between figures on navy): white at low alpha, the only divider on dark grounds.
- **Light Outline** (outline-light): stroke of the outline button on photography.

### Status and state tints
- **Tie Red** (red): form error borders and error messages only.
- **Gold Focus Halo** (gold-focus-ring): the 3px ring around a focused input or select.
- **Gold Hairline** (gold-border): the 1px border of the footer's public-notice box on navy-deep.
- **Navy Shadow** (navy-shadow): the base alpha for card and header shadows (see Elevation).

### Named Rules
**The Metal Leaf Rule.** Gold is an accent laid onto navy or onto a hairline, never a large field. The single exception is the admissions strip directly under the hero. Gold text belongs on navy grounds; on white or paper, content in gold uses Antique Gold.

**The Navy-Tinted Shadow Rule.** Every shadow and scrim is tinted from Midnight Blazer (`rgb(11 24 56 / …)`), never neutral grey. The hero enquiry card, floating over a photograph, is the one black shadow.

## Typography

**Display Font:** Source Serif 4 (variable, with Georgia, serif fallback)
**Body Font:** Figtree (variable, with system-ui, sans-serif fallback)

**Character:** An institutional, bookish serif set at weight 600 with slight negative tracking, paired with a friendly, upright geometric sans. Serif italic in a lighter weight (400–500) is the voice for emphasis, quotations and numerals.

All headings (h1–h3) default to the serif at 600, line-height 1.12, letter-spacing -0.01em, `text-wrap: balance`, coloured Midnight Blazer (white on navy grounds). Body is 17px at 1.65 with lining numerals.

### Hierarchy
- **Display** (600, clamp(44px, 5.6vw, 80px), 1.04, -0.02em): the hero headline only, white, with one emphasised word in gold italic at 500.
- **Headline Feature** (600, clamp(36px, 4.4vw, 60px)): the campus band headline over photography, max 16ch.
- **Headline** (600, clamp(32px, 3.6vw, 48px)): every section title, followed by the gold rule.
- **Figure** (600, clamp(40px, 4.4vw, 60px), 1, tabular numerals): campus figures in gold on navy, with a unit at 0.4em/500 in white.
- **Letter** (600, 64px, 1): the BKG-SMILE initials, gold on navy-deep.
- **Numeral** (500 italic, 40px, 1): roman stage numerals on academic stage cards.
- **Quote** (italic, clamp(24px, 2.4vw, 34px), 1.3): the Chairman's words.
- **Pull** (italic, clamp(22px, 2vw, 28px), 1.35): the welcome pull quote, navy, behind a 2px gold left rule.
- **Epigraph** (italic, clamp(20px, 2vw, 26px)): the Gandhi line over the campus photo, in gold.
- **Title Large** (600, 26–28px): card headings: hero enquiry card (26px), care card (26px), visit form card (28px), step numbers (28px); the distance values on campus (26px).
- **Title** (600, 24px): stage card and happenings panel headings.
- **Title Small** (600, 20–22px): admission step and SMILE titles (21px), photo-tile caption titles and the success message (22px), Chairman name and timing labels (20px).
- **List Serif** (400, 19px): event names in happenings lists.
- **Lede Hero** (400, clamp(17px, 1.3vw, 20px), 1.6, max 50ch): the hero lede in Moonlit Text.
- **Lede** (400, 18px, max 62ch): section ledes in Slate Ink; the footer motto uses 18px serif italic gold.
- **Body** (400, 17px, 1.65, max 62ch): running copy.
- **Body Small** (400, 15px): card descriptions, list items, form lede, nav links (15px/600, 17px in the mobile menu), footer text.
- **Caption** (600, 14px): roles, notes, class ranges (14px/700 navy), photo captions, citations.
- **Label** (700, 13px, 0.02em): form labels and legends; the utility bar and footer base line are 13px regular; error text is 13px/600.
- **Label Caps** (700, 13px, 0.12em, uppercase): footer column headings only.
- **Button** (700, 15px, 0.02em): all buttons.

### Named Rules
**The Italic Voice Rule.** Emphasis, quotations and stage numerals are set in Source Serif 4 italic; never bold a word for emphasis inside a heading.

**The Gold Rule Rule.** Every section title carries a 56px by 2px gold rule 18px below it, centred when the title is centred. A section heading without it is out of system.

## Layout

Full-bleed bands, each padded `space-6` (clamp(80px, 9vw, 128px)) vertically and `gutter` (clamp(20px, 5vw, 80px)) horizontally, with content in a centred column of max `1280px`. Bands alternate grounds: white, paper, navy, navy-deep, navy-soft, and two photographic bands (hero, campus). The figures band uses `space-5` (64px) padding; the campus band uses clamp(96px, 12vw, 168px).

Spacing steps are 8 / 16 / 24 / 40 / 64px plus the fluid section step; component internals also use 4, 6, 10, 12, 14, 18, 20 and 22px. Grid gaps between cards are 20–24px; between two-column halves clamp(40px, 6vw, 96px).

Recurring compositions: the hero is a 1.25fr / 0.75fr split (copy left, enquiry card right) with min-height min(100svh − 130px, 780px); two-column copy/photo splits for Welcome, Chairman, Admissions and Parents; four-up stage cards; a five-column SMILE grid divided by hairlines; a three-column photo mosaic with one tall tile; four-up figures divided by hairlines.

Responsive breakpoints in use: 1080px (hero stacks, nav collapses to a menu, stages and SMILE go two-up), 960px (mosaic, happenings, admissions and footer go two-up or single), 860px (welcome, chairman, parents stack; figures two-up), 760px (utility bar trims), 600px and 560px (single column; hero scrim turns vertical; hero buttons go full width).

## Elevation & Depth

Mostly flat, with depth from photography and tonal grounds. Cards sit on hairlines at rest; soft navy-tinted shadows appear on floating cards and as a response to state (header on scroll, stage card on hover). Photographs carry navy gradients to hold white text.

### Shadow Vocabulary
- **Header condensed** (`box-shadow: 0 6px 24px rgb(11 24 56 / 0.08)`): sticky header once the page scrolls.
- **Menu drop** (`box-shadow: 0 16px 32px rgb(11 24 56 / 0.1)`): the mobile navigation panel.
- **Card lift** (`box-shadow: 0 20px 40px rgb(11 24 56 / 0.08)`): academic stage card on hover, with a 4px rise.
- **Floating card** (`box-shadow: 0 24px 48px rgb(11 24 56 / 0.08)`): the sticky visit-form card.
- **Inset photo** (`box-shadow: 0 24px 48px rgb(11 24 56 / 0.16)`): the smaller overlapping welcome photo, with an 8px white border.
- **Over photography** (`box-shadow: 0 30px 60px rgb(0 0 0 / 0.25)`): the hero enquiry card only.

### Scrims
- **Hero scrim**: `linear-gradient(90deg, rgb(11 24 56 / 0.94) 0%, rgb(11 24 56 / 0.82) 42%, rgb(11 24 56 / 0.35) 75%, rgb(11 24 56 / 0.2) 100%)`; below 560px `linear-gradient(180deg, rgb(11 24 56 / 0.78) 0%, rgb(11 24 56 / 0.92) 60%)`.
- **Campus scrim**: `linear-gradient(90deg, rgb(11 24 56 / 0.88) 0%, rgb(11 24 56 / 0.6) 50%, rgb(11 24 56 / 0.15) 100%)`.
- **Caption scrim**: `linear-gradient(to top, rgb(11 24 56 / 0.9), rgb(11 24 56 / 0))` under photo-tile captions.

### Named Rules
**The Flat-Until-Asked Rule.** Cards in a grid are flat on a hairline at rest; shadow is earned by floating (a form card) or by interaction (hover, scroll).

## Shapes

Two radii, applied by role: gently rounded controls (`control`, 6px) for buttons, fields, chips, resource links, the skip link, the menu toggle and the founder portrait; softly rounded containers (`card`, 12px) for every card, panel, photo and the footer logo plate. The gold cap is a 3px bar inset 24px from each side of a card's top edge, rounded only on its lower corners (`cap`, 3px) so it clears the card's corners. Borders are 1px hairlines, 1.5px on outline buttons and the Chairman portrait's offset gold frame, 2px for gold rules. The only circle is the 5px dot separator in the admissions strip.

## Components

### Buttons
Solid, confident, and quiet in motion.
- **Shape:** gently rounded (6px), min-height 50px (46px for the header CTA), padding 0 26px, 1.5px border, 15px/700 Figtree with 0.02em tracking.
- **Gold (primary call to action):** Crest Gold with Midnight Blazer text; hover lightens to Polished Gold.
- **Navy:** School Navy with white text; hover deepens to Midnight Blazer. The header's "Admissions 2026–27" and in-section primary actions.
- **Outline:** School Navy stroke and text; hover fills navy with white text.
- **Outline Light:** 70% white stroke and white text, for use over photography; hover fills white with Midnight Blazer text.
- **Hover / Focus:** colour transitions at 200ms; a trailing arrow icon nudges 3px right over 240ms. Focus is the global 2px gold outline, 3px offset.

### Chips (choice chips)
- **Style:** used inside the enquiry form for choices; 42px tall, padding 0 18px, 1px hairline border, 6px radius, 15px/600 Ink.
- **State:** hover borders navy; selected fills School Navy with white text; keyboard focus shows a 2px gold outline at 2px offset.

### Cards / Containers
- **Corner Style:** softly rounded (12px).
- **Stage card:** white, 1px hairline, padding 32px 28px 30px; a gold cap starts at one quarter width and draws full across on hover (400ms) while the card rises 4px with Card lift and a Hairline Lift border.
- **Panel:** white on paper, 1px hairline, clamp(24px, 2.6vw, 36px) padding, static gold cap; the navy variant (blog) takes School Navy with white text and on-navy hairlines between items.
- **Form card:** white, hairline, clamp(24px, 3vw, 40px) padding, gold cap, Floating card shadow, sticky at 110px on wide screens.
- **Care card:** Paper ground, gold cap, two-column check list with Antique Gold check icons.
- **Photo tile:** 12px-rounded photograph on a navy-deep fallback, min-height 260px, with a serif title and caption over the Caption scrim; the image scales to 1.04 over 1200ms on hover.

### Inputs / Fields
- **Style:** white, 1px Hairline, 6px radius, min-height 48px, padding 10px 14px, 16px text in Ink; labels 13px/700 Midnight Blazer above with a 6px gap; selects carry a navy chevron.
- **Hover:** border to Field Hover.
- **Focus:** border to School Navy plus a 3px Gold Focus Halo; no outline.
- **Error:** Tie Red border and a 13px/600 Tie Red message below. Submit disables at 0.7 opacity with a progress cursor.
- **Success:** the form is replaced by an Antique Gold check mark, a 22px serif lead line, and a text-link reset.

### Navigation
- **Utility bar:** Midnight Blazer, 38px tall, 13px Moonlit Text; gold line icons for phone and mail; links turn white on hover.
- **Masthead:** sticky white header with a hairline base; 92px tall with a 74px logo, condensing to 76px and a 60px logo with the Header condensed shadow once scrolled (300ms).
- **Links:** 15px/600 Midnight Blazer; hover draws a 2px gold underline from the left (260ms).
- **Mobile (below 1080px):** a 46px bordered menu toggle opens a full-width white panel with hairline-separated 17px links, the navy CTA below, and the Menu drop shadow.
- **Footer:** Midnight Blazer, four columns (1.4fr 1fr 1fr 1fr), a white logo plate, a gold serif-italic motto, uppercase column headings, links that turn gold on hover, and a public-notice box with a Gold Hairline border.

### Resource Links
White 58px rows with 6px radius, 700 Midnight Blazer label and an Antique Gold arrow; hover fills School Navy with white text, the arrow turns Crest Gold and nudges 3px right.

### Section Title (signature)
Serif Headline, then a 56px by 2px gold rule 18px below, then an 18px Slate Ink lede at max 62ch 24px below. Centred and light (white title, Moonlit lede) variants exist.

### Figures and Dividers (signature)
Numbers in gold serif separated by vertical on-navy hairlines; stepped lists (admission steps, timings, events) separated by horizontal hairlines rather than boxed.

### Motion grammar
One curve: `cubic-bezier(0.22, 1, 0.36, 1)`. State changes run 160–300ms; reveals 900–1100ms; the hero photo settle 16s.
- **Hero settle:** the hero photograph scales from 1.08 to 1 over 16s.
- **Hero rise:** headline, lede, actions and enquiry card rise 18px and fade in over 1100ms at 0, 150, 300 and 400ms.
- **Scroll entrances (AOS-style, `appReveal` + `revealFrom`):** below-the-fold blocks enter over 1000ms when 12% visible: `up`/`down` (40px), `left`/`right` (80px slide), `zoom` (from 0.88), `zoom-out` (from 1.08), `flip` (18° tilt). Paired columns enter from opposite sides (text from the left, media from the right); lists stagger 90–140ms. Armed only when scripting runs, motion is allowed, and the element starts below the fold; a shared scroll check reveals anything a jump carried the page past.
- **Count up:** figures count from zero over 1400ms (ease-out quart) when 60% visible; the real value is always in the markup.
- **Header condense:** height, logo and shadow transition over 300ms.
- **Floating learning icons** (`app-particles`, client request 2026-11-03): thin outline icons (open book, light bulb, pencil, graduation cap, globe, flask, star), 22–42px, 1.6px stroke, drift slowly upward with a gentle turn and a soft opacity pulse, behind the content of a `.has-particles` section. Crest gold on navy grounds (opacity 0.45–0.75), navy (0.3) or deep gold (0.45) on white grounds. About 1–1.8 icons per 100,000 px², capped at 28 per section. Paused off screen.
- **SMILE spotlight** (`app-smile-section`): giant serif S-M-I-L-E letters with a crest-gold metallic shimmer (sanctioned gradient text, decorative and aria-hidden) on a gold rail that fills to the spotlit letter; the spotlight tours the five principle cards every 3.2s while on screen and follows hover or focus.
- **Quality wheel** (`app-quality-wheel-section`): the crest at the hub, a slowly turning dashed gold ring (80s), eight corner buttons (tablist) and a gold beam that swings 900ms to the active corner; the detail panel slides in. Tours every 4.2s until the visitor picks a corner. Below 680px it becomes a stack of cards.
- All of it is static under `prefers-reduced-motion: reduce` (the icons render as one still frame; spotlight and wheel tours are off).

## Do's and Don'ts

### Do:
- **Do** lead with the school's own photographs, under a navy scrim when text sits on them.
- **Do** put the 56px gold rule under every section title.
- **Do** use Source Serif 4 italic for emphasis, quotations and numerals, and Figtree for body, labels and buttons.
- **Do** keep controls at 6px and containers at 12px radius.
- **Do** tint every shadow and scrim from navy-deep (`rgb(11 24 56 / …)`).
- **Do** set gold text only on navy grounds; use Antique Gold for content on white or paper, at title size or larger.
- **Do** separate lists and figures with hairlines rather than boxing each item.
- **Do** keep motion to the five grammar moves on the one ease-out curve, and make each static under reduced motion.

### Don't:
- **Don't** use illustrations, mascots, decorative drawings or stock imagery; the client rejected the illustrated world as not professional. Small functional line icons (arrows, phone, mail, check) are part of the system.
- **Don't** flood a band in gold other than the admissions strip.
- **Don't** add hard, offset or grey shadows; depth is soft and navy-tinted.
- **Don't** add a third radius or pill-shaped buttons.
- **Don't** hide content until a script runs, or loop any animation.
