# CodeHouse Cloud Frontend — Contributors Guidelines

## AI-Powered Software Engineering Academy

# CodeHouse Cloud

**Project:** CodeHouse Cloud  
**Website:** https://www.codehouse.cloud  
**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Backend:** Django / Django REST Framework  
**Repository:** https://github.com/CodeHouse-Cloud/codehouse.git  
**Site Plan:** https://my.codehouse.cloud

[DETAILED SITE PLAN](SITEPLAN.md)

---

# 1. Welcome to CodeHouse Cloud

Welcome to the CodeHouse Cloud development team.

CodeHouse Cloud is being reimagined as an **AI-powered software engineering academy** designed to help learners progress from complete beginners to industry-ready software engineers.

The platform combines:

* Structured software engineering education.
* Artificial Intelligence.
* Practical coding environments.
* Coding challenges.
* Real-world projects.
* Developer collaboration.
* Mentorship.
* Career development.
* Jobs and internships.
* Professional developer profiles.
* Certificates.
* Community engagement.

The goal of this repository is to build a scalable, accessible, responsive, secure, and professional frontend experience for the entire CodeHouse Cloud ecosystem.

The frontend communicates with the CodeHouse Cloud Django backend through REST APIs.



# 2. Permission Legend

The project structure uses four permission levels.

| Symbol | Permission              | Meaning                                                                                              |
| ------ | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| 🔴     | **PROTECTED**           | Do not modify unless explicitly authorized by the project maintainer.                                |
| 🟢     | **CONTRIBUTOR**         | Contributors may create or modify files in this area when the corresponding feature is assigned.     |
| 🟠     | **ASSIGNMENT REQUIRED** | Do not modify unless the task specifically assigns this area or approval is given.                   |
| 🔵     | **SHARED**              | Shared infrastructure or reusable components. Reuse existing code and avoid unnecessary duplication. |

> **Important:** A contributor's permission is determined by their assigned task. Having access to the GitHub repository does not automatically mean that every file may be modified.



# 3. Important Rule Before You Start Coding

**Do not start coding directly on the `main` branch.**

The `main` branch is a protected branch and represents stable, reviewed code.

Every contributor must create a feature branch before making changes.

The general workflow is:

```text
main / development
        │
        ▼
Create Feature Branch
        │
        ▼
Write Code
        │
        ▼
Test Locally
        │
        ▼
Commit Changes
        │
        ▼
Push Branch
        │
        ▼
Create Pull Request
        │
        ▼
Code Review
        │
        ▼
Approval
        │
        ▼
Merge
```

Never push directly to `main` unless you are an authorized repository maintainer and the project explicitly requires it.

Before starting work, always check the current repository branch strategy and follow the branch required by the project maintainer.



# 4. Technology Stack

## Core Technologies

* Next.js
* React
* TypeScript
* Tailwind CSS
* HTML5
* CSS3
* JavaScript / TypeScript

## Backend Integration

* Django
* Django REST Framework
* REST APIs

## Database

The frontend does not directly connect to the database.

The frontend communicates with the Django backend through APIs.

```text
Next.js Frontend
       │
       │ HTTPS / REST API
       ▼
Django REST API
       │
       ▼
Database
```

## External Services

Depending on the feature, the platform may integrate with:

* Cloudinary
* Paystack
* OpenAI
* Email services
* Other approved third-party services



# 5. Project Architecture

The CodeHouse Cloud frontend uses the Next.js App Router.

The permission marker placed before a file or directory indicates its contribution status.

