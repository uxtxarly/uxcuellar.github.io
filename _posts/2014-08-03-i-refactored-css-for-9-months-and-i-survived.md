---
layout: post
title: I refactored CSS for 9 months and I survived
tags:
- css
- refactor
- web development
redirect_from: "blog/417/i-refactored-css-for-9-months-and-i-survived/"
---

<p>I think that during the last 9 months I spent 80% of my time at work writing or refactoring <span class="caps">CSS</span>. Exciting, right? Well, the truth is that I had to change my mentality about how to do this kind of stuff. I had many years of experience doing <span class="caps">CSS</span> for small sites, sites with hundreds or a few thousand users. And I used to do this by my own, alone. Now I work on a e-learning web app that is used by several millions of kids across North America, Europe and Australia, and we have a team of developers working on the same code continuously. So the priorities and goals are different, and the performance and maintainability are in the top of the list.</p>
<h2>What we were doing: Old School <span class="caps">CSS</span> Architecture.</h2>
<p>When I started working on this website I found several problems that needed to be addressed. The site had grown quickly in the last two years, adding new functionalities and sections by user request. The problem is that we were lacking visual consistency between the new and the old sections, which looked almost as independent websites. And then we had the <span class="caps">CSS</span>, where every section had an independent <span class="caps">CSS</span> file and then we would have a global <span class="caps">CSS</span> file with some shared styles that were overwritten most of the time. The good thing is that we didn’t have many <span class="caps">CSS</span> conflicts, but it was easy to find the styles for many things repeated in 10 different places, so the compiled stylesheet kept growing and growing and everything started to smell. Also, we were using Sass but we were doing some nasty stuff with it, like nesting selectors to match the <span class="caps">DOM</span>. Please, don’t do this: It compiles pretty horrible <span class="caps">CSS</span>.</p>
<h2>Our first supermegaredesign. Meet Foundation.</h2>
<p><img src="/images/198.png"></p>
<p>So we concluded that we needed a redesign from scratch that would help us find some visual consistency and would also help us clean the stylesheets mess. We thought that we could use <a href="http://foundation.zurb.com/">Foundation 4</a>, a well known UI framework. It was supposed to be a silver bullet: we wouldn’t need to write all the <span class="caps">CSS</span> from scratch, it would gave as a good foundation to achieve that visual consistency and it should also help us implement new good practices. Well, the truth is that it was a complete disaster. Foundation is a good tool, but it wasn’t what we needed. These were some of the problems we found:</p>
<ul>
  <li>Foundation is highly opinionated. It takes many design decisions for you and you are going to spend quite a long time overwriting styles, and I’m not talking about only two buttons. It’s a fight against the framework, trying to impose your styles against foundation’s defaults (that are often buried in a gem, so you don’t have access to them). It’s funny how Bootstrap has a bad rep because of this, and some designers say that Foundations is much better and more <em>professional</em>. Well, in my humble opinion, it is not. They are both very similar.</li>
  <li>Foundation forces you to follow its markup, all the time. You need to structure your html exactly how they do it if you want the styles to work. For some people that’s fine, but I rather follow my own rules here</li>
  <li>I don’t write the JS on the site, but my coworkers weren’t fans of the Foundation modules. They complained about lack of flexibility and how they couldn’t adapt them to our needs.</li>
  <li>And then we have the bugs. Too many. Something would get fixed in a revision, and then the same revision would break something else. I believe Foundation 4 was written from scratch and I think it wasn’t quite ready for use in production sites.</li>
