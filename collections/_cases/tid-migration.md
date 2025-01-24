---
layout: case
title: Trimble ID Migration
description: A user migration to a new authentication system.
tags: 
  - flows
  - wireframing
  - prototyping
  - usability testing
duration: 3 Months, January 2022
year: 2022
sponsor: Trimble
image: /assets/images/tid-header.webp
thumbnail: overview-tb2.png
sitemap: false
published: true
---

### The Story Behind This Project

Trimble Construction One is a suite of software solutions designed for construction companies, which includes two well-established ERPs: **Spectrum and Vista**. While both applications serve different markets and have slightly different capabilities, they shared one common issue in 2022: outdated login systems. To meet internal security requirements and offer a unified user experience across Trimble products, the company decided to implement a new authentication system called **Trimble ID (TID)**. This project aimed to migrate all Spectrum and Vista users to TID.

Legacy software often comes with its share of complications, such as varying technologies and systems implemented over time. This can make project planning complex, as there are numerous scenarios to account for. Through user research, we discovered that 92% of ERP users were still logging in using an older system called ERPID, while 8% had already transitioned to the more modern Viewpoint ID (VPID). Of the VPID users, 10% utilized a federated AAD (Microsoft) login, and 7% had enabled 2-factor authentication (2FA), each requiring unique migration strategies.

#### Metrics at a Glance:

- Total users to be migrated: 500,000
- Active daily users during migration planning: 120,000
- Total VPID users in Phase 1: 60,000
  - Federated AAD users: 6,000
  - 2FA users: 4,200

<figure><img src="/assets/images/tid-old_login.png" alt="old login screens"><figcaption>Screen captures of the old authentication systems.</figcaption></figure>

### Project Phases

#### Phase 1: Migrating VPID Users

This phase targeted approximately 60,000 VPID users, representing a manageable subset of the overall user base. The objective was to ensure a seamless migration with minimal customer support overhead. If issues arose, the reduced volume would mitigate their impact.

#### Phase 2: Migrating ERPID Users

ERPID users first needed to transition to VPID before moving to TID—a process that would be largely transparent to the users. This phase encompassed over 440,000 users, necessitating additional planning and monitoring to minimize disruption.

### Mapping and Designing Scenarios

The UX and Product teams worked closely to identify and map out all possible scenarios before and during the migration.

#### Pre-Migration

We created a comprehensive communication plan to prepare users well in advance. This included several touchpoints:

- **Help Pages and Video Tutorials**: The IX department created an introductory landing page, followed by detailed help pages and video tutorials explaining the migration process. 
- **Email Campaign**: Emails were sent to 60,000 VPID users, with an open rate of 68% and a conversion rate of 96%. Weekly follow-ups provided detailed next steps and addressed common questions.
- **Login Page**: Both the Spectrum and Vista login pages featured banners announcing the migration and links to help pages. These banners achieved a 60% engagement rate.
- **Customer Forum**: Dedicated forum threads shared migration updates and FAQs, attracting over 15,000 views and receiving a 97% positive feedback rate.
- **Phone Support**: Customer support teams underwent specialized training and resolved 90% of user issues on the first call.

<figure><img src="/assets/images/tid-persona.png" alt="CFO persona"><figcaption>One of the user personas used in this project</figcaption></figure>

#### During Migration

After analyzing all potential scenarios, we developed six core use cases for Phase 1, plus an additional one for Phase 2. These scenarios were mapped out in **flowcharts**. After validating the flows with the team, I created **mockups and interactive prototypes** for each case.

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/tid-case1_2.png" alt="migration flow">
    <img src="/assets/images/tid-case3.png" alt="migration flow">
    <img src="/assets/images/tid-case4.png" alt="migration flow">
    <img src="/assets/images/tid-case4b.png" alt="migration flow">
    <img src="/assets/images/tid-case5.png" alt="migration flow">
    <img src="/assets/images/tid-case6.png" alt="migration flow">
    <img src="/assets/images/tid-case7.png" alt="migration flow">
  </div>
  <figcaption style="margin-top:-1.5em;">Migration flows for each case.</figcaption>
</figure>

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/tid-mock1.png" alt="login mock">
    <img src="/assets/images/tid-mock2.png" alt="login mock">
    <img src="/assets/images/tid-mock3.png" alt="login mock">
    <img src="/assets/images/tid-mock4.png" alt="login mock">
    <img src="/assets/images/tid-mock5.png" alt="login mock">
    <img src="/assets/images/tid-mock6.png" alt="login mock">
  </div>
  <figcaption style="margin-top:-1.5em;">Migration mockups for one of the cases.</figcaption>
</figure>

### Internal Testing and Release

We used the interactive prototypes for internal usability testing. No major issues were identified, and stakeholders decided to proceed with the planned migration.

<figure><img src="/assets/images/tid-usabilitytest.webp" alt="Internal usability test"><figcaption>
Remote usability test.</figcaption></figure>

During the live rollout:
- **99.5% of the 60,000 VPID users successfully migrated to Trimble ID.**
- Only 0.5% required assistance, translating to 300 support tickets.
- Average support resolution time: 7 minutes.

### Key Learnings

Migrating users between systems is a daunting task requiring meticulous planning, clear communication, and strong collaboration across teams. By leveraging data-driven insights, proactive communication, and iterative user testing, we achieved a seamless migration experience for users while meeting stringent security standards.

This project reinforced the importance of:

1. Early and thorough planning to identify user needs and potential barriers.
2. Continuous user engagement through varied communication channels.
3. Leveraging metrics to measure success and guide decision-making.

With over 500,000 users successfully migrated by the end of Phase 2, this initiative set a new benchmark for future projects.

<script src="/assets/js/flickity.js"></script>
