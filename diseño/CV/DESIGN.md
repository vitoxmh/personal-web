---
name: Atelier Developer Persona
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#ab351b'
  on-secondary: '#ffffff'
  secondary-container: '#fc7050'
  on-secondary-container: '#671000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0600'
  on-secondary-fixed-variant: '#891d04'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

This design system establishes a high-end, editorial identity for a modern web developer and creative. The brand personality is "The Sophisticated Craftsperson"—someone who balances technical rigor with artistic intent. The emotional goal is to evoke trust through precision while maintaining an approachable, human warmth.

The visual style is a hybrid of **Minimalism** and **Modern Editorial**. It prioritizes generous negative space and a disciplined grid to ensure professional clarity, yet utilizes distinctive serif typography to signal a creative, opinionated voice. The interface should feel like a premium digital gallery: quiet enough to let the work shine, but structured enough to feel like an expert tool.

## Colors

The palette is anchored in a high-contrast foundation to ensure a "crisp" feel. 
- **Primary (Deep Charcoal):** Used for primary text, iconography, and heavy structural elements. It provides more depth than pure black.
- **Secondary (Soft Terracotta):** A vibrant but sophisticated accent used sparingly for calls to action, active states, and highlights. It injects personality without being overly "tech-corporate."
- **Background (Antique White/Parchment):** A slightly warm off-white that reduces eye strain compared to pure white, giving the blog and CV a physical, paper-like quality.
- **Neutral (Slate Gray):** Reserved for secondary metadata, borders, and captions to maintain a clear visual hierarchy.

## Typography

The typography strategy relies on the tension between the classical elegance of **EB Garamond** and the sharp, functional precision of **Hanken Grotesk**.

- **Headlines:** Set in EB Garamond with tight tracking. Large display sizes should use medium weights to emphasize the beautiful serif details.
- **Body Text:** Hanken Grotesk provides a clean, neutral canvas for long-form blog reading and technical CV details.
- **Labels:** Use Hanken Grotesk in uppercase with generous letter spacing for section headers and tags to create a "wayfinding" effect that feels intentional and architectural.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model on desktop to mimic the structured feel of a printed portfolio. 

- **Desktop (1440px+):** A 12-column grid centered in a 1120px container. Large "editorial" margins (64px) create a sense of luxury and focus.
- **Tablet:** 8-column grid with fluid behavior.
- **Mobile:** 4-column grid with a emphasis on vertical rhythm. 

Use **Stack Spacing** to group related content. For example, use `stack-sm` between a headline and its metadata, but `stack-lg` to separate distinct project entries or blog sections. This drastic variance in whitespace is key to the minimalist-expert aesthetic.

## Elevation & Depth

This design system avoids traditional shadows to maintain a clean, flat, graphic aesthetic. Depth is instead communicated through:

1.  **Tonal Layering:** Using subtle shifts in background color (e.g., a slightly darker tint of the neutral background) to define code blocks or sidebars.
2.  **Fine Lines:** 1px borders in a muted neutral color are used to separate sections or define card boundaries, creating a "blueprint" feel.
3.  **Interaction Lifts:** Only upon hover should elements exhibit depth, using a very subtle, sharp 4px offset shadow (non-diffused) to mimic a physical card being lifted slightly off the table.

## Shapes

The shape language is disciplined and geometric. A "Soft" roundedness (0.25rem) is applied to buttons and input fields to ensure they feel modern and tactile, but large containers and image carousels should remain **Sharp (0px)** to reinforce the architectural, editorial grid. This contrast between "soft" interactive elements and "sharp" structural elements helps users subconsciously identify what is clickable.

## Components

- **Buttons:** Primary buttons use a solid Deep Charcoal background with crisp white text. They should have a slight horizontal padding bias (e.g., 12px vertical, 32px horizontal) to feel "wide" and stable. Hover states transition to the Soft Terracotta.
- **Chips/Tags:** Small, pill-shaped elements using the Label-Caps typography. Use a 1px border with no fill to keep them secondary.
- **Cards:** Project and blog cards should have no background or shadow by default—only a top 1px border to separate them in a list. This creates a "listing" aesthetic rather than a "dashboard" aesthetic.
- **Input Fields:** Bottom-border only (underlined style) for a minimal, "signature" look on contact forms, using the accent color for the focus state.
- **Code Blocks:** For the personal blog, code blocks should use a dark theme (Charcoal background) with a monospaced font, providing a high-contrast break from the warm parchment background of the prose.