</ul>
<p>We ended up having a gigantic stylesheet, way bigger than the original, with more than 9000 selectors. By the way, that was the funny moment when we knew that <a href="http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx">IE 9 and older will only render stylesheets with less than 4096 selectors!</a> We had to split the <span class="caps">CSS</span> in three different files using this tool called <a href="http://blesscss.com/">Bless</a>.</p>
<p>I’m going to defend Foundation now. <strong>Foundation 5 fixed many of the problems we had in Foundation 4</strong> and I still think it’s a great tool to prototype sites in <span class="caps">HTML</span>. But the lesson I learned is that you shouldn’t use a UI framework in a production site if you care about the weight and the speed of your site, and I really think you should care. On the other hand, we started using Foundation before doing enough proper testing and evaluating if it was the right tool for us, so that was completely our fault.</p>
<h2>Second redesign. Let’s refactor everything!</h2>
<p>At this point we knew we had a new website that wasn’t fast enough and it was difficult to maintain. We knew we could do better, we assumed some mistakes we made in the past and we started a <span class="caps">CSS</span> refactor process that took months to be completed.</p>
<p>The first and obvious step was to get rid of Foundation so we started using a mix of smaller and more flexible tools. We used <a href="http://sass-lang.com/">Sass</a>, <a href="http://bourbon.io/">Bourbon</a> (a library of mixins for Sass), <a href="http://neat.bourbon.io/">Neat</a> (a grid generator from the makers of Bourbon), some elements of <a href="http://jqueryui.com/">jQuery UI</a> and our own defaults. But I think the most important part of this process was reorganizing our <span class="caps">CSS</span> using <span class="caps">SMACSS</span>.</p>
<h2>About <span class="caps">SMACSS</span>.</h2>
<p><a href="https://smacss.com/"><span class="caps">SMACSS</span></a> is a methodology, a way to write and organize <span class="caps">CSS</span> created by <a href="http://snook.ca/">Jonathan Snook</a>. Snook says that we should stop coding with a <em>page</em> mentality, that’s when you take a look at a psd file and try to type the code in a linear way… and then you repeat the same process for every single psd. You should instead take a step back and try to identify visual patterns in that page that are repeated across the site. These pattern should be coded in flexible modules that should be as context agnostic as possible, so you can reuse them in different parts of your site. That way you create a more organized and maintainable <span class="caps">CSS</span>.</p>
<p>If you are interested in this you should read <a href="http://shop.smacss.com/">Snook’s book</a>, or you could just watch this video as a quick introduction:</p>
<p><div class="fluid-width-video-wrapper" style="padding-top: 56.2%;"><iframe src="//player.vimeo.com/video/99877232?color=9C191E" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" id="fitvid694822"></iframe></div></p>
<p>Basically, we used to have a <span class="caps">CSS</span> file structure like this:</p>
<pre><code>├── Sections
│   ├── name of the section 1.scss
│   ├── name of the section 2.scss
│   └── name of the section 3.scss
├── Globals
│   ├── global styles.scss
│   ├── normalize.scss
│   └── variables.scss
└── application.scss</code></pre>
<p>And now we have something that looks like this:</p>
<pre><code>├── base (basic global styles, typography, print styles…)
│   ├── elements.scss
│   ├── normalize.scss
│   ├── print.scss
│   └── state.scss
├── layouts (basic structure of pages)
│   ├── onecolumn.scss
│   ├── twocolumns.scss
│   ├── section layout.scss
│   └── header.scss
│   └── footer.scss
│   └── …
├── modules (ui elements categorized as modules, submodules and variants)
│   ├── alerts.scss
│   ├── buttons.scss
│   ├── dropdowns.scss
│   ├── forms.scss
│   ├── lists.scss
│   ├── modals.scss
│   ├── tables.scss
│   └── …
├──  settings (we have here some settings and Sass variables)
│   ├── functions.scss
│   ├── mixins.scss
│   └── variables.scss
├── themes (seasonal themes that we only used on holidays)
│   ├── christmas.scss
│   └── halloween.scss 
└── application.scss</code></pre>
<p>We are also following (most of the time) some naming conventions that make our selectors easier to identify, and we are <a href="http://thesassway.com/beginner/the-inception-rule">trying to avoid nesting selectors more than three levels</a>. <strong>The result is a compiled stylesheet that is 70% smaller and a site that loads 1.5 seconds faster.</strong> Not bad, not bad at all.</p>
<h2>Let’s document all this stuff.</h2>
<p>We thought that this was a good opportunity to create a comprehensive documentation about our <span class="caps">CSS</span> and after doing some research we ended up using <a href="http://warpspire.com/kss/">Knyle Style Sheets</a>. With <span class="caps">KSS</span> we can create a living styleguide that is updated automatically every time we add or edit styles. The result is something very similar to <a href="https://github.com/styleguide/css">GitHub’s Styleguide</a>.</p>
<h2>And now what?</h2>
<p>I assume that our <span class="caps">CSS</span> code is not perfect, we can still improve certain areas and we are going to need to refactor those every few months. I think it’s normal and it’s part of our job, but I also think that now we have a solid base to keep growing in the future. Luckily, we won’t have more <em>redesigns from scratch</em> in a long time!</p>