---
layout: basic2
title: Classroom Orchestrator
description: A software used by teachers in order to monitor students’ computer screens in real time.
tags: design research, prototyping, front-end development.
duration: 3 Months, February 2015.
sponsor: Lightspeed Systems
image: /assets/images/classroom_shot.png
thumbnail: classroom-tn.gif
sitemap: false
published: false
---
<script src="/assets/js/flickity.js"></script>

<a class="inline-flex items-center gap-2 text-sm justify-center bg-white/60 dark:bg-stone-800/90 ring-1 ring-stone-900/5 dark:ring-white/10 hover:ring-stone-900/20 dark:hover:ring-white/20 p-2 rounded transition duration-300 ease-in-out w-full" href="/assets/protos/co-proto/#/screens/36065803?maintainScrollPosition=false">View Desktop Prototype</a>

In this project for Lightspeed, we created new software used by teachers in order to monitor students' computers in a classroom. We wanted to quickly build a minimal, viable product that was going to be used by Miami-Dade School District as part of a pilot program so that we would be able to have early feedback from real users from the very beginning of the project.

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/co_wire1.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire2.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire3.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire4.png" alt="Wireframe of Classroom Orchestrator">
  </div>
  <figcaption>Early wireframes of the group dashboard.</figcaption>
</figure>

For our user research I used some of the personas that we already had available in the office from other projects, and then I created specific scenarios for them. After that, I created and tested several interactions using wireframes and interactive prototypes.

During this development, we had to solve several technical issues related with the amount of bandwidth used by the app and the storage of images. These issues would have affected user experience, so we collaborated to find an efficient solution. We turned off the default recording of students' screens so that the teacher would need to turn the recording on if he/she were interested in monitoring one particular student (in that case, hi-res images would be stored).

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/co_mockup2.jpg" alt="Mockup of Classroom Orchestrator">
    <img src="/assets/images/co_mockup_1.gif" alt="Mockup of Classroom Orchestrator">
    <img src="/assets/images/co_mockup_2.gif" alt="Mockup of Classroom Orchestrator">
    <img src="/assets/images/co_mockup_3.gif" alt="Mockup of Classroom Orchestrator">
    <img src="/assets/images/co_mockup_4.gif" alt="Mockup of Classroom Orchestrator">
  </div>
  <figcaption>Mockups of the recorded sessions screen.</figcaption>
</figure>

After a testing and iteration period, we added some extra features and we enabled superusers to monitor school groups and districts.

The front-end implementation used the same patterns and CSS I created earlier for the rest of the My Big Campus products.

<hr>
<a class="px-5 text-sm no-underline justify-center bg-white/60 dark:bg-stone-800/90 ring-1 ring-stone-900/5 dark:ring-white/10 hover:ring-stone-900/20 dark:hover:ring-white/20 p-2 rounded-full transition duration-300 ease-in-out no-underline" href="/work/a288d20020c6de3a6926698a5b7f0a39adce6c79/index.html">« Back</a>
