# Homepage proposals

Audit of the homepage on `main` (commit `7d91a81`) and three ways to show one brand with two paths. Recommendation at the end.

## Audit

The page is already calmer than a typical agency template: sand background, navy and teal, serif headlines, the real logo, and no stock portrait. The 80 € scope, the four labelled demo sites, the WhatsApp short link, and Pedro’s short biography are in place. The problems are positioning and the first screen, not a lack of polish.

**Positioning.** The headline and the navigation still treat websites as the main product and in-person help as a smaller extra. A visitor who needs a printer, a backup, or help with an AI tool has to recognise themselves in a secondary block. A visitor who needs software, not a one-page site, only sees that work as a footnote to the 80 € page. The two offers are described, but they are not equal paths under one name.

**First screen.** Next to the headline there are two rounded cards, “Websites e soluções digitais” and “Assistência tecnológica”. They repeat the sections below, they sit side by side, and they look like a feature grid. The brief for this round asks for one headline, one uniting line, and two actions that lead somewhere — not two static boxes.

**Order.** Demos and the price appear before the help offer. Someone who came for practical help scrolls through a catalogue of fictional businesses first. The page answers “what sites can you make?” earlier than “can you sit with me and fix this?”.

**Motion and shape.** Almost every group is a rounded card or a pill button. Hover lifts the button. That is tidy, and it is also the default look of recent marketing templates. Nothing in the scroll tells you that you have moved from one kind of work to the other.

**What should stay.** Logo, palette, European Portuguese, the closed 80 € list, demo links labelled as concepts, the contact form that opens WhatsApp, privacy, canonical URL, and the github.io redirect. No new services, clients, or testimonials.

## Concept A — Two visual worlds, with a transition

The first screen is a single scene of ordinary equipment (a phone, a printer, a kitchen table). After a short transition it becomes a working digital layout (a page grid, a tool, a demo). The two CTAs sit on that scene. Path A keeps the warm, domestic frame. Path B keeps the precise frame.

**Pros**

- The difference between “help me with what I have” and “build something” is visible, not only written.
- A visitor remembers the brand as one person who can cross that line.

**Cons**

- The transition is the riskiest part. Done with opacity, video, or a large illustration it becomes the generic “AI agency” motion the brief wants to avoid, and it fights `prefers-reduced-motion`.
- It needs artwork we do not have. Inventing a custom illustration, or staging stock objects, adds a look the current logo does not ask for.
- On a phone the scene and the two CTAs compete for the same small first screen. The words should win.

## Concept B — Scroll-driven progressive reveal

The first screen is only type: a headline, one sentence that names both paths, and two text actions stacked as a short index (not cards). Choosing one scrolls to that path. Path A is a warm, open list: equipment, software, backups, tools, practical AI help, in person or remote. A single bridge line marks the change. Path B is tighter: numbered work, the confirmed 80 € scope, then the four demo concepts. A thin rail and the header rule shift from a warm mark to teal as the reader crosses into path B. Later sections answer the remaining questions in order: how it starts, who does the work, the few confirmed practical facts, then contact.

**Pros**

- Both paths are fully present. Nothing is hidden behind a control, so the page still makes sense if someone never touches a button.
- The two CTAs match the brief exactly, and they lead to different content instead of repeating it in boxes.
- The reveal is the order of the page plus one colour shift. It stays readable with reduced motion, without scroll-jacking, and without fading text out.
- It fits the new theme control. Light, dark, and system are a separate choice, not a second “which path?” switch.

**Cons**

- The story depends on scrolling. The first screen must make the two actions obvious or the lower path is easy to miss.
- A colour shift is quieter than concept A. It will not feel like a cinematic change. That is also why it stays professional.
- The page is longer than a single switched view, because both paths are written out.

## Concept C — A central switch

Under the headline, one control toggles the page between “Tecnologia próxima” and “Desenvolvimento digital”. Copy, examples, and the call to action swap in place. The other path is one tap away.

**Pros**

- The first screen stays short.
- The active path can be very specific, because it does not share the screen with the other offer.

**Cons**

- Half the work is invisible until someone notices the switch. Many visitors will not.
- Search engines and someone sending a link see only the default path unless extra work is done to deep-link the state.
- The page already needs a three-way theme control (Claro / Escuro / Sistema). A second switch in the same header asks people to learn two toggles.
- Swapping a whole section in place is the pattern of product tours and template kits. It also has to be rebuilt carefully for the keyboard and for reduced motion.

## Recommendation

Build concept B.

Concept A spends the design on a transition we cannot support with real artwork without looking staged. Concept C hides a path and collides with the theme control. Concept B is the one that keeps a single brand, gives each path its own voice, and still lets a person act from the first screen: help, or a website or software. The motion stays limited to the scroll position itself — a warm rule that becomes teal — so the page does not perform for the reader.

Implementation notes that follow from this choice:

- Do not fade sections in from `opacity: 0`. Text must be readable on load, in screenshots, and with reduced motion.
- Do not place two summary cards beside the headline.
- Keep the 80 € included list and the extra-quote list word for word, inside the digital path.
- Keep the four demos inside that same path, still labelled as concepts.
- FAQ only: free diagnosis, free travel inside the municipality of Arouca, custom quotes, contact by WhatsApp.
