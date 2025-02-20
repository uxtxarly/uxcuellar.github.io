---
layout: post
title:  "Building Responsive Layouts: Behind the Scenes of Our Design System"
authors: carlos
description: A deep dive into the process of creating responsive layout rules for our design system at Trimble.
tags:
  - design systems
  - design
bluesky:
---

Creating consistent layouts across multiple applications is like establishing the foundation of a house - if it's solid, everything built on top will be more stable. Let me walk you through how we developed responsive layout rules for our [design system at Trimble](https://modus.trimble.com).

## Why We Did This

We had three main goals:
- Create common responsive layouts that teams could use as starting points
- Build consistency across all Trimble applications
- Develop versatile guidelines that could adapt to each app's unique needs

The key was finding the balance between standardization and flexibility. We didn't want to box designers in, but rather give them reliable building blocks.

## Starting With Research: The Layout Audit

Before jumping into design, we needed to understand what already existed. My team collected key screenshots from 28 different Trimble applications - quite the task!

We uploaded everything to a **Miro** board and started grouping screens with similar layouts. This affinity mapping exercise was incredibly revealing. Despite the different purposes of each application, clear patterns emerged in how information was organized.

![Affinity Mapping with Miro](/assets/images/rl-miro.jpg)

Some teams had naturally gravitated toward similar solutions for navigation, content areas, and tool placement. These organic patterns became our goldmine of insights.

## From Patterns to Principles: Design Phase

Based on our audit findings, we synthesized everything **into three distinct layout types**, each with two grid variations: full-width and centered.

![One pane layout](/assets/images/rl0.jpg)
![Two pane layout](/assets/images/rl1.jpg)
![Grid layout](/assets/images/rl2.jpg)

We didn't reinvent the wheel - the existing Modus grid system provided a solid foundation that teams were already familiar with. For each layout pattern, we developed:

- A clear introduction explaining when to use it
- Real-world examples showing the layout in action
- Detailed specifications for columns and spacing
- Flow behavior documentation showing how elements would respond at different breakpoints

The most challenging part was ensuring these layouts would work across different screen sizes. We spent considerable time testing how each layout would adapt from large desktop monitors down to tablet views.

## Making It Real: Deliverables

Great documentation is useless if nobody can implement it. We created two key deliverables:

1. A comprehensive **Figma file** containing:
   - Library grid styles ready to be applied
   - Example frames showing various compositions
   - Component placement guidelines within each layout

2. A practical **GitHub repository** with:
   - HTML templates developers could quickly implement
   - A demo website showcasing the layouts in action

This two-pronged approach meant both designers and developers had what they needed to start using these layouts immediately.

## The Impact

Since launching these layout guidelines, we've seen a noticeable improvement in cross-application consistency. Teams aren't starting from scratch with each new screen, and users are experiencing more predictable interfaces as they move between Trimble products.

The best part? Teams are using these layouts as starting points but still adding their own touches based on their users' specific needs - exactly what we hoped would happen.

Have you worked on standardizing layouts across multiple applications? I'd love to hear your experiences in the comments!
