# CodeHouse Cloud — Homepage Contributor Implementation Brief

> **Status:** 🟠 **Assignment Required**
>
> **Project:** CodeHouse Cloud
> **Website:** https://www.codehouse.cloud
> **Product:** AI-Powered Software Engineering Academy



## Important Contributor Instruction

This document contains the implementation requirements for the **CodeHouse Cloud public homepage**.

The original starter implementation is preserved in the `page.tsx` file inside a protected comment block.

### Contributors MUST:

* Keep the original starter code commented.
* Write the new homepage implementation **above** the protected starter code.
* Follow the approved homepage requirements and design references.
* Use the project's central design system.
* Follow the approved desktop and mobile wireframes.
* Follow the project architecture and contribution guidelines.

### Contributors MUST NOT:

* Delete the commented starter code.
* Modify the commented starter code.
* Write the new implementation below the protected starter code.
* Modify `src/app/globals.css` as part of the homepage task.
* Create a conflicting color or typography system.
* Hardcode private API credentials.
* Hardcode backend API URLs.
* Remove the contributor review structure.

The commented starter implementation allows the project maintainer to compare the original implementation with the contributor's proposed implementation during code review.

After the Pull Request has been reviewed and approved, the project maintainer will remove the temporary commented starter code and finalize the file.

> **Do not remove the commented starter code yourself.**



# 1. Homepage Purpose

The homepage is the primary public entry point into CodeHouse Cloud.

Its purpose is to clearly communicate:

* What CodeHouse Cloud is.
* Who it serves.
* What learners can achieve.
* How the platform works.
* Why the platform is different.
* How learners can begin their journey.

The homepage should guide visitors through the following journey:

```text
Discover CodeHouse Cloud
        ↓
Understand the Value
        ↓
Explore Learning Paths
        ↓
Discover Courses
        ↓
Understand AI-Powered Learning
        ↓
Explore Practical Coding
        ↓
Build Real-World Projects
        ↓
Connect With Mentors
        ↓
Prepare for a Career
        ↓
Start Learning
```



# 2. Core Product Message

CodeHouse Cloud is an AI-powered software engineering academy designed to help learners progress from beginners to industry-ready software engineers.

The platform combines:

* Structured learning paths.
* Software engineering courses.
* AI-powered learning assistance.
* AI tutoring.
* Coding practice.
* Coding challenges.
* Practical coding environments.
* Real-world projects.
* Developer collaboration.
* Mentorship.
* Career development.
* Jobs and internships.
* Professional developer profiles.
* Certificates.
* Developer community.

The homepage should communicate that CodeHouse Cloud is more than a traditional online course platform.



# 3. Required Homepage Sections

The homepage implementation should include the following major sections.

## 3.1 Hero Section

The hero section is the first visual experience of the website.

It should immediately communicate:

* What CodeHouse Cloud is.
* Who the platform is for.
* What learners can achieve.
* Why the platform is different.
* The value of combining learning, AI, practice, projects, mentorship, and career development.

### Required Elements

* Strong headline.
* Supporting description.
* Primary call-to-action.
* Secondary call-to-action.
* Appropriate visual element.
* Responsive layout.

### Suggested Primary Actions

* Start Learning.
* Explore Courses.

### Suggested Secondary Actions

* Explore Learning Paths.
* Explore the Platform.



## 3.2 Platform Value / Ecosystem Section

Introduce the complete CodeHouse Cloud learning ecosystem.

The section should visually communicate that CodeHouse Cloud is more than a traditional online course platform.

Suggested areas:

* Learn.
* Practice.
* Build.
* Use AI.
* Collaborate.
* Get Mentored.
* Build a Career.

The section should be visually scannable and easy to understand.



## 3.3 Featured Courses

Display selected courses available on the platform.

Each course presentation may include:

* Course title.
* Course description.
* Difficulty level.
* Estimated duration.
* Technology or programming language.
* Instructor information, where available.
* Course image.
* Call-to-action.

The layout should support future API integration.

Do not hardcode sensitive backend configuration.

If course data is eventually retrieved from the Django API, use the centralized API architecture defined by the project.



## 3.4 Learning Roadmaps

Introduce structured learning paths.

Visitors should understand that CodeHouse Cloud helps learners follow a guided path instead of learning randomly.