```text
codehouse-cloud/
│
├── public/
│   │
│   ├── 🟢 images/
│   │   ├── 🟢 logo/
│   │   ├── 🟢 courses/
│   │   ├── 🟢 roadmaps/
│   │   ├── 🟢 instructors/
│   │   ├── 🟢 mentors/
│   │   └── 🟢 projects/
│   │
│   ├── 🟢 icons/
│   ├── 🟠 fonts/
│   └── 🔴 favicon.ico
│
├── src/
│   │
│   ├── 🔴 app/
│   │   │
│   │   ├── 🔴 globals.css
│   │   ├── 🔴 layout.tsx
│   │   ├── 🟠 page.tsx
│   │   │
│   │   ├── 🟢 (public)/
│   │   │   ├── 🔵 layout.tsx
│   │   │   │
│   │   │   ├── 🟢 about/
│   │   │   │   └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 courses/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 roadmaps/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 ai/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   ├── 🟢 assistant/
│   │   │   │   │   └── 🟢 page.tsx
│   │   │   │   └── 🟢 tutor/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 playground/
│   │   │   │   └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 challenges/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 projects/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 mentorship/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 career/
│   │   │   │   ├── 🟢 jobs/
│   │   │   │   │   ├── 🟢 page.tsx
│   │   │   │   │   └── 🟢 [slug]/
│   │   │   │   │       └── 🟢 page.tsx
│   │   │   │   └── 🟢 internships/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 community/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 discussions/
│   │   │   │       └── 🟢 [slug]/
│   │   │   │           └── 🟢 page.tsx
│   │   │   │
│   │   │   ├── 🟢 blog/
│   │   │   │   ├── 🟢 page.tsx
│   │   │   │   └── 🟢 [slug]/
│   │   │   │       └── 🟢 page.tsx
│   │   │   │
│   │   │   └── 🟢 contact/
│   │   │       └── 🟢 page.tsx
│   │   │
│   │   ├── 🟠 (auth)/
│   │   │   ├── 🔴 layout.tsx
│   │   │   ├── 🟠 login/
│   │   │   │   └── 🟠 page.tsx
│   │   │   ├── 🟠 signup/
│   │   │   │   └── 🟠 page.tsx
│   │   │   ├── 🟠 forgot-password/
│   │   │   │   └── 🟠 page.tsx
│   │   │   └── 🟠 reset-password/
│   │   │       └── 🟠 page.tsx
│   │   │
│   │   ├── 🟠 dashboard/
│   │   │   ├── 🔴 layout.tsx
│   │   │   ├── 🟠 page.tsx
│   │   │   ├── 🟢 courses/
│   │   │   ├── 🟢 progress/
│   │   │   ├── 🟢 assignments/
│   │   │   ├── 🟢 quizzes/
│   │   │   ├── 🟢 achievements/
│   │   │   ├── 🟢 certificates/
│   │   │   └── 🟠 settings/
│   │   │
│   │   ├── 🟠 instructor/
│   │   │   ├── 🔴 layout.tsx
│   │   │   ├── 🟠 page.tsx
│   │   │   ├── 🟢 courses/
│   │   │   ├── 🟢 assignments/
│   │   │   ├── 🟢 quizzes/
│   │   │   ├── 🟢 students/
│   │   │   └── 🟢 analytics/
│   │   │
│   │   └── 🟠 admin/
│   │       ├── 🔴 layout.tsx
│   │       ├── 🔴 page.tsx
│   │       ├── 🟠 users/
│   │       ├── 🟠 courses/
│   │       ├── 🟠 projects/
│   │       ├── 🟠 jobs/
│   │       ├── 🟠 payments/
│   │       ├── 🟠 analytics/
│   │       └── 🔴 settings/
│   │
│   ├── components/
│   │   │
│   │   ├── 🔵 common/
│   │   │   ├── 🔵 Button.tsx
│   │   │   ├── 🔵 Card.tsx
│   │   │   ├── 🔵 Modal.tsx
│   │   │   ├── 🔵 Loader.tsx
│   │   │   ├── 🔵 EmptyState.tsx
│   │   │   ├── 🔵 ErrorMessage.tsx
│   │   │   └── 🔵 Pagination.tsx
│   │   │
│   │   ├── 🔴 layout/
│   │   │   ├── 🔴 Header.tsx
│   │   │   ├── 🔴 Footer.tsx
│   │   │   ├── 🔴 Navbar.tsx
│   │   │   ├── 🔴 MobileMenu.tsx
│   │   │   ├── 🔴 StudentSidebar.tsx
│   │   │   ├── 🔴 InstructorSidebar.tsx
│   │   │   └── 🔴 AdminSidebar.tsx
│   │   │
│   │   ├── 🟢 home/
│   │   │   ├── 🟢 Hero.tsx
│   │   │   ├── 🟢 FeaturedCourses.tsx
│   │   │   ├── 🟢 FeaturedRoadmaps.tsx
│   │   │   ├── 🟢 AISection.tsx
│   │   │   └── 🟢 CTASection.tsx
│   │   │
│   │   ├── 🟢 courses/
│   │   │   ├── 🟢 CourseCard.tsx
│   │   │   ├── 🟢 CourseGrid.tsx
│   │   │   ├── 🟢 CourseFilter.tsx
│   │   │   ├── 🟢 CourseCurriculum.tsx
│   │   │   └── 🟢 CourseProgress.tsx
│   │   │
│   │   ├── 🟢 roadmaps/
│   │   │   ├── 🟢 RoadmapCard.tsx
│   │   │   ├── 🟢 RoadmapTimeline.tsx
│   │   │   └── 🟢 RoadmapProgress.tsx
│   │   │
│   │   ├── 🟢 ai/
│   │   │   ├── 🟢 AIChat.tsx
│   │   │   ├── 🟢 AIMessage.tsx
│   │   │   └── 🟢 CodeAssistant.tsx
│   │   │
│   │   ├── 🟢 coding/
│   │   │   ├── 🟢 CodeEditor.tsx
│   │   │   ├── 🟢 Console.tsx
│   │   │   └── 🟢 ChallengeCard.tsx
│   │   │
│   │   ├── 🟢 projects/
│   │   │   ├── 🟢 ProjectCard.tsx
│   │   │   ├── 🟢 ProjectFilter.tsx
│   │   │   └── 🟢 ProjectTeam.tsx
│   │   │
│   │   ├── 🟢 mentorship/
│   │   │   ├── 🟢 MentorCard.tsx
│   │   │   ├── 🟢 MentorProfile.tsx
│   │   │   └── 🟢 BookingCalendar.tsx
│   │   │
│   │   ├── 🟢 career/
│   │   │   ├── 🟢 JobCard.tsx
│   │   │   ├── 🟢 JobFilter.tsx
│   │   │   └── 🟢 JobApplication.tsx
│   │   │
│   │   └── 🟢 community/
│   │       ├── 🟢 DiscussionCard.tsx
│   │       ├── 🟢 PostEditor.tsx
│   │       └── 🟢 CommentList.tsx
│   │
│   ├── 🔴 lib/
│   │   ├── 🔴 api.ts
│   │   ├── 🔴 auth.ts
│   │   ├── 🔴 constants.ts
│   │   └── 🔵 utils.ts
│   │
│   ├── services/
│   │   ├── 🟠 authService.ts
│   │   ├── 🟢 courseService.ts
│   │   ├── 🟢 roadmapService.ts
│   │   ├── 🟢 projectService.ts
│   │   ├── 🟢 mentorshipService.ts
│   │   ├── 🟢 careerService.ts
│   │   └── 🟢 communityService.ts
│   │
│   ├── hooks/
│   │   ├── 🟠 useAuth.ts
│   │   ├── 🟢 useCourses.ts
│   │   └── 🔵 useDebounce.ts
│   │
│   ├── context/
│   │   ├── 🔴 AuthContext.tsx
│   │   └── 🟠 AppContext.tsx
│   │
│   ├── types/
│   │   ├── 🟢 user.ts
│   │   ├── 🟢 course.ts
│   │   ├── 🟢 roadmap.ts
│   │   ├── 🟢 project.ts
│   │   └── 🔴 api.ts
│   │
│   └── config/
│       └── 🔴 siteConfig.ts
│
├── 🔴 .env.local
├── 🔴 .gitignore
├── 🟠 next.config.ts
├── 🟠 package.json
├── 🔴 postcss.config.mjs
├── 🔴 tsconfig.json
└── 🔵 README.md
```

