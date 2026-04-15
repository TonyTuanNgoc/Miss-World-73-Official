# AGENTS.md — Miss World 73 Vietnam · Internal Team Planning Website

> This document is the single source of truth for all design, development, and content decisions on this project.
> It should be consulted before any new section, component, or page is built.
> It will grow over time as inspiration references, section briefs, and team feedback are added.

---

## 1. Project Overview

### What This Is
A **private, internal website** for the Miss World 73 Vietnam production and coordination team.
It is not a public-facing promotional site. It is not visible to contestants or the general public.

### Who It's For
- Presenters and hosts
- Training and coaching staff
- Country knowledge and research leads
- Interview preparation coordinators
- Media and social media coordinators
- Future casting team members

### Core Purpose
1. **Inspire** the team from the moment they open the site — make them feel proud, motivated, and ready
2. **Align** all departments around a shared vision, workflow, and resources
3. **Centralise** knowledge: countries, cultures, locations, interview angles, media plans
4. **Support** future casting workflows and documentation

### The Team's Emotional Experience
When a team member opens this site, they should feel:
- Pride in representing Vietnam to the world
- Excitement about welcoming 130+ countries
- A sense of elegance, care, and professionalism
- Motivated and clear about their role and responsibilities

---

## 2. Project Goal

> **"Make Vietnam's team feel that they are building something historic — and give them everything they need to do it beautifully."**

This site exists to serve the people doing the real work behind Miss World 73. Every design decision, every piece of content, and every interaction should reinforce that mission.

---

## 3. Design System & Rules

