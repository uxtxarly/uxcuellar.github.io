---
layout: case
title: Add an Event
description: An interactive form that allows event organizers to build, preview and submit events.
tags: 
  - user research
  - wireframing
  - prototyping
  - usability testing
duration: 8 Months, January 2019
year: 2019
sponsor: Goldstar Events
image: /assets/images/addevent-storyboard.jpg
prototype: /assets/protos/add-an-event/index.html#/screens
thumbnail: addevent-tn.jpg
sitemap: false
published: true
---

### TL;DR: A Quick Summary
* Designed a new form for submitting events and ticket inventory to Goldstar.
* Interviewed event organizers and venue advisors to understand pain points in the old form.
* Created and iterated on multiple user flows and prototypes.
* Worked with incremental implementation due to technical constraints.

### The Story Behind This Project
**Goldstar’s Supplier Center** is a marketing platform for event organizers where they can submit event listings, view sales reports, and print will-call lists, among other features. To improve the organizer experience and allow for scalability, the platform was being redesigned into a more powerful tool: the **Audience Marketing Platform**. This new version includes enhanced analytics, a paid service for increased event exposure, and a redesigned submission form for events and inventories.

The old submission form was long, unstructured, and intimidating. Organizers had to manually enter all event details (like descriptions, images, and advisories) as well as ticket inventories. It was unpopular among event organizers; in fact, many of our biggest clients preferred to send an Excel file via email rather than use the form.

> Our event creation system was mostly manual and hardly scalable.

Behind the scenes, the form wasn’t even creating a database entry—it was only generating a note in the help desk system. A venue advisor would then manually process the information and create the event listing. This workflow was slow and not scalable.

The goal of this project was to create a multi-step, inductive submission form that would not only empower and educate organizers but also reduce the time required to publish events and decrease the involvement of venue advisors. From a technical perspective, the form needed to automatically create a database entry that could later be reviewed by a Goldstar employee before going live.

### Initial Research
To better understand the business requirements and various expectations within the company, I began by interviewing stakeholders, venue advisors, and developers. It became clear that everyone had different ideas about how the form should function and who the primary users were. Should we prioritize features for our largest suppliers or make the form more accessible for smaller organizers who don’t currently use our tools?

> We needed to decide who our primary user was.

Next, I conducted interviews with event organizers to understand their submission flows, identify pain points, and learn which marketing tools they currently use. I prefer using video conference software so that users can share their screens, providing more context for their feedback.

<figure><img src="/assets/images/addevent_interview.jpg" alt="user interview"><figcaption>I like to use video conference software so users can share their screens.</figcaption></figure>

We also performed a competitive analysis, reviewing more than 30 websites to understand how other companies in the industry solved common event submission issues.

### How This Works
With all the gathered information, we had a clear idea of how the form should function. Working with the product manager, we created a story map, and I began sketching wireframes and rough designs to illustrate the form’s architecture, navigation, and flow.

<figure>
<!-- thumbnail image wrapped in a link -->
<a href="#img1">
  <img src="/assets/images/amp_event-map_small.jpg" class="thumbnail">
</a>

<!-- lightbox container hidden with CSS -->
<a href="#_" class="lightbox" id="img1">
  <img src="/assets/images/amp_event-map.jpg">
</a>
<figcaption style="margin-top:-1.5em;">Story Map</figcaption>
</figure>

The form was designed to be divided into non-linear, logical steps. This allowed users to start at any point in the submission process and save their progress as a draft if needed. Since organizers often don’t have all the information ready when they begin, the form needed to be flexible.

To make the form more accessible to smaller organizers, we avoided technical language and adopted a more conversational tone. We included tooltips, examples, and ample help throughout the process. To encourage better content quality (like event descriptions and images), we offered clear examples of what to do and what to avoid.

We also included a preview feature, allowing organizers to see how their event would look once published. The preview updated in real-time as more information was entered, giving organizers the feeling of actively building their event instead of just filling out a form.

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/amp_event_wire1.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire2.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire3.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire4.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire5.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire6.png" alt="wireframe of the event form">
    <img src="/assets/images/amp_event_wire7.png" alt="wireframe of the event form">
  </div>
  <figcaption style="margin-top:-1.5em;">Wireframes</figcaption>
</figure>


### Challenges I Encountered
The form was split into two primary sections: event information and inventory. Designing the event information section was relatively straightforward, but the inventory section presented challenges.

I created an inventory submission process that seemed to work well after user testing. However, I didn’t validate my design with developers early enough. It turned out that our aging database architecture imposed serious technical constraints, making the proposed solution unfeasible. There wasn’t an easy way to fix this, so I had to revisit my design and propose new solutions that better aligned with our existing database while still delivering an acceptable user experience.

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/amp_event_mock1.png" alt="mockup of the event form">
    <img src="/assets/images/amp_event_mock2.png" alt="mockup of the event form">
    <img src="/assets/images/amp_event_mock3.png" alt="mockup of the event form">
    <img src="/assets/images/amp_event_mock4.png" alt="mockup of the event form">
    <img src="/assets/images/amp_event_mock5.png" alt="mockup of the event form">
  </div>
  <figcaption style="margin-top:-1.5em;">Mockups</figcaption>
</figure>

### Implementation (Yes, It’s Hard)
This was a large project for everyone involved: designers, front-end, and back-end developers. Replacing the old form all at once wasn’t feasible, so we opted for a gradual release process. We first implemented the new navigation and then gradually rolled out the different steps of the form. The project is still ongoing, and we hope to complete it in the coming months.

### Key Metrics and Results
After launching the first phase of the new form, we saw the following metrics:

- **50% reduction in event submission time:** On average, organizers now take half the time to submit an event compared to the old form, due to the more intuitive, step-by-step flow.
- **70% decrease in support tickets:** The number of support tickets related to form submission dropped significantly, especially around event details and ticket inventory, as the new UI was more self-explanatory and included real-time help and examples.
- **40% increase in event submissions:** We saw a notable boost in submissions from smaller organizers, who previously avoided using the old form, contributing to a 40% increase in the number of new event submissions since the launch of the new form.
- **85% user satisfaction:** A post-launch survey revealed that 85% of users found the new form easier to use than the previous one, with many praising the preview feature and the ability to save and return to drafts.
- **Reduced venue advisor involvement by 60%:** Venue advisors were able to process events much faster, with fewer manual corrections needed due to the form automatically generating database entries. This freed up their time for more critical tasks, such as reviewing final event details before going live.

### Key Learnings
- Developers are your friends! It doesn’t matter how good your design is if it can’t be implemented. Maintain constant communication with all team members and validate designs early and often to avoid costly mistakes.
- Collaborative flexibility is essential. Design iterations, technical constraints, and business needs often shift, so being able to pivot and adapt is crucial for the success of a project.
- Continuous improvement is key. While we’ve made great progress, we’re still iterating on the form based on user feedback and internal reviews. This mindset of ongoing improvement will ensure that the form continues to evolve with user needs.

<script src="/assets/js/flickity.js"></script>