> **Note:** A permission marker on a directory applies to the files and subdirectories within it unless a more specific marker is shown.



# 6. Understanding the Project Structure

## `src/app/`

This directory contains application routes and Next.js layouts.

A folder containing:

```text
page.tsx
```

represents a page.

For example:

```text
src/app/(public)/courses/page.tsx
```

represents:

```text
/courses
```

A dynamic route:

```text
src/app/(public)/courses/[slug]/page.tsx
```

represents URLs such as:

```text
/courses/python
/courses/javascript
/courses/react
```



## `src/components/`

This directory contains reusable UI components.

Examples:

```text
components/courses/CourseCard.tsx
components/roadmaps/RoadmapCard.tsx
components/mentorship/MentorCard.tsx
```

Components should be reusable wherever possible.



## `src/lib/`

This directory contains core application utilities and infrastructure.

Examples:

```text
api.ts
auth.ts
constants.ts
utils.ts
```

Core infrastructure is protected.

Contributors should not modify protected files unless specifically assigned.



## `src/services/`

This directory contains API communication logic for specific application modules.

Examples:

```text
courseService.ts
roadmapService.ts
projectService.ts
```

Services should communicate with the centralized API layer rather than hardcoding API URLs.



## `src/hooks/`

Reusable React hooks belong here.

Examples:

```text
useAuth.ts
useCourses.ts
useDebounce.ts
```



## `src/context/`

Application-wide React context belongs here.

Examples:

```text
AuthContext.tsx
AppContext.tsx
```

Authentication-related context is protected.



## `src/types/`

Shared TypeScript types belong here.

Examples:

```text
user.ts
course.ts
roadmap.ts
project.ts
api.ts
```



# 7. 🔴 Protected Areas

Protected areas contain infrastructure that can affect the entire application.

Contributors must not modify protected files unless explicitly authorized by the project maintainer.

Examples include:

```text
🔴 src/app/layout.tsx
🔴 src/app/globals.css

🔴 src/components/layout/Header.tsx
🔴 src/components/layout/Footer.tsx
🔴 src/components/layout/Navbar.tsx
🔴 src/components/layout/MobileMenu.tsx
🔴 src/components/layout/StudentSidebar.tsx
🔴 src/components/layout/InstructorSidebar.tsx
🔴 src/components/layout/AdminSidebar.tsx

🔴 src/lib/api.ts
🔴 src/lib/auth.ts
🔴 src/lib/constants.ts

🔴 src/context/AuthContext.tsx

🔴 src/types/api.ts
🔴 src/config/siteConfig.ts

🔴 tsconfig.json
🔴 postcss.config.mjs
🔴 .gitignore
🔴 .env.local
```

