---
layout: work
title: Goldstar's Design System
description: A design system that brings consistency and structure across multiple platforms.
tags: design research, visual design.
duration: 3 Months, April 2018.
sponsor: Goldstar Events
img: addevent-storyboard.jpg
sitemap: false
---
<script src="/flickity.js"></script>
---

### The story behind this project

In order to bring logic, consistency and structure to our design across multiple platforms, we create Goldstar's design system. not just a ui kit or pattern library. all the ui elements needed to have structure and meaning. results need to be flexible and scalable. This was part of a bigger rebranding project

### Steps

1. **Visual audit.**  
Revision of current design, compiling all existing ui elements in order to find duplicities
2. **Creation of visual design language.**  
Core of the design. Typography, color, spacers, separators and hand drawn elements
3. **Creation of component libraries.**  
Using Sketch. Separate libraries for each product. We started by building AMP's, since it's a smaller product.
4. **Documentation of components.**  
Notes in sketch libraries, react components in Storybook

### Component architecture

Each component library is arranged in levels like this:
- **Primitives:** This includes colors, gradients, patterns, and spacers. We thought about including here text styles, but we ended up managing them separately.
- **Level 1 / Foundation:** The foundation level includes components that can’t be broken down any further. These are very basic building blocks of our products. As such, they can’t contain nested components and overrides should be minimal. An example of foundational components are logos and avatars.
- **Level 2 / Lower-level blocks:** These are typically composed of a combination of primitives and level 1 components. Some UI elements included here are buttons and form elements.
- **Level 3 / Mid-level blocks:** Mid-level blocks are typically composed of a combination of primitives, level 1 and level 2 components. Modal windows, tables, and cards are all part of this level.
- **Level 4 / Full composition:** These elements are used mostly for demo purposes. They are full-screen compositions that include all other level components and primitives.

And we also have **separate text and layer styles**. We have text styles available in multiple weights, colors and alignments. The layer styles include predefined colors, gradients, form container states and button states. These all help create more flexible components in Sketch.

### Naming conventions

It was important to put in place some naming conventions that reflected our component architecture. We ended up using this:

`Level / Type of component / Component name / State or Pieces`

And an example would be:

`L2/nav/breadcrumbs/_pieces/link`

Keeping a consistent naming across components is also important because Sketch uses this names in order to arrange them in menus and in order to display the right component overrides when you use these components. You can use these overrides to customize your components with different nested elements, making them a lot more powerful and flexible.

### Maintenance and updates

So once we had the first of our component libraries ready we had to create a protocol in order to add or modify these components. Keep in mind that modifying these components in the master library will affect any design file using this library. You could easily break things, this is kind of a big deal!

First of all, the designer needs to decide if a new component is necessary. Is this new component going to be reused? If the answer is no, you can detach the original Sketch symbol and call it a day. But if the new variation or pattern is likely to be reused, then it might be time to create a new component.

The new component should follow some rules:
- It needs to follow our naming conventions.
- It should use nested components when it’s possible. The designer should try to organize the layers in a hierarchical way so the overrides panel in Sketch makes sense, make the layer names semantic and remember that color and icon symbols are good helpers.
- It should be responsive so it can be resized without breaking it.

When the new component is ready, it’s time to share it with the team before it’s merged in the component library. We use Abstract for version control of our files and libraries and the workflow here is very similar to git: create a branch, add your new stuff, commit your changes, ask for feedback and if the symbol gets approved then merge your branch.

### Things I Learned

The most exciting part of this project is that we were not just documenting some UI components, we were creating a new workflow for an entire team. There was a lot of trial and error in the process and I found some Sketch bugs (setting resizing constraints in nested symbols is definitely tricky) but this first library was quickly adopted by the entire team and we ended up creating additional libraries for our consumer site, newsletters and wireframes.