Possible roadmap examples:

* Web Development.
* Software Development.
* Python Development.
* Frontend Development.
* Backend Development.
* Full-Stack Development.
* AI and Machine Learning.
* Cloud Computing.

Roadmap cards should communicate progression clearly.



## 3.5 AI-Powered Learning

Introduce the AI capabilities of CodeHouse Cloud.

Possible features include:

* AI Assistant.
* AI Tutor.
* Coding assistance.
* Personalized explanations.
* Learning support.
* Programming guidance.
* Debugging assistance.
* Learning recommendations.

The section should communicate that AI supports the learner's development journey.

### Security Requirement

Do not expose private AI API keys in frontend code.

Never place secret OpenAI or other AI provider credentials inside `NEXT_PUBLIC_` environment variables.



## 3.6 Practical Coding / Playground

Introduce the practical coding experience.

Communicate that learners should be able to:

* Write code.
* Practice programming.
* Solve challenges.
* Experiment.
* Receive feedback.
* Improve their skills.

The design should feel developer-focused and professional.

Code-related UI should use:

```css
--font-fira-code
```

where appropriate.



## 3.7 Real-World Projects

Explain how learners move from theory to practical experience.

The section should communicate:

```text
Learn
  ↓
Practice
  ↓
Build
  ↓
Collaborate
  ↓
Showcase
```



## 3.8 Mentorship

Introduce access to mentors and professional guidance.

Possible information:

* Mentor profiles.
* Mentorship sessions.
* Booking.
* Career guidance.
* Technical guidance.

The section should encourage learners to see mentorship as part of their professional development journey.



## 3.9 Career Development

Introduce the CodeHouse Cloud career ecosystem.

Possible features:

* Developer profiles.
* Jobs.
* Internships.
* Career preparation.
* Portfolio development.
* Certificates.

The objective is to communicate the transition:

```text
LEARN
  ↓
PRACTICE
  ↓
BUILD
  ↓
COLLABORATE
  ↓
DEVELOP A PROFESSIONAL PROFILE
  ↓
PREPARE FOR CAREER OPPORTUNITIES
```



## 3.10 Final Call to Action

End the homepage with a strong call to action.

The visitor should have a clear next step.

Possible actions:

* Create an Account.
* Start Learning.
* Explore Courses.
* Explore Roadmaps.



# 4. Design and Layout Requirements

The homepage must align with the CodeHouse Cloud global design system defined in:

```text
src/app/globals.css
```

Do not redefine the global theme inside the homepage.



## 4.1 Brand Colors

### Primary Navy

```text
#050538
```

### Secondary Cyan

```text
#16C4E8
```

### White

```text
#FFFFFF
```

Use the central theme tokens wherever available.

Do not introduce random colors.

Do not create a new color system for the homepage.



## 4.2 Typography

### Primary Heading Font

```text
Poppins
```

Used primarily for:

* Headings.
* Navigation.
* Buttons.
* Brand elements.

### Body Font

```text
Roboto
```

Used primarily for:

* Body text.
* Descriptions.
* General content.

### Code Font

```text
Fira Code
```

Used primarily for:

* Code editors.
* Code blocks.
* Developer interfaces.

These fonts are loaded globally by:

```text
src/app/layout.tsx
```



## 4.3 Layout

The homepage should be:

* Modern.
* Professional.
* Responsive.
* Accessible.
* Visually consistent.
* Easy to scan.
* Conversion-focused.
* Performance-conscious.

Use a consistent maximum content width.

Recommended:

```text
max-width: 1280px
```

or the equivalent centralized design token.

Maintain consistent horizontal spacing across sections.

Avoid excessively wide text blocks.

Use appropriate vertical spacing between sections.



# 5. Responsive Design

The homepage must work correctly on:

* Mobile phones.
* Tablets.
* Laptops.
* Desktop monitors.

Test the implementation at:

* `320px`
* `375px`
* `390px`
* `768px`
* `1024px`
* `1280px`
* `1440px` and above.

Pay particular attention to:

* Hero layout.
* Navigation interaction.
* Cards.
* Buttons.
* Images.
* Typography.
* Horizontal overflow.
* Mobile spacing.



# 6. CSS Requirements

The homepage must use the project's central design system.