These files may affect multiple features or the entire application.

Changing them without coordination can break multiple modules.



# 8. 🟢 Contributor Areas

Contributors may work on these areas when they have been assigned the corresponding feature.

Examples include:

```text
🟢 Courses
🟢 Roadmaps
🟢 AI
🟢 Coding
🟢 Challenges
🟢 Projects
🟢 Mentorship
🟢 Career
🟢 Community
🟢 Homepage sections
🟢 Public pages
🟢 Feature-specific components
🟢 Feature-specific services
🟢 Feature-specific hooks
🟢 Feature-specific types
```

For example, a contributor assigned to Courses may work primarily on:

```text
🟢 src/app/(public)/courses/

🟢 src/components/courses/

🟢 src/services/courseService.ts

🟢 src/hooks/useCourses.ts

🟢 src/types/course.ts
```

The contributor should avoid modifying unrelated modules.



# 9. 🟠 Assignment Required Areas

The following areas require explicit assignment or approval before modification:

```text
🟠 Authentication
🟠 Authorization
🟠 Dashboard architecture
🟠 Instructor architecture
🟠 Administrator architecture
🟠 Environment configuration
🟠 Next.js configuration
🟠 Package dependencies
🟠 Application context
🟠 Authentication services
🟠 Authentication hooks
🟠 Global configuration
🟠 Deployment configuration
```

Examples:

```text
🟠 src/app/(auth)/
🟠 src/app/dashboard/
🟠 src/app/instructor/
🟠 src/app/admin/

🟠 src/services/authService.ts
🟠 src/hooks/useAuth.ts
🟠 src/context/AppContext.tsx

🟠 next.config.ts
🟠 package.json
```

If your assigned task does not involve these areas, do not modify them.



# 10. 🔵 Shared Components and Infrastructure

Shared components are intended to be reused throughout the application.

Examples:

```text
🔵 Button.tsx
🔵 Card.tsx
🔵 Modal.tsx
🔵 Loader.tsx
🔵 EmptyState.tsx
🔵 ErrorMessage.tsx
🔵 Pagination.tsx
🔵 utils.ts
🔵 useDebounce.ts
```

Before creating a new component, check whether an existing shared component can be reused.

For example, do not create:

```text
CourseButton.tsx
RoadmapButton.tsx
ProjectButton.tsx
MentorButton.tsx
```

if the existing:

```text
🔵 Button.tsx
```

already meets the requirement.

If a shared component needs improvement, discuss the change before modifying it.



# 11. API Integration Rules

The frontend communicates with the Django backend through the centralized API layer.

The API base URL should come from environment variables.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.codehouse.cloud/api
NEXT_PUBLIC_SITE_URL=https://www.codehouse.cloud
```

Do not hardcode API URLs inside individual components.

Do not write:

```typescript
fetch(
  "https://api.codehouse.cloud/api/courses/"
);
```

Instead, use the project's centralized API infrastructure:

```typescript
import { apiClient } from "@/lib/api";

const courses = await apiClient("/courses/");
```

The exact API client implementation may differ depending on the project architecture. Always use the approved centralized API layer.

The preferred architecture is:

```text
Page
  │
  ▼
Component
  │
  ▼
Service
  │
  ▼
API Client
  │
  ▼
Django REST API
```

Do not duplicate API request logic across multiple components.



# 12. API Services

Each major application module should have its own service.

Examples:

```text
services/
├── authService.ts
├── courseService.ts
├── roadmapService.ts
├── projectService.ts
├── mentorshipService.ts
├── careerService.ts
└── communityService.ts
```

For example, course API logic should belong in:

```text
courseService.ts
```

rather than being repeated throughout multiple page components.



# 13. Environment Variables and Security

Environment variables are used to configure the application without hardcoding configuration values into source code.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.codehouse.cloud/api
NEXT_PUBLIC_SITE_URL=https://www.codehouse.cloud
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
```

The actual `.env.local` file must never be committed to GitHub.

Never commit:

```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

Never commit:

* API keys.
* OpenAI secret keys.
* Django secret keys.
* Database credentials.
* Payment secret keys.
* Private authentication credentials.
* Passwords.
* Private tokens.

The repository may contain:

```text
.env.example
```

The `.env.example` file should contain variable names only, not private credentials.



## Important `NEXT_PUBLIC_` Rule

Any variable beginning with:

```text
NEXT_PUBLIC_
```

may be exposed to the browser.

Therefore, never put private secrets in variables beginning with:

```text
NEXT_PUBLIC_
```

Never do this:

```env
NEXT_PUBLIC_OPENAI_API_KEY=secret-key
```

Private secrets must remain server-side.



# 14. Header and Footer

The CodeHouse Cloud Header and Footer are shared across the public website.

The public layout is responsible for rendering them.

Conceptually:

```text
Public Layout
│
├── Header
│
├── Page Content
│
└── Footer
```

Contributors should not add their own Header or Footer to individual pages.

Do not do this inside a page if the page already belongs to the public layout:

```tsx
<Header />

