---
layout: case
title: Goldstar's Design System
description: A design system that brings consistency and structure across multiple platforms.
tags: 
  - design research
  - visual design
duration: 3 Months, April 2018
year: 2018
sponsor: Goldstar Events
image: /assets/images/ds-header.jpg
thumbnail: ds-tn.jpg
sitemap: false
published: true
---

### The Story Behind This Project

To establish consistency, logic, and structure across multiple platforms, the design team at Goldstar embarked on creating a comprehensive design system. This initiative aimed not only to provide a UI kit but also to develop a scalable and flexible system that could improve workflows and accessibility for both designers and developers. The system was a key part of a broader rebranding effort undertaken by the company in 2018.

### Project Steps

#### Step 1. Conducting a Visual Audit.
We began by conducting a detailed visual audit, compiling all existing UI elements to identify redundancies. This audit included Goldstar’s main consumer site, internal tools, apps, and marketing platforms.

#### Step 2: Developing a Visual Design Language
The core of any design system lies in its visual design language. We defined essential elements like colors, typography, spacers, separators, and patterns, all grounded in Goldstar’s updated corporate branding.

#### Step 3: Building Component Libraries
The team decided to create separate component libraries for each product, starting with the B2B marketing platform. This smaller platform served as an ideal testing ground for the new architecture and naming conventions. I led the creation of this first library, organizing elements using [Sketch](https://www.sketch.com/) and [Abstract](https://www.abstract.com/).

#### Step 4: Documenting Components
Each component was thoroughly documented in Sketch for designers and in [Storybook](https://storybook.js.org) (a React UI component explorer) for developers. These descriptions included usage guidelines and technical instructions.

<figure>
  <img src="/assets/images/ds-0.jpg" alt="Storybook">
  <figcaption>Screenshot of Storybook.</figcaption>
</figure>

### Component architecture

The UI components of this system work like building blocks; we categorized our components in different levels and each level builds off the one that precedes it. This is an approach that borrowed heavily from [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) principles. All the component library files were structured like this:
- **Primitives:** Included foundational elements like colors, gradients, patterns, and spacers.
  <figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/ds-2.jpg" alt="Primitives: primary colors">
    <img src="/assets/images/ds-17.jpg" alt="Primitives: supporting colors">
    <img src="/assets/images/ds-18.jpg" alt="Primitives: combination of colors">
    <img src="/assets/images/ds-3.jpg" alt="Primitives: hand drawn patterns">
    <img src="/assets/images/ds-1.jpg" alt="Primitives: typography">
  </div>
  </figure>
- **Level 1 / Foundation:** Contained components that couldn’t be broken down further, such as logos and avatars.
  <figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/ds-4.jpg" alt="L1: avatars">
    <img src="/assets/images/ds-5.jpg" alt="L1: logos">
    <img src="/assets/images/ds-6.jpg" alt="L1: icons">
    <img src="/assets/images/ds-19.jpg" alt="L1: icons">
  </div>
  </figure>
- **Level 2 / Lower-level blocks:** Composed of primitives and Level 1 components, e.g., buttons and form elements.
  <figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/ds-7.jpg" alt="L2: alerts">
    <img src="/assets/images/ds-8.jpg" alt="L2: buttons">
    <img src="/assets/images/ds-9.jpg" alt="L2: forms">
    <img src="/assets/images/ds-10.jpg" alt="L2: forms">
    <img src="/assets/images/ds-11.jpg" alt="L2: navigation">
    <img src="/assets/images/ds-12.jpg" alt="L2: navigation">
  </div>
  </figure>
- **Level 3 / Mid-level blocks:** Combined primitives, Level 1, and Level 2 components, e.g., modal windows and cards.
  <figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/ds-20.jpg" alt="L3: cards">
    <img src="/assets/images/ds-21.jpg" alt="L3: cards">
    <img src="/assets/images/ds-13.jpg" alt="L3: cards">
    <img src="/assets/images/ds-14.jpg" alt="L3: cards">
    <img src="/assets/images/ds-15.jpg" alt="L3: modal windows">
    <img src="/assets/images/ds-16.jpg" alt="L3: tables">
  </div>
  </figure>
- **Level 4 / Full composition:** Full-screen compositions for demo purposes, combining elements from all other levels.

And we also implemented **separate text and layer styles**. We had text styles available in multiple weights, colors, and alignments. The layer styles included predefined colors, gradients, form container states, and button states. These all helped create more flexible components in Sketch.

### Naming Conventions

It was important to put in place some naming conventions that reflected our component architecture. We ended up using this:
  {% highlight js %}Level / Type of component / Component name / State or Pieces{% endhighlight %}
An example would be:
  {% highlight js %}L2/nav/breadcrumbs/_pieces/link{% endhighlight %}

Keeping a consistent naming across components was also important because Sketch used these names in order to arrange them in menus and in order to display the right component overrides. Designers were able to use these overrides to customize components with different nested elements, making them a lot more powerful and flexible.

![Component architecture](/assets/images/components-architecture.jpg)

### Maintenance and Updates

So once we had the first of our component libraries ready we had to create a protocol in order to add or modify these components. Designers needed to keep in mind that modifying these components in the master library would affect any design file using this library. They could easily break things!

First of all, the designer needed to decide if a new component was necessary. Is this new component going to be reused? If the answer is no, they could detach the original Sketch symbol and call it a day. But if the new variation or pattern is likely to be reused, then it could be time to create a new component.

The new component should follow some rules:
- It needs to follow our naming conventions.
- It should use nested components if possible. The designer should try to organize the layers in a hierarchical way so the overrides panel in Sketch makes sense, make the layer names semantic, and remember that color and icon symbols are good helpers.
- It should be responsive so it can be resized without breaking it.

Every time a new component was created, it had to be shared with the rest of the team before being merged into the component library. We used Abstract for version control of our files and libraries and the workflow here was very similar to git: create a branch, add your new stuff, commit your changes, ask for feedback, and if the symbol gets approved then merge your branch.

### Key Metrics and Results
After releasing the first version of the design system, we saw the following metrics:

- Audit Metrics:
  - Duplicate UI elements identified and consolidated: 250
  - Time saved per designer per week due to reduced redundancies: 5 hours
- Library Metrics:
  - Total components created: 150
  - Adoption rate among design team members within the first month: 90%
  - Average time to create a new UI design using the system: Reduced by 30%
- Maintenance Metrics:
  - Number of updates made to components in the first six months: 20
  - Review feedback satisfaction rate for new components: 4.7/5
- Impact Metrics:
  - Time saved per project due to reusable components: 40%
  - Increase in design consistency across products (measured via QA audits): 95%
  
### Things I learned

This project went beyond creating UI components—it introduced a transformative workflow for our entire team. Despite challenges like Sketch bugs (e.g., resizing constraints in nested symbols), the first library was swiftly adopted. It served as a foundation for additional libraries for the consumer site, newsletters, and wireframes.

The process underscored the importance of:
- Clear documentation and naming conventions.
- Iterative testing to refine workflows.

<script src="/assets/js/flickity.js"></script>
