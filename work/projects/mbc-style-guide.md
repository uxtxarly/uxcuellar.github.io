---
layout: work
title: MBC Style Guide
description: Live style guide used across several MBC products. It contains visual examples, explanations of use and snippets of code.
tags: design research, front-end development.
duration: 9 Months, June 2014.
sponsor: Lightspeed Systems.
img: styleguide-home-small.png
sitemap: false
---
<hr>
<p><a href="http://www.mybigcampus.com">My Big Campus</a> is a project of a respectable size that has been adding new features (that could be considered stand-alone products by themselves) on a yearly basis, sometimes implemented by different teams. As a result, we found that there was a lack of design consistency across the site and the <span class="caps">CSS</span> code was not efficient enough or <acronym title="Don't Repeaty Yourself"><span class="caps">DRY</span></acronym>.</p>
<p>At that point, we realized we needed to make changes, promote a more consistent design and refactor our <span class="caps">CSS</span>. The best way I found to establish and promote good practice was to use a live style guide. I used the same software GitHub used for their <a href="https://github.com/styleguide/css">Style Guide</a>, and it allowed us to automatically update our style guide after any changes were made on the <span class="caps">CSS</span> of the site.</p>
<figure>
<img src="/images/mbc-sg-detail.png" title="Screenshot of MBC Style Guide" alt="Screenshot of MBC Style Guide" />
<figcaption>Every module of the style guide included a snippet of code.</figcaption>
</figure>
<p>In order to improve <span class="caps">CSS</span> scalability, I decided to build our own framework after a failed experiment with a popular UI framework. I followed the <a href="https://smacss.com/"><span class="caps">SMACSS</span></a> methodology for the structure and the <a href="https://en.bem.info/"><span class="caps">BEM</span></a> naming convention for the styles naming. You can learn more about the refactor process in this <a href="/blog/i-refactored-css-for-9-months-and-i-survived/">blog post</a> I wrote a few months ago.</p>
<p>The final result was a stylesheet file that was 70% lighter and 1.5 seconds faster than the original one.</p>