<CoursePage />

<Footer />
```

The layout should automatically provide the Header and Footer.



# 15. Page Metadata and SEO

Every public page should have appropriate metadata.

For example:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore software engineering courses at CodeHouse Cloud.",
};
```

Individual pages should define their own where appropriate:

* Page title.
* Meta description.
* Open Graph information.
* Canonical URL.

Do not modify global SEO configuration unnecessarily.

Public pages that may require SEO include:

```text
Courses
Roadmaps
Course Details
Roadmap Details
Blog
Projects
Mentors
Jobs
Internships
Developer Profiles
```

Private dashboards do not require the same SEO treatment as public pages.



# 16. Component Rules

Components should follow these principles.

## Reusability

Build components that can be reused.

## Single Responsibility

A component should have a clear responsibility.

Avoid extremely large components.

Instead of placing thousands of lines in one file, separate functionality where appropriate:

```text
CourseHeader.tsx
CourseCard.tsx
CourseCurriculum.tsx
CourseProgress.tsx
CourseInstructor.tsx
```

## Accessibility

Use semantic HTML.

Prefer:

```html
<button>
```

instead of:

```html
<div onclick="">
```

Use semantic elements where appropriate:

```html
<nav>
<header>
<main>
<section>
<footer>
```

All images should have meaningful `alt` text.

Forms must have accessible labels.

Interactive elements must be keyboard accessible.



# 17. Client and Server Components

Next.js supports Server Components and Client Components.

By default, components should remain Server Components unless client-side functionality is required.

Use:

```tsx
"use client";
```

only when necessary.

Client Components may be required for:

* React state.
* Event handlers.
* Browser APIs.
* Interactive forms.
* Client-side hooks.
* Real-time interfaces.

Do not automatically add:

```tsx
"use client";
```

to every component.

Keep components server-side when possible.



# 18. TypeScript Rules

Use TypeScript types instead of `any`.

Avoid:

```typescript
const data: any = response;
```

Prefer:

```typescript
interface Course {
  id: number;
  title: string;
  description: string;
}
```

Then:

```typescript
const course: Course = response;
```

Shared types should be stored in:

```text
src/types/
```

Examples:

```text
src/types/course.ts
src/types/user.ts
src/types/roadmap.ts
```



# 19. Naming Conventions

Use PascalCase for React components.

Correct:

```text
CourseCard.tsx
RoadmapCard.tsx
MentorProfile.tsx
```

Use camelCase for functions and variables.

Correct:

```typescript
getCourses()
fetchRoadmap()
isLoading
```

Use descriptive names.

Avoid:

```text
data.ts
stuff.ts
test.ts
component.tsx
```

Prefer:

```text
courseService.ts
roadmapService.ts
CourseCard.tsx
```



# 20. Styling Guidelines

CodeHouse Cloud uses Tailwind CSS and the project's global design system.

Follow the approved design system.

Primary brand colors include:

```text
Primary Navy
#050538

Secondary Cyan
#16C4E8

White
#FFFFFF
```

Typography includes:

```text
Poppins
Roboto
Fira Code
```

Do not introduce random colors or fonts without approval.

Every feature should feel like part of the same CodeHouse Cloud product.



# 21. Responsive Design

Every contributor is responsible for ensuring their feature works on:

* Desktop.
* Laptop.
* Tablet.
* Mobile.

Test common screen sizes before submitting a Pull Request.

Pay particular attention to:

* Navigation.
* Cards.
* Tables.
* Forms.
* Modals.
* Dashboards.
* Code editors.
* Sidebars.

Do not design only for desktop.



# 22. Loading States

API-driven pages must provide appropriate loading states.

Examples:

```text
Loading courses...
Loading roadmap...
Loading mentors...
```

Use reusable loading components where available.

Avoid leaving users with blank screens while data is loading.



# 23. Error Handling

API failures must be handled gracefully.

Users should receive clear information when:

* An API request fails.
* A page cannot load.
* A form submission fails.
* Authentication expires.
* Data is unavailable.

Avoid displaying raw technical errors to users.

Instead of:

```text
500 Internal Server Error
```

provide a user-friendly message:

```text
We were unable to load the courses.
Please try again.
```



# 24. Empty States

When no data exists, display a meaningful empty state.

For example:

```text
No courses found.

Try changing your search or filter.
```

Avoid showing blank pages.



# 25. Authentication and Authorization

Authentication is handled centrally.

Do not create independent authentication logic inside individual feature modules.

The platform may support roles such as:

```text
Student
Instructor
Mentor
Employer
Administrator
```

