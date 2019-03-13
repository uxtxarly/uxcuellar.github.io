---
layout: work
title: Add an Event
description: An interactive form that allows event organizers to build, preview and submit events.
tags: user research, wireframing, prototyping, usability testing.
duration: 8 Months, January 2019.
sponsor: Goldstar Events
img: addevent-storyboard.jpg
sitemap: false
---

### TLDR: A Quick Summary
* Designed a new form that submits events and ticket inventory to Goldstar.
* Interviewed event organizers and venue advisors to learn more about pain points in the old form.
* Created and iterated multiple user flows and prototypes.
* Reviewed incremental implementation because of technical constraints.

### The Story Behind This Project
Goldstar's Supplier Center was a marketing platform for event organizers where they could submit event listings, check sales reports or print will-call lists, among some other basic features. In an effort to improve the organizer's experience and allow scalability, this platform is being redesigned and turned into a more powerful marketing tool. The new 'Audience Marketing Platform' has new analytics and charts, a paid service to increase event exposure and a redesigned submission form for events and inventories.

The old event submission form was a one-page long, unstructured and intimidating form, where organizers had to provide all the event information (description, images, advisories) and ticket inventories. It was never a popular feature of the site, in fact, some of our biggest organizers preferred to send an Excel file with the event information via email instead of having to deal with our form.

> Our event creation system was mostly manual and hardly scalable.

The other problem was behind the scenes. This form wasn't creating an event entry in our database, it was only generating a note in our help desk with the event information. Then, a venue advisor had to process manually that information and create the event listing in our system. This workflow was slow and not scalable.

This project's goal was to create a multi-page submission form that empowers and educates organizers at the same time. From an engineering perspective, we also needed this form to create automatically a database entry that will be reviewed by a Goldstar employee before going live.

### Some Research First
I started talking to stakeholders, venue advisors, and developers so I could learn more about the business requirements and different expectations inside the company. It turns out that they all had different ideas about how this form should work and who were our primary users: should we try to please our biggest suppliers or should we instead try to be more accessible to the smaller organizers that don't currently use our tools?

> We needed to decide who our primary user was.

After that, I interviewed different organizers. I wanted to learn how's their event submission flow, what persons are involved, current friction points and what other marketing tools they use.

<figure><img src="/images/addevent_interview.jpg" alt="user interview"><figcaption>I like to use video conference software so users can share their screens.</figcaption></figure>

We also did a lot of competitive analysis. We needed to know how the most common problems with event submission where solved by others in our industry, so we reviewed more than 30 websites.

### How This Works
With all this information, we already knew how we wanted our form to work. With the help of our product manager, we created a story map and I started sketches and rough wireframes that showed the architecture, navigation, and flow of the new form. 

We wanted the form to be divided into non-linear logical steps, so users could start anywhere the submission process and save it as a draft if needed. There's a lot of information that needs to be added to the form and it's common to not have all the information ready when organizers start filling the form.

Since we wanted to make this form more accessible to smaller organizers, we avoided technical language and tried a more conversational UI, with plenty of examples, tooltips and help available. We also wanted to encourage better content (event description and images) so we provided examples of what to do and what not to do.

We also wanted users to be able to preview the events they build, and that's why we show a preview of how the event will look once published. This preview view gets updated every time the organizer enters more information, so they really feel like they're building something, not just filling a form.

<figure><img src="/images/addevent_title.jpg" alt="wireframe"><figcaption>Wireframe showing the first step of the form, navigation and preview panel.</figcaption></figure>

### Challenges I Found
The form is divided into two main blocks: event information and inventory. Designing the event information part was pretty straightforward with all the information I had available, but the inventory part was (unfortunately) a different story. 

I created and iterated (after user testing) an inventory submission process that felt familiar to organizers and seemed to work fine, but I 'forgot' to validate my design with the developers. It turned out that we had some serious technical constraints created by our aging database architecture so the solution proposed couldn't be implemented. There wasn't an easy way to fix this, so I had to start again and propose new solutions that matched our database architecture better and still provided an acceptable user experience. 

<figure><img src="/images/addevent_newinv.jpg" alt="wireframe"><figcaption>Wireframe showing a solution for the inventory submission.</figcaption></figure>

### Implementation (Yes, It's Hard)
This was a big project for everybody: designers, front-end and back-end developers. It was not feasible to replace the old form in one day so we planned a gradual release process. The new navigation was partially implemented and then we proceeded with the different steps of the form. It's still a work in progress and we hope it will be finished in the next few months.

### Things I Learned
Developers are your friends! It doesn't matter how good your design is if it can't be implemented. Keep fluid communication with all the actors involved and validate your designs early and often.


