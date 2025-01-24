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

Trimble Construction One is a suite of software solutions designed for construction companies, which includes two well-established ERPs: Spectrum and Vista. While both applications serve different markets and have slightly different capabilities, they shared one common issue in 2022: outdated login systems. To meet internal security requirements and offer a unified user experience across Trimble products, the company decided to implement a new authentication system called Trimble ID (TID). This project aimed to migrate all Spectrum and Vista users to TID.

Legacy software often comes with its share of complications, such as different technologies and systems that were implemented over time. This can make project planning more complex, as there are various scenarios to account for. We discovered that 92% of ERP users were still logging in using an older system called ERPID, while 8% had already transitioned to the more modern Viewpoint ID (VPID). Some VPID users also had a federated AAD (Microsoft) login or enabled 2-factor authentication (2FA), each requiring different migration strategies.

<figure><img src="/assets/images/tid-old_login.png" alt="old login screens"><figcaption>Screen captures of the old authentication systems.</figcaption></figure>

The decision was made to tackle the migration in two phases:

- Phase 1: Migrate the VPID users (around 60,000). This number felt manageable, and the goal was to ensure a smooth migration. If issues arose, we didn't want to overwhelm customer support.
- Phase 2: Migrate the ERPID users. Technically, they needed to be first moved to VPID, then TID—but this process would be largely transparent to the users.

### Mapping and Designing Scenarios

The UX and Product teams worked closely to identify and map out all possible scenarios before and during the migration.

#### Pre-Migration

We created a comprehensive communication plan to prepare users well in advance. This included several touchpoints:

- Help Pages and Video Tutorials: The IX department created an introductory landing page, followed by detailed help pages and video tutorials explaining the migration process.
- Email Campaign: The first batch of emails was sent to the 60,000 users announcing the migration date. Additional emails followed weekly with more specific details.
- Login Page: Both the Spectrum and Vista login pages featured banners announcing the migration and links to help pages.
- Customer Forum: We provided detailed information about the migration and responded to user questions on the customer forum.
- Phone Support: Customer support teams were trained to assist users throughout the process.

<figure><img src="/assets/images/tid-persona.png" alt="CFO persona"><figcaption>One of the user personas used in this project</figcaption></figure>

#### During Migration

After analyzing all potential scenarios, we developed six core use cases for Phase 1, plus an additional one for Phase 2. These scenarios were mapped out in flowcharts. After validating the flows with the team, I created mockups and interactive prototypes for each case.

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

The results exceeded our expectations. 99.5% of the 60,000 VPID users successfully migrated to Trimble ID without any issues. Only 0.5% required assistance from customer support.

### Key Learnings

Migrating users between systems is a daunting task for most teams. After all, users are our most valuable asset, and acquiring them takes both time and money. Our goal was a fast, smooth migration with minimal disruption for customers. Achieving this required meticulous planning, clear communication, and seamless collaboration across teams.

<script src="/assets/js/flickity.js"></script>