Access to protected features must be controlled through the application's authentication and authorization architecture.

Do not assume that hiding a button provides security.

Authorization must ultimately be enforced by the Django backend.

The frontend provides the appropriate user experience, but the backend remains the final authority for permissions.



# 26. API Security

The frontend must never assume that an API endpoint is secure simply because a button is hidden.

Never trust the following as the only security mechanism:

```text
Frontend role checks
Frontend route restrictions
Hidden UI elements
```

The backend must validate:

* Authentication.
* Authorization.
* User permissions.
* Resource ownership.



# 27. Working With the Django Backend

The Next.js frontend and Django backend are separate applications.

```text
CodeHouse Cloud
│
├── Next.js Frontend
│
└── Django REST API
```

Frontend contributors should not modify backend code unless explicitly assigned backend work.

If a frontend feature requires a new API endpoint:

1. Document the required endpoint.
2. Explain the expected request.
3. Explain the expected response.
4. Coordinate with the backend team.
5. Wait for the API contract to be confirmed.
6. Implement the frontend integration.

Example:

```text
GET /api/courses/
```

Response:

```json
{
  "results": [
    {
      "id": 1,
      "title": "Python Fundamentals",
      "slug": "python-fundamentals"
    }
  ]
}
```

The frontend should integrate against the agreed API contract.



# 28. Do Not Mix Frontend and Backend Responsibilities

The frontend should handle:

* User interface.
* User experience.
* Client-side interaction.
* Presentation.
* API consumption.

The backend should handle:

* Authentication.
* Authorization.
* Business rules.
* Database operations.
* Sensitive processing.
* Secure payment operations.
* AI secret keys.
* Data validation.

Never place sensitive business logic exclusively in the frontend.



# 29. Contributor Ownership

Each contributor should be assigned a specific feature or module.

Examples:

```text
Courses
Roadmaps
AI
Coding Playground
Challenges
Projects
Mentorship
Career
Community
```

A contributor assigned to Courses should primarily work in:

```text
🟢 src/app/(public)/courses/
🟢 src/components/courses/
🟢 src/services/courseService.ts
🟢 src/hooks/useCourses.ts
🟢 src/types/course.ts
```

A contributor assigned to Roadmaps should primarily work in:

```text
🟢 src/app/(public)/roadmaps/
🟢 src/components/roadmaps/
🟢 src/services/roadmapService.ts
🟢 src/types/roadmap.ts
```

A contributor assigned to Mentorship should primarily work in:

```text
🟢 src/app/(public)/mentorship/
🟢 src/components/mentorship/
🟢 src/services/mentorshipService.ts
```

Do not modify unrelated modules.

Feature ownership does not mean permanent ownership. It means the contributor is responsible for implementing the assigned feature according to project requirements.

All code remains part of the CodeHouse Cloud project.



# 30. Git Branching Strategy

The repository uses protected branches.

The recommended structure is:

```text
main
│
└── development
      │
      ├── feature/homepage
      ├── feature/courses
      ├── feature/roadmaps
      ├── feature/ai-assistant
      ├── feature/projects
      ├── feature/mentorship
      └── feature/community
```

The exact branch strategy may be adjusted by project maintainers.

Always follow the current branch protection and repository rules.



# 31. Creating a Branch

Before creating a branch, update your local repository.

```bash
git checkout development
```

Then:

```bash
git pull origin development
```

Create your feature branch:

```bash
git checkout -b feature/courses-page
```

Examples:

```bash
git checkout -b feature/roadmaps-page
git checkout -b feature/ai-assistant
git checkout -b feature/project-marketplace
git checkout -b feature/mentor-profile
```

Use clear branch names.



# 32. Branch Naming

Recommended prefixes:

```text
feature/
bugfix/
hotfix/
refactor/
docs/
chore/
```

Examples:

```text
feature/courses-page
feature/roadmap-details
feature/ai-chat-interface
bugfix/course-card-mobile
bugfix/navbar-menu
refactor/api-client
docs/contributor-guidelines
chore/update-dependencies
```



# 33. Commit Messages

Use clear commit messages.

Good:

```text
feat: add courses page
```

```text
feat: add roadmap card component
```

```text
fix: resolve mobile navigation issue
```

```text
refactor: simplify course API service
```

```text
docs: update contributor guidelines
```

Avoid:

```text
update
changes
fixed stuff
final
```

Commits should clearly explain what changed.



# 34. Pull Requests

When your work is complete:

```bash
git status
```

Review your changes.

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add courses page"
```

Push:

```bash
git push origin feature/courses-page
```

Open a Pull Request on GitHub.

Your Pull Request should contain:

### Description

Explain what you built.

### Changes

List the main changes.

### Testing

Explain how you tested the feature.

### Screenshots

For UI changes, provide screenshots where appropriate.

### API Dependencies

Mention any required backend endpoints.

### Known Issues

Mention any incomplete functionality.



# 35. Pull Request Example

## Title

```text
feat: add courses listing page
```

## Description

```text
## Overview

