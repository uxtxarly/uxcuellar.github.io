---
layout: post
authors: carlos
title: New site, who dis
image: /assets/images/topo3.webp
description: Announcing the first significant update to this site since forever!
tags:
  - me
  - blogs
---
**November 2014.** That was the last time I redesigned my personal website, and it was also when I migrated all the content [from Textpattern to Jekyll](/blog/2014-11-05-migrating-to-jekyll/). At that time I was doing front-end professionally and I wanted to reflect that in my website. Oh, I was so proud of how clean and semantically correct the code was... And no JavaScript! And since I was using Sass variables, refreshing the look of the site was very easy, I just had to change a few lines of code to replace the fonts and colors.

But shortly after, 8 years ago, I stopped doing front-end at work. And I didn't write here because, well, I didn't have much time. I'm trying to change that now.

### A personal playground

I don't expect a lot of people to read this, and that's totally ok. I'm building this new personal site because I want it to be my own digital playground, the place where I can experiment with things with no fear of breaking them, a corner where I can write short notes and share what I'm doing, or what music I'm liking lately. Some people call it a [digital garden](https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/), but you get the idea.

So I'm using this new domain, [cuellar.fr](https://cuellar.fr), because it's shorter than the previous one and I've been wanting to use it for some time. And my full last name is *Cuéllar Francés*, so the .fr TLD is kind of perfect!

The content is similar, with a few new additions. I got rid of all the blog posts that didn't seem relevant anymore, and I added a couple of new sections: [Music](/music), where I share some mixes I've been uploading to Mixcloud, and [Now](/now), which is just a short article where I share what I'm up to right now (I got the idea from [here](https://nownownow.com/about)). I'd like to add a blogroll at some point, and the portfolio side is a work in progress that will probably take a few more months to complete.

### Tools I used

On the technology side, I'm still using [Jekyll](https://jekyllrb.com/). I considered other static site generators that are more modern and faster, like [Hugo](https://gohugo.io/) or [Eleventy](https://www.11ty.dev/), but for the amount of content I share here Jekyll works just fine and I'm already familiar with how it works. There's also the fact that it has native support for hosting in [Github Pages](https://pages.github.com/) and I wanted to keep things simple, but that didn't work exactly as I planned it.

So, my CSS skills were a bit rusty and I wanted to use this project as an opportunity to learn new things, but I also didn't have a lot of time. That's why I ended up using [Tailwind](https://tailwindcss.com/), a utility-first CSS framework that allowed me to build exactly what I wanted... without writing much CSS, honestly. If you are used to semantic CSS, you are going to be shocked (maybe horrified) the first time that you see a project built with Tailwind, and I'm aware that the approach is controversial, but for me it just worked. I was up to speed in a few hours, and the final CSS file is extremely light. What didn't work is the hosting in Github Pages. Since Tailwind used [PostCSS](https://postcss.org/), Github didn't render the styles out of the box and the workarounds I found online didn't work for me. I ended up hosting in [Netlify](https://www.netlify.com/), which ended up being a better solution because it's faster and more flexible than Github Pages.

So what's next? I'm going to keep experimenting with some things. I'm not sure if comments are very useful in 2023 but I'm using a [system that connects them to Github Discussions](https://giscus.app/), which feels like the right place to store them. But of course, you need a Github account in order to leave a comment, so that's not ideal. [Webmentions](https://indieweb.org/Webmention) is the other technology I should try to implement, but it doesn't seem very straightforward. I also found some people that used [Mastodon as their comment platform](https://jan.wildeboer.net/2023/02/Jekyll-Mastodon-Comments/)... We'll see. And I'll keep fixing bugs and polishing things here and there. So if you find something, or if you just want to say hi, please feel free to **leave a comment** or [send an email.](mailto:carlos@cuellar.fr)