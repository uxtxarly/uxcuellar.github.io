---
layout: work
title: MBC Style Guide
description: Live style guide used across several MBC products. It contains visual examples, explanations of use and snippets of code.
tags: design research, front-end development.
teammates: Sam Bible.
duration: 9 Months, June 2014.
sponsor: Lightspeed Systems.
img: styleguide-home-small.png
---

"My Big Campus":http://www.mybigcampus.com is a project of a respectable size that has been adding new features (that could be considered stand-alone products by themselves) on a yearly basis, sometimes implemented by different teams. As a result, we found that there was a lack of design consistency across the site and the CSS code was not efficient enough or <acronym title="Don't Repeaty Yourself">DRY</acronym>.

At that point, we realized we needed to make changes, promote a more consistent design and refactor our CSS. The best way I found to establish and promote good practice was to use a live style guide. I used the same software GitHub used for their "Style Guide":https://github.com/styleguide/css, and it allowed us to automatically update our style guide after any changes were made on the CSS of the site.
<figure>
!/images/mbc-sg-detail.png(Screenshot of MBC Style Guide)!
<figcaption>Every module of the style guide included a snippet of code.</figcaption>
</figure>
In order to improve CSS scalability, I decided to build our own framework after a failed experiment with a popular UI framework. I followed the "SMACSS":https://smacss.com/ methodology for the structure and the "BEM":https://en.bem.info/ naming convention for the styles naming. You can learn more about the refactor process in this "blog post":/blog/i-refactored-css-for-9-months-and-i-survived/ I wrote a few months ago.

The final result was a stylesheet file that was 70% lighter and 1.5 seconds faster than the original one.