Implemented the CodeHouse Cloud courses listing page.

## Changes

- Added courses page
- Added course cards
- Added course filtering UI
- Added responsive layout
- Added loading state
- Added empty state

## Testing

Tested on:
- Desktop
- Tablet
- Mobile

## API

Uses:
GET /api/courses/

## Screenshots

Attached below.
```



# 36. Before Opening a Pull Request

Before creating a Pull Request, confirm:

```text
[ ] I created a feature branch.
[ ] I did not work directly on main.
[ ] I pulled the latest development branch.
[ ] My feature works locally.
[ ] My feature is responsive.
[ ] I tested desktop.
[ ] I tested mobile.
[ ] I checked for console errors.
[ ] I checked for TypeScript errors.
[ ] I did not commit .env.local.
[ ] I did not expose secret keys.
[ ] I did not hardcode API URLs.
[ ] I used the centralized API client.
[ ] I reused existing shared components.
[ ] I added loading states where necessary.
[ ] I added error handling where necessary.
[ ] I added empty states where necessary.
[ ] I checked accessibility.
[ ] I reviewed my own code.
[ ] I provided screenshots for UI changes.
```



# 37. Files Contributors Must Not Commit

Never commit:

```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

Never commit:

```text
node_modules/
```

Never commit:

```text
.next/
```

Never commit:

```text
API keys
Private keys
Database credentials
Secret tokens
Passwords
```

The `.gitignore` file should protect these files.



# 38. Do Not Change Core Infrastructure Without Approval

Before modifying any of the following, contact the project maintainer:

```text
🔴 package.json
🔴 next.config.ts
🔴 tsconfig.json

🔴 src/app/layout.tsx
🔴 src/app/globals.css

🔴 src/lib/api.ts
🔴 src/lib/auth.ts

🔴 src/context/AuthContext.tsx

🔴 src/types/api.ts
🔴 src/config/siteConfig.ts

🔴 middleware.ts
🔴 .env.example
```

Also contact the maintainer before:

* Adding a new dependency.
* Changing authentication.
* Changing API architecture.
* Changing the global design system.
* Changing routing architecture.
* Changing environment variable names.
* Changing deployment configuration.



# 39. Adding New Dependencies

Do not install packages simply because they are convenient.

Before adding a dependency:

1. Check whether the functionality already exists.
2. Check whether the project already has a library that solves the problem.
3. Discuss the dependency with the maintainer.
4. Explain why it is necessary.
5. Consider bundle size and performance.
6. Consider security and maintenance.

Do not install another UI framework if the project already uses Tailwind CSS and an approved component system without prior approval.



# 40. Performance Guidelines

Contributors should consider performance when building features.

Use:

* Optimized images.
* Lazy loading where appropriate.
* Server Components where possible.
* Code splitting where appropriate.
* Efficient API requests.
* Pagination for large datasets.
* Caching where appropriate.

Avoid:

* Unnecessary client components.
* Unnecessary API calls.
* Huge images.
* Repeated API requests.
* Large dependencies without justification.



# 41. Accessibility Guidelines

All contributors are responsible for accessibility.

Follow:

* Semantic HTML.
* Keyboard navigation.
* Visible focus states.
* Meaningful `alt` text.
* Accessible forms.
* Proper labels.
* Sufficient color contrast.
* Descriptive buttons.
* Accessible navigation.

Do not rely on color alone to communicate information.



# 42. Code Review

Every Pull Request may be reviewed for:

* Functionality.
* Code quality.
* Security.
* Performance.
* Accessibility.
* Responsiveness.
* TypeScript correctness.
* API integration.
* Maintainability.
* Consistency with the design system.

Reviewers may request changes.

Contributors are expected to respond professionally to review comments.

Code review is part of collaborative development and is not a personal criticism.



# 43. Do Not Merge Your Own Pull Request Without Approval

Unless you are an authorized maintainer, do not merge your own Pull Request.

Wait for the required review and approval.

The project may require:

* Successful CI checks.
* At least one approval.
* No unresolved review comments.
* Passing build.
* Passing lint checks.



# 44. If You Discover a Problem

If you discover an issue outside your assigned feature:

Do not immediately modify unrelated code.

Instead:

1. Document the issue.
2. Create an issue if appropriate.
3. Inform the maintainer.
4. Fix it only if authorized.

This prevents contributors from unintentionally changing another developer's work.



# 45. Avoid Unnecessary Refactoring

Do not rewrite existing code simply because you prefer a different coding style.

For example, if you are assigned to:

```text
Courses
```

do not simultaneously rewrite:

```text
Header
Footer
Authentication
API Client
Global CSS
```

unless your task specifically includes those areas.

Keep Pull Requests focused.

Focused Pull Requests are easier to review and merge.



# 46. Communication