Global theme:

```text
src/app/globals.css
```

Contributors may use:

* Tailwind CSS utility classes.
* Existing shared components.
* Existing design tokens.

### Contributors must NOT modify `globals.css` as part of this task.

If a new global design token is genuinely required:

1. Document the requirement.
2. Mention it in the Pull Request.
3. Contact the project maintainer.
4. Wait for approval.

Do not create conflicting global CSS rules.



# 7. Component Guidelines

If the homepage becomes too large, extract reusable sections into:

```text
src/components/home/
```

Possible components include:

```text
Hero.tsx
PlatformFeatures.tsx
FeaturedCourses.tsx
FeaturedRoadmaps.tsx
AISection.tsx
PlaygroundSection.tsx
ProjectsSection.tsx
MentorshipSection.tsx
CareerSection.tsx
CTASection.tsx
```

However, do not unnecessarily create components for every small element.

Components should be created when they provide:

* Reusability.
* Clear responsibility.
* Better maintainability.
* Better readability.



# 8. Site Plan / Visual Reference

The homepage implementation should follow the approved CodeHouse Cloud site plan and visual direction.

Site plan image:

```text
public/images/site-plan/homepage-site-plan.png
```

If the site plan image exists, review it before implementing the homepage.

If the image does not exist yet, request the approved site plan from the project maintainer before making major structural decisions.

Do not invent a completely different homepage architecture if an approved site plan already exists.

The site plan should be treated as a design and product reference, not as a replacement for responsive implementation.



# 9. Wireframes / Design References

Contributors must review the approved homepage wireframes before beginning implementation.

The wireframes provide the intended:

* Visual structure.
* Layout.
* Spacing.
* Content hierarchy.
* Responsive behavior.



## 9.1 Desktop Wireframe

Review the approved desktop homepage wireframe:

**[Open Desktop Homepage Wireframe](http://my.codehouse.cloud/images/desktop.png)**

The desktop wireframe should be used as the primary reference for:

* Header and navigation layout.
* Hero section structure.
* Section positioning.
* Content hierarchy.
* Course and roadmap card layouts.
* AI learning section.
* Coding playground presentation.
* Project showcase.
* Mentorship section.
* Career development section.
* Final call-to-action.
* Footer positioning.



## 9.2 Mobile Wireframe

Review the approved mobile homepage wireframe:

**[Open Mobile Homepage Wireframe](http://my.codehouse.cloud/images/mobile.png)**

The mobile wireframe should be used as the primary reference for:

* Mobile navigation.
* Mobile menu behavior.
* Hero content stacking.
* Button layout.
* Card responsiveness.
* Typography scaling.
* Image sizing.
* Section spacing.
* Horizontal overflow prevention.
* Mobile call-to-action placement.



# 10. Responsive Implementation Rule

The desktop and mobile wireframes are visual references.

Contributors must not implement the homepage as a fixed design that only matches one screen size.

The final implementation must provide a responsive experience between the approved desktop and mobile designs.

Contributors should use responsive CSS and/or Tailwind responsive utilities to ensure the layout adapts naturally across:

* Small mobile devices.
* Large mobile devices.
* Tablets.
* Small laptops.
* Desktop monitors.
* Large desktop screens.

Where the desktop and mobile wireframes differ structurally, implement the responsive behavior required to reproduce the intended experience at the appropriate breakpoint.

Do not create separate duplicated pages for desktop and mobile unless explicitly approved by the project maintainer.



# 11. Design Reference Priority

When implementing the homepage, use the following priority order:

1. Approved desktop and mobile wireframes.
2. Approved CodeHouse Cloud site plan.
3. CodeHouse Cloud global design system.
4. Existing shared components.
5. Homepage functional requirements.
6. Contributor design decisions.

If a conflict exists between these references, do not silently introduce a new design direction.

Document the conflict in the Pull Request and request clarification from the project maintainer.

### Important

Wireframes are references for visual structure and user experience.

They do not override:

* Accessibility requirements.
* Responsive requirements.
* Performance requirements.
* SEO requirements.
* Global design tokens.
* Existing project architecture.

The final homepage should preserve the approved visual direction while meeting modern web development standards.



# 12. Accessibility Requirements

The homepage must be accessible.

Contributors must:

* Use semantic HTML.
* Use proper heading hierarchy.
* Provide meaningful alt text.
* Ensure buttons are keyboard accessible.
* Ensure links have descriptive text.
* Maintain visible focus states.
* Use sufficient color contrast.
* Avoid communicating information through color alone.
* Avoid inaccessible hover-only interactions.

The page should have one primary `H1` heading.

Heading hierarchy should generally follow:

```text
H1
 ↓
H2
 ↓
H3
```



# 13. SEO Requirements

The homepage must support search engine optimization.

The root layout provides global metadata.

The homepage may define homepage-specific metadata.

Do not unnecessarily duplicate global metadata.

Ensure:

* One clear `H1`.
* Semantic HTML.
* Descriptive page content.
* Descriptive links.
* Optimized images.
* Appropriate alt text.
* No keyword stuffing.



# 14. Performance Requirements

The homepage should prioritize performance.

Contributors should:

* Avoid unnecessary client components.
* Avoid unnecessary JavaScript.
* Optimize images.
* Avoid oversized images.
* Use Next.js image optimization where appropriate.
* Avoid unnecessary API requests.
* Use Server Components where possible.

Do not add:

```tsx
"use client";
```

unless client-side functionality actually requires it.



# 15. API Integration

If homepage data is retrieved from the backend:

### Do NOT write:

```tsx
fetch("https://api.codehouse.cloud/api/courses/");
```

Do not hardcode API URLs inside homepage components.

Use the project's centralized API architecture.

The expected architecture is:

```text
Homepage
    ↓
Feature Component
    ↓
Service
    ↓
API Client
    ↓
Django REST API
```

Coordinate with the backend team before assuming API endpoints.



# 16. Required API States

API-driven sections must consider:

* Loading state.
* Error state.
* Empty state.
* Successful state.

Do not leave sections blank when data is unavailable.

Provide meaningful user feedback.



# 17. Contributor Implementation Workflow

The homepage contributor should follow this process:

```text
1. Review this README
        ↓
2. Review the global design system
        ↓
3. Review the approved site plan
        ↓
4. Review the desktop wireframe
        ↓
5. Review the mobile wireframe
        ↓
6. Review existing shared components
        ↓
7. Implement the homepage
        ↓
8. Test responsive layouts
        ↓
9. Test accessibility
        ↓
10. Test performance
        ↓
11. Test API states where applicable
        ↓
12. Create Pull Request
        ↓
13. Maintainer review
        ↓
14. Requested changes, if necessary
        ↓
15. Approval
        ↓
16. Maintainer removes temporary starter comments
```



# 18. Protected Starter Implementation

The original starter implementation is preserved inside `src/app/page.tsx` in a protected comment block.

### Contributor Rule

> **START YOUR IMPLEMENTATION ABOVE THE PROTECTED COMMENT BLOCK.**

The original starter implementation must remain commented during development and code review.

### DO NOT:

* Delete the protected starter code.
* Modify the protected starter code.
* Write your implementation below the protected starter code.
* Remove the review structure.

Your implementation must appear **above** the protected starter implementation.

After review and approval, the project maintainer will:

1. Review the implementation.
2. Compare it with the original starter.
3. Request changes if necessary.
4. Approve the Pull Request.
5. Remove the temporary commented starter code.
6. Finalize the homepage implementation.



# 19. Maintainer Notice

> 🔴 **MAINTAINER NOTICE**
>
> The temporary implementation guide and commented starter code are part of the contributor review process.
>
> They should remain in the project until the Pull Request has been reviewed and approved.
>
> The project maintainer is responsible for removing the temporary comments after the implementation has been accepted.
>
> Contributors should not remove this review structure themselves.



## Final Objective

The completed CodeHouse Cloud homepage should provide a professional, responsive, accessible, and high-performance introduction to the platform.

It should clearly communicate the journey:

```text
LEARN
  ↓
PRACTICE
  ↓
BUILD
  ↓
COLLABORATE
  ↓
GET MENTORED
  ↓
DEVELOP YOUR PROFILE
  ↓
PREPARE FOR YOUR CAREER
```

The implementation should align with the CodeHouse Cloud brand, global design system, approved site plan, desktop wireframe, mobile wireframe, and overall product vision.
