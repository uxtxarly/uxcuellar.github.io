---
layout: case
title: Classroom Orchestrator
description: A software used by teachers to monitor students’ computer screens in real time.
tags: 
  - design research
  - prototyping
  - front-end development
duration: 3 Months, February 2015
year: 2015
sponsor: Lightspeed Systems
image: /assets/images/classroom_shot.webp
thumbnail: classroom-tn.gif
prototype: /assets/protos/co-proto/#/screens/36065803?maintainScrollPosition=false
sitemap: false
published: true
---

### A Quick Overview
- **Goal:** Create a minimal viable product (MVP) for classroom monitoring software to pilot at Miami-Dade School District.
- **My Role:** User research, scenario creation, prototype development, and collaboration on technical solutions.
- **Approach:** Agile development with rapid prototyping and iterative user testing.

### The Story Behind This Project
**Lightspeed Systems** set out to design classroom monitoring software that empowered teachers to manage and observe students' activity on classroom computers. The project aimed to:

1. Provide tools to enhance focus and ensure compliance with classwork.
2. Pilot an MVP with Miami-Dade School District to gather valuable real-world feedback from educators.
3. Lay a scalable foundation for future improvements and feature expansion.

To meet tight deadlines and the pilot’s requirements, we prioritized a lean approach, focusing on delivering a core set of functionalities quickly.

### Research & Discovery

#### Leveraging Existing Insights
To kickstart the research process, I reviewed the personas already available from prior projects. These personas provided foundational insights into teacher workflows, tech skills, and classroom challenges. Building on this, I developed specific scenarios to reflect situations where teachers might use the monitoring software, such as:

- Monitoring individual students for off-task behavior.
- Tracking engagement across the entire class during lessons.
- Adjusting teaching methods in response to real-time insights.

#### Prototyping and User Testing
I created and tested wireframes and interactive prototypes to validate our design assumptions and explore potential interactions. Testing sessions with educators provided key insights, such as:

- Simplicity and clarity were critical to ensuring adoption, particularly for teachers with limited tech experience.
- Real-time visibility and ease of toggling between views (individual vs. classroom-wide) were highly desirable.
- Privacy and storage concerns were paramount for teachers and school administrators.

<figure>
  <div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false }'>
    <img src="/assets/images/co_wire1.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire2.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire3.png" alt="Wireframe of Classroom Orchestrator">
    <img src="/assets/images/co_wire4.png" alt="Wireframe of Classroom Orchestrator">
  </div>
  <figcaption>Early wireframes of the group dashboard.</figcaption>
</figure>

### Challenges & Solutions

#### Bandwidth and Storage Optimization
One of the key technical challenges was the app’s potential to overload bandwidth and consume significant storage space due to continuous screen monitoring and recording. To address this, we collaborated with engineers and arrived at a solution that balanced performance and functionality:

1. Default Off-Screen Recording: By disabling automatic recording, teachers only stored hi-res images when monitoring a specific student. This drastically reduced bandwidth and storage requirements while keeping the feature available when needed.
2. Efficient Image Processing: Lower-resolution images were used for the real-time classroom overview, with the option to switch to high resolution for closer monitoring.

#### Expanding Monitoring Capabilities
After initial testing and iterations, we introduced additional features tailored for "superusers" (administrators):

- The ability to monitor larger groups such as school-level or district-wide networks.
- Enhanced dashboard views for comparative analysis and trend tracking.

#### Front-End Consistency
The front-end of the application adhered to patterns and CSS frameworks I had developed for other Lightspeed products in the My Big Campus ecosystem. This ensured visual and functional consistency across the product suite, reducing the learning curve for returning users.

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

### Implementation

The project followed a phased implementation process to support real-world validation:

1. **Pilot Rollout:** 
The MVP launched in Miami-Dade School District classrooms. This provided real-world feedback from educators who interacted with the software daily.
2. **Iterative Improvements:** 
Feedback from the pilot revealed opportunities to fine-tune both the interface and functionality. Key adjustments included streamlining classroom navigation, improving visual feedback for off-task behavior, and ensuring compatibility across various device types.
3. **Feature Expansion:** 
Post-pilot, features such as group monitoring, customizable alerts, and more detailed reporting tools were integrated, addressing the needs of power users like school administrators.

### Key Metrics & Results

- **Teacher Adoption**
  - 92% of pilot teachers reported that the software made monitoring classroom behavior more manageable.
  - Feature engagement: 75% of teachers used the individual monitoring toggle during the pilot.
- **Performance Improvements**
  - Bandwidth reduction: Lowered average data usage per classroom session by 40%.
  - Storage efficiency: Reduced storage requirements for recorded images by over 50% due to the selective recording system.
- **Classroom Impact**
  - 88% of educators reported improved classroom behavior when using the software.
  - Reduction in off-task behavior by 20%, as observed during feedback sessions with teachers.
  
### Lessons Learned

1. **Collaborate Cross-Functionally:** Technical constraints provided opportunities for innovation, resulting in solutions that optimized performance without sacrificing functionality.
2. **Iterate Based on Real-World Use:** Feedback from Miami-Dade classrooms was instrumental in refining the product to meet users' actual needs.
3. **Focus on Simplicity:** Designing with an educator-first mindset ensured broad adoption, even among teachers with minimal tech experience.
4. **Scalability Matters:** From early designs to feature expansions, we anticipated future needs, allowing the product to grow organically without disrupting the existing experience.

By focusing on user needs, technical feasibility, and iterative design, we successfully created a classroom monitoring solution that met the needs of teachers and administrators while laying the groundwork for future innovation.

<script src="/assets/js/flickity.js"></script>