Before starting a major feature:

1. Read the project documentation.
2. Check existing issues.
3. Check existing Pull Requests.
4. Confirm your assignment.
5. Ask questions when requirements are unclear.

Do not duplicate work already being done by another contributor.



# 47. Contributor Definition of Done

A feature is considered complete when:

```text
[ ] The feature matches the requirements.
[ ] The feature works correctly.
[ ] The feature is responsive.
[ ] The feature is accessible.
[ ] The feature uses the approved design system.
[ ] API integration works correctly.
[ ] Loading states are handled.
[ ] Error states are handled.
[ ] Empty states are handled.
[ ] TypeScript errors are resolved.
[ ] Console errors are resolved.
[ ] No secrets are exposed.
[ ] No API URLs are hardcoded.
[ ] Code is documented where necessary.
[ ] Pull Request is ready for review.
```



# 48. Recommended Contributor Workflow

Every contributor should follow this process:

```text
1. Read CONTRIBUTING.md / GUIDELINES.md
        ↓
2. Understand your assigned feature
        ↓
3. Check the permission markers
        ↓
4. Pull the latest development branch
        ↓
5. Create a feature branch
        ↓
6. Build only the assigned feature
        ↓
7. Reuse existing shared components
        ↓
8. Use centralized API services
        ↓
9. Test the feature
        ↓
10. Check responsive behavior
        ↓
11. Check accessibility
        ↓
12. Check TypeScript and lint
        ↓
13. Review your own changes
        ↓
14. Commit changes
        ↓
15. Push feature branch
        ↓
16. Open Pull Request
        ↓
17. Respond to code review
        ↓
18. Obtain approval
        ↓
19. Merge according to repository rules
```



# 49. Permission Summary

Before modifying any file, check its permission marker.

```text
┌──────────────────────────────────────────────┐
│ 🔴 PROTECTED                                 │
│ Do not modify without authorization.         │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ 🟢 CONTRIBUTOR                               │
│ Work here when the feature is assigned.     │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ 🟠 ASSIGNMENT REQUIRED                       │
│ Modify only when specifically assigned.     │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ 🔵 SHARED                                    │
│ Reuse existing code. Avoid duplication.     │
└──────────────────────────────────────────────┘
```

### 🔴 Protected

Do not modify without authorization.

### 🟢 Contributor

Contributors can work here when the relevant feature has been assigned to them.

### 🟠 Assignment Required

Contributors need explicit assignment or approval before modifying these areas.

### 🔵 Shared

Reuse these components and utilities. Avoid creating duplicate implementations.



# 50. Final Contributor Rule

> **Do not modify protected files simply because you have access to the repository.**

Repository access allows you to contribute to the project. It does not mean every file is available for unrestricted modification.

Always work within the scope of your assigned feature.

If your feature requires a change to a 🔴 protected or 🟠 assignment-required file, contact the project maintainer before making the change.

> **Build your assigned feature. Reuse the shared architecture. Do not duplicate core functionality. Do not expose secrets. Do not hardcode API configuration. Do not modify protected infrastructure without approval. Always work through a feature branch and Pull Request.**



# 51. Final Architecture Principle

The CodeHouse Cloud frontend should follow this architecture:

```text
                         CodeHouse Cloud
                                │
                                ▼
                        Next.js Application
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
         Public              Student           Admin /
         Website             Platform          Instructor
             │                  │                  │
             └──────────────────┼──────────────────┘
                                │
                                ▼
                         Shared Components
                                │
                                ▼
                          API Client Layer
                                │
                                ▼
                         Django REST API
                                │
                                ▼
                         Backend Services
```

The frontend should be:

* Modular.
* Reusable.
* Scalable.
* Secure.
* Accessible.
* Responsive.
* Maintainable.
* Well documented.
* Consistent with the CodeHouse Cloud product vision.



# 52. CodeHouse Cloud Development Philosophy

The goal is not simply to build pages.

The goal is to build a professional software engineering platform that learners can use to:

```text
Discover
   ↓
Choose a Learning Path
   ↓
Learn
   ↓
Practice
   ↓
Use AI
   ↓
Solve Challenges
   ↓
Build Projects
   ↓
Collaborate
   ↓
Connect with Mentors
   ↓
Build a Professional Profile
   ↓
Earn Certificates
   ↓
Find Jobs & Internships
   ↓
Become an Industry-Ready Developer
```

Every contributor plays a role in building this ecosystem.

Write code that is:

* Clean.
* Reusable.
* Accessible.
* Secure.
* Maintainable.
* Scalable.
* Well documented.
* Consistent with the CodeHouse Cloud product vision.

**Learn. Code. Build. Collaborate. Grow.**



# Contact

**CodeHouse Cloud**

Website: https://www.codehouse.cloud

Repository: https://github.com/CodeHouse-Cloud/codehouse.git

A product of **Applinet Technology**.