### 3.1 Core Color Identity
- **Miss World Blue** is the primary brand color
  - Primary: `#003876` (deep, authoritative blue — close to Miss World's official identity)
  - Accent: `#005BBB` (vibrant blue for interactive elements)
  - Soft Blue: `#E8EFF8` (backgrounds, cards, gentle surfaces)
- **Gold / Warm Champagne** for elegance, highlights, and Vietnamese cultural resonance
  - Gold: `#C9A84C`
  - Champagne: `#F5EDD6`
- **Deep Neutral** for text and grounding:
  - Dark: `#1A1A2E`
  - Mid: `#4A4A68`
  - Light: `#F8F8FC`
- **White** for spaciousness and cleanliness

### 3.2 Typography Rules
- **Headlines**: Serif font — elegant, editorial, internationally confident
  - Recommended: `Playfair Display`, `Cormorant Garamond`, or `DM Serif Display`
  - Weight: Regular to Bold (400–700)
  - Headlines should be **large and commanding** — occupying significant vertical space, not timid
- **Body / UI**: Clean, modern sans-serif
  - Recommended: `Inter`, `Outfit`, or `Plus Jakarta Sans`
  - Weight: Regular (400), Medium (500)
- **Accent / Labels**: Light uppercase tracking for section labels and metadata
- **Vietnamese text** must render perfectly — test with diacritics at all sizes
- Avoid: system fonts, overly geometric typefaces, anything that reads as "startup"

### 3.3 Spacing & Layout
- Use **generous white space** — the design should breathe
- Section padding: minimum `120px` top/bottom on desktop
- Maximum content width: `1280px`, centred
- Grid: 12-column where needed, but lean toward editorial single-column or asymmetric layouts
- Photography should be allowed to **bleed to the edges** of the viewport where used as hero or dividers
- Alternating section rhythm: dark cinematic → light editorial → dark image → light text — creates depth and pace
- Mobile: the site must work on tablets and phones — team members will use it on all devices

### 3.4 Imagery & Visual Language
- Use **cinematic, full-width** imagery wherever possible — images should bleed to edges, never float in boxes
- Photography style: warm, aspirational, culturally rich — not stock-photo cold
- Vietnam imagery: landscapes, traditional/contemporary culture, national pride elements
- Miss World imagery: ceremony, stage, global community
- Avoid: generic beauty pageant clichés, overly retouched glamour photography, stock photo faces
- All images should feel **intentional and editorial**, not decorative filler
- Dark overlays on images should be subtle — enough to make text legible, not enough to kill the photo

### 3.5 Interactions & Motion
- Subtle fade-ins and sliding reveals as sections enter the viewport
- Hover states: gentle, not aggressive — a soft lift or glow, not a jump
- Page transitions: smooth, not flashy
- No auto-playing videos unless muted and explicitly intentional
- Loading states: elegant, never jarring

### 3.6 Overall Aesthetic Reference
The closest reference point captured is **exoape.com** — a high-end digital design studio that achieves:
- Very large display type over full-bleed photography (the type commands the page)
- Dark, moody sections with depth and intention
- Editorial white sections for contrast and legibility
- Scattered photography layouts — images not always in boxes, sometimes anchored to corners or asymmetrically placed
- Minimal navigation with strong typographic confidence
- A rhythm of different section types creating an experience that feels curated, not templated

Apply this same visual confidence and editorial rhythm — adapted with Vietnamese warmth, blue, and gold instead of the neutral studio palette.

### 3.7 Aesthetic Words
`Cinematic` · `Spacious` · `Cultural` · `Warm` · `Proud` · `Elegant` · `Grounded` · `International` · `Editorial` · `Commanding`

---

## 4. What To Avoid

These are hard rules. If a suggestion or design element falls into any of these categories, reconsider it.

| ❌ Avoid | ✅ Instead |
|---|---|
| SaaS / startup dashboard feel | Editorial, editorial, editorial |
| Cold luxury (white + black only) | Warm neutrals, blue, champagne golds |
| Generic beauty pageant glam | Cultural depth, national pride, human warmth |
| Tight spacing, cramped cards | Open, spacious, breathing layouts |
| Neon or vibrant accent colors | Refined palette: blue, gold, warm neutrals |
| Decorative animations for no reason | Motion only when it adds meaning or delight |
| Small, timid headline typography | Headlines should be large, confident, commanding |
| Over-designed hero text effects | Clean, confident typography — no gradients on text |
| Fashion-magazine-only aesthetic | Globally connected, human, team-centred |
| Images boxed into cards everywhere | Full-bleed, edge-to-edge images where possible |
| All sections the same brightness | Alternate: dark → light → dark for depth and rhythm |
| Placeholder content left in production | Every section must feel intentional |
| English-only framing | Vietnamese cultural identity should be present and felt |

---

## 5. Homepage Priorities

The homepage is the most important page. It should do the following in order:

### 5.1 Hero Section (First Priority)
**Goal:** Inspire the team the moment they arrive.

- Full-viewport cinematic hero — image or dark overlay, no whitespace here
- A **large, commanding headline** — the type should own the page — in Vietnamese and/or English
- Subheadline that grounds the human mission: *"Chúng ta đang chào đón thế giới đến Việt Nam."*
- Background: beautiful cinematic image of Vietnam or a composited Miss World reference — edge to edge, no borders
- No login walls, no dashboards — immediate emotional impact
- A single soft scroll-down indicator

**Tone of hero copy:** Proud, warm, historic. Not corporate. Not hype. Grounded excellence.

**Typography in hero:** Think large. The headline should feel like it belongs on a poster. It anchors the entire first impression.

### 5.2 Mission & Team Alignment Block
- Brief statement of the team's shared mission
- Visual representation of departments or team areas (not org chart — more like visual pillars)
- This can be a lighter editorial section — white or soft background for contrast after the dark hero

### 5.3 Section Navigation Cards
- Beautiful cards or a visual grid that links to the main sections
- Each card should feel like an invitation, not a navigation link
- Use imagery, cultural cues, and descriptive copy — not just section names
- Can use scattered/asymmetric image placements à la exoape reference

### 5.4 Quick Updates / Pinned Notices
- A lightweight "what's new" or "pinned notice" area for coordinators to surface team updates
- Minimal, unobtrusive — doesn't dominate the page

### 5.5 Footer
- Minimal and elegant
- Internal branding only — no public disclaimers
- Team contact or coordinators section (optional)

---

## 6. Main Sections

### 6.1 Home
See Section 5 above.

### 6.2 Presenter Team
**Purpose:** A hub for the on-stage hosts and presenters.
- Profiles of presenters: name, background, show roles, language strengths
- Show schedule and their segments
- Rehearsal notes and briefing documents
- Communication channel or coordinator contact
- Tone: warm, supportive, professional

### 6.3 Contestants & Countries
**Purpose:** Country-by-country knowledge base for the team.
- Search/filter by region, country, or contestant name
- Country cards: flag, key cultural facts, language, notable context for interaction
- Contestant profiles (when available): photo, name, country, background notes
- Notes for presenters and training staff
- Tone: curious, respectful, global

### 6.4 Locations & Culture
**Purpose:** Vietnam knowledge base — for team orientation and contestant welcome.
- Key locations used during Miss World 73 (venues, events, excursions)
- Cultural context: Vietnamese values, customs, etiquette for hosting internationals
- City and region guides
- What to share with contestants about Vietnam
- Tone: proud, hospitable, richly informative

### 6.5 Interview Prep
**Purpose:** Resources to prepare the team for contestant interview scenarios.
- Common interview question formats and structures
- Cultural sensitivity notes by region
- Practice scenarios and response frameworks
- Scoring criteria and notes
- Tips for judges and interview facilitators
- Tone: professional, clear, confidence-building

### 6.6 Media & Social
**Purpose:** Coordination hub for social media and media relations.
- Content calendar and posting schedule
- Approved assets and brand guidelines for social use
- Platform-specific notes (Instagram, TikTok, Facebook, YouTube)
- Press contact list and media protocols
- Hashtag strategy and official handles
- Tone: strategic, energetic, organised

### 6.7 Casting *(Future Section)*
**Purpose:** Support future casting workflows for national contestants.
- Status: **Placeholder only** — do not build yet
- Will include: submission forms, evaluation tools, scheduling, documentation
- Mark as "Coming Soon" in the navigation with a visual indicator

---

## 7. Technical Guidance

### 7.1 Stack (Proposed)
- **HTML + CSS + JavaScript** (vanilla) for initial build
- Consider **Next.js** or **Vite** only if interactivity grows significantly (filter, search)
- No CMS required initially — content can be hardcoded and updated via source
- If a lightweight CMS is needed later: consider **Notion embed**, **Airtable**, or **Contentlayer**

### 7.2 Performance
- Page load: under 2 seconds on a standard connection
- All images: optimised WebP format
- Fonts: load via Google Fonts with `display=swap`
- No unnecessary JavaScript libraries

### 7.3 Responsiveness
- Fully responsive: Desktop → Tablet → Mobile
- Test breakpoints: `1440px`, `1024px`, `768px`, `375px`
- Navigation: hamburger/drawer on mobile

### 7.4 Accessibility
- All images have descriptive `alt` text
- Colour contrast: WCAG AA minimum
- Keyboard navigable
- `lang="vi"` or `lang="en"` where appropriate

---

## 8. Content & Copy Rules

- **Tone:** Warm, proud, international, clear. Never corporate. Never cold.
- **Languages:** English-first for the internal interface, with Vietnamese present and respected — especially in cultural sections and the hero
- **Vietnamese text:** Must be proofed by a native speaker before publishing
- **Copy length:** Short and purposeful — this is not a document site; content should guide and inspire, not overload
- **No lorem ipsum** in any shared or reviewed version

---

## 9. Reference Images & Inspiration

### 9.1 Confirmed References

**Source: exoape.com** (5 screenshots captured 2026-04-11)

The Exo Ape site demonstrates the closest visual language to what this project should achieve:

| What was observed | How it applies here |
|---|---|
| Very large display type over full-bleed photography | Hero headline should own the viewport — large, proud, unhurried |
| Dark sections with depth and subtle texture | Use dark sections for emotional weight — hero, section transitions |
| Light editorial sections for breathing room | White/soft sections for content-heavy areas — mission, nav cards |
| Scattered/asymmetric image placement | Section navigation cards can use asymmetric photo anchoring |
| Minimal top navigation | Navigation should be restrained — never visually dominant |
| Alternating dark/light section rhythm | Build page rhythm: dark hero → light mission → dark image → light cards |

### 9.2 Hero Reference: Exo Ape–Style Hero (Adapted)

**Reference pattern:** Full-bleed cinematic image, very large headline, minimal top navigation, spacious and premium editorial first impression.

#### What to take from this reference
- Full-bleed image covering the entire viewport — no padding, no borders, no container
- Headline typography that is genuinely large — not "big for a website" but large enough to feel architectural
- Navigation that is minimal and recedes — it should not compete with the hero image or headline
- Generous empty space around the copy — the layout does not rush
- The first impression reads as premium, considered, and intentional

#### What not to copy directly
- European city mood (Venice, Amsterdam — the references lean cold and Continental)
- The emotional neutrality of a studio or agency portfolio
- Cool, desaturated color grading that feels distant or intellectual
- A tone that says "we make things" rather than "we welcome you"

#### How to adapt for this project
- **Background image:** Vietnam-forward and cinematic — golden light over Hội An lanterns, a wide landscape of Hạ Long Bay at dusk, the soft green of rice terraces at dawn, or the ceremony of Áo dài in motion. Never a Western landmark.
- **Emotional tone:** Warm, welcoming, proud, and human. The hero should feel like an open door, not a portfolio cover.
- **Color identity:** Miss World Blue (`#003876`) present in the overlay, navigation, or typographic accent — not neutral black/grey
- **Headline direction:** Something that communicates arrival, pride, and purpose. A phrase that makes a team member feel they are part of something historic.
  - Example direction: *"Việt Nam chào đón thế giới."* or *"We are ready to welcome the world."*
- **Subheadline:** One line that grounds the mission — addresses the team directly, warmly
- **Scroll indicator:** Minimal — a single animated chevron or a soft line, nothing decorative

#### Summary intent
> The hero must feel like the opening frame of a film about Vietnam — not the opening slide of a brand deck. It should move the viewer before they read a single word.

---

### 9.3 Reference Buckets (to be filled by user)

- [ ] Miss World 73 official branding references
- [ ] Vietnamese cultural/landscape photography inspiration
- [ ] Additional editorial web design references
- [ ] Typography pairings (serif headline + clean body)
- [ ] Color palette swatches / moodboard
- [ ] Hero layout compositions
- [ ] Card and section layout references
- [ ] Internal team site references (comparable projects)

---

## 10. Revision Log

| Date | Change | Author |
|------|--------|--------|
| 2026-04-11 | Initial AGENTS.md created — structure, design rules, section briefs | Antigravity |
| 2026-04-11 | Updated with visual analysis of exoape.com references; refined typography guidance, image treatment rules, and section rhythm | Codex |
| 2026-04-11 | Added hero reference brief (9.2): what to take, what not to copy, and adaptation notes for Vietnam context | Antigravity |
