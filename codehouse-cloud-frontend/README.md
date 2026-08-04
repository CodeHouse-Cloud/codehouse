# CodeHouse Cloud Frontend — Contributors Guidelines

## AI-Powered Software Engineering Academy

**Project:** CodeHouse Cloud
**Website:** https://www.codehouse.cloud
**Frontend:** Next.js, React, TypeScript, Tailwind CSS
**Backend:** Django / Django REST Framework
**Repository:** https://github.com/CodeHouse-Cloud/codehouse.git

---

# 1. Welcome to CodeHouse Cloud

Welcome to the CodeHouse Cloud frontend development team.

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

The frontend will communicate with the CodeHouse Cloud Django backend through REST APIs.

---

# 2. Important Rule Before You Start Coding

**Do not start coding directly on the `main` branch.**

The `main` branch is a protected branch and represents stable, reviewed code.

Every contributor must create a feature branch before making changes.

The required workflow is:

```text
main
  │
  │
  └── Create Feature Branch
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

---

# 3. Technology Stack

The CodeHouse Cloud frontend uses the following technologies.

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

---

# 4. Project Architecture

The CodeHouse Cloud frontend uses the Next.js App Router.

The recommended project structure is:

```text
src/
│
├── app/
│   │
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── (public)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── courses/
│   │   ├── roadmaps/
│   │   ├── ai/
│   │   ├── playground/
│   │   ├── challenges/
│   │   ├── projects/
│   │   ├── mentorship/
│   │   ├── career/
│   │   ├── community/
│   │   └── blog/
│   │
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── reset-password/
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── courses/
│   │   ├── progress/
│   │   ├── assignments/
│   │   ├── quizzes/
│   │   ├── achievements/
│   │   └── certificates/
│   │
│   ├── instructor/
│   │   └── ...
│   │
│   └── admin/
│       └── ...
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── home/
│   ├── courses/
│   ├── roadmaps/
│   ├── ai/
│   ├── coding/
│   ├── projects/
│   ├── mentorship/
│   ├── career/
│   └── community/
│
├── lib/
│   ├── api.ts
│   ├── apiClient.ts
│   ├── auth.ts
│   ├── constants.ts
│   └── utils.ts
│
├── services/
│   ├── authService.ts
│   ├── courseService.ts
│   ├── roadmapService.ts
│   ├── projectService.ts
│   ├── mentorshipService.ts
│   ├── careerService.ts
│   └── communityService.ts
│
├── hooks/
│
├── context/
│
├── types/
│
└── config/
    └── siteConfig.ts
```

---

# 5. Understanding the Project Structure

## `src/app/`

This contains the application's routes and Next.js layouts.

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

---

## `src/components/`

This contains reusable UI components.

Examples:

```text
components/courses/CourseCard.tsx
components/roadmaps/RoadmapCard.tsx
components/mentorship/MentorCard.tsx
```

Components should be reusable wherever possible.

---

## `src/lib/`

This contains core application utilities and infrastructure.

Examples:

```text
api.ts
apiClient.ts
auth.ts
constants.ts
utils.ts
```

This directory is considered protected.

Contributors should not modify these files unless specifically assigned to do so.

---

## `src/services/`

This contains communication logic for specific backend modules.

Examples:

```text
courseService.ts
roadmapService.ts
projectService.ts
```

Services should communicate with the API layer rather than hardcoding API URLs.

---

## `src/hooks/`

Reusable React hooks belong here.

Examples:

```text
useAuth.ts
useCourses.ts
useDebounce.ts
```

---

## `src/context/`

Application-wide React context belongs here.

Examples:

```text
AuthContext.tsx
AppContext.tsx
```

Authentication-related context is protected.

---

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

---

# 6. Protected Files and Directories

Some files affect the entire application and must be protected.

Contributors must not modify these files unless explicitly assigned.

## Core Configuration

```text
next.config.ts
tsconfig.json
package.json
package-lock.json
```

## Root Application

```text
src/app/layout.tsx
src/app/globals.css
```

## API Infrastructure

```text
src/lib/api.ts
src/lib/apiClient.ts
```

## Authentication

```text
src/lib/auth.ts
src/context/AuthContext.tsx
middleware.ts
```

## Environment Configuration

```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## Shared Layout

```text
src/components/layout/
```

This includes:

```text
Header.tsx
Footer.tsx
Navbar.tsx
MobileMenu.tsx
StudentSidebar.tsx
InstructorSidebar.tsx
AdminSidebar.tsx
```

These components affect multiple parts of the application.

Do not modify them without approval.

---

# 7. Environment Variables

Environment variables are used to configure the application without hardcoding configuration values into source code.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.codehouse.cloud/api
NEXT_PUBLIC_SITE_URL=https://www.codehouse.cloud
```

The actual `.env.local` file must never be committed to GitHub.

Never commit:

```text
.env.local
```

Never commit:

```text
API keys
Secret keys
Database credentials
OpenAI secret keys
Django secret keys
Private authentication credentials
```

The repository may contain:

```text
.env.example
```

Example:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
```

The `.env.example` file should contain variable names only, not private credentials.

---

# 8. Important Security Rule for Environment Variables

Any variable beginning with:

```text
NEXT_PUBLIC_
```

may be exposed to the browser.

Therefore, never put private secrets in variables beginning with:

```text
NEXT_PUBLIC_
```

Do not do this:

```env
NEXT_PUBLIC_OPENAI_API_KEY=secret-key
```

This is unsafe.

Private secrets must remain server-side.

The following must never be exposed to client-side code:

* OpenAI secret keys.
* Django secret keys.
* Database credentials.
* Private API keys.
* Authentication secrets.
* Payment secret keys.

---

# 9. API Integration Rules

The frontend communicates with the Django backend through the centralized API layer.

The API base URL should come from environment variables.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.codehouse.cloud/api
```

Do not hardcode the API URL in individual components.

Do not write:

```typescript
fetch(
  "https://api.codehouse.cloud/api/courses/"
);
```

Instead, use the project's centralized API client.

For example:

```typescript
import { apiClient } from "@/lib/apiClient";

const courses = await apiClient(
  "/courses/"
);
```

This ensures that API configuration remains centralized.

---

# 10. API Services

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

Do not duplicate API request logic across components.

---

# 11. Contributor Ownership

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
src/app/(public)/courses/
```

and:

```text
src/components/courses/
```

A contributor assigned to Roadmaps should primarily work in:

```text
src/app/(public)/roadmaps/
```

and:

```text
src/components/roadmaps/
```

A contributor assigned to Mentorship should primarily work in:

```text
src/app/(public)/mentorship/
```

and:

```text
src/components/mentorship/
```

Do not modify unrelated modules.

---

# 12. Shared Components

Use existing shared components whenever possible.

For example:

```text
src/components/common/Button.tsx
```

should be reused instead of creating:

```text
CourseButton.tsx
RoadmapButton.tsx
ProjectButton.tsx
MentorButton.tsx
```

unless there is a specific design or functionality requirement.

The goal is to maintain consistency across the platform.

---

# 13. Header and Footer

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

Do not do:

```tsx
<Header />

<CoursePage />

<Footer />
```

inside a page if the page already belongs to the public layout.

The layout automatically provides the Header and Footer.

---

# 14. Page Metadata and SEO

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

The root layout provides the default site configuration.

Individual pages should define their own:

* Page title.
* Meta description.
* Open Graph information where necessary.
* Canonical URL where necessary.

Do not modify global SEO configuration unnecessarily.

---

# 15. Component Rules

Components should follow these principles:

### Reusability

Build components that can be reused.

### Single Responsibility

A component should have a clear responsibility.

Avoid extremely large components.

Instead of:

```text
CoursePage.tsx
```

containing thousands of lines, separate functionality into:

```text
CourseHeader.tsx
CourseCard.tsx
CourseCurriculum.tsx
CourseProgress.tsx
CourseInstructor.tsx
```

### Accessibility

Use semantic HTML.

Prefer:

```html
<button>
```

instead of:

```html
<div onclick="">
```

Use:

```html
<nav>
<header>
<main>
<section>
<footer>
```

where appropriate.

All images should have meaningful `alt` text.

Forms must have accessible labels.

Interactive elements must be keyboard accessible.

---

# 16. Client and Server Components

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

---

# 17. TypeScript Rules

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

---

# 18. Naming Conventions

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

---

# 19. Styling Guidelines

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

Typography:

```text
Poppins
Roboto
Fira Code
```

Do not introduce random colors or fonts without approval.

Do not create inconsistent designs between modules.

Every feature should feel like part of the same CodeHouse Cloud product.

---

# 20. Responsive Design

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

---

# 21. Loading States

API-driven pages must provide appropriate loading states.

Examples:

```text
Loading courses...
Loading roadmap...
Loading mentors...
```

Use reusable loading components where available.

Avoid leaving users with blank screens while data is loading.

---

# 22. Error Handling

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

provide a user-friendly message.

For example:

```text
We were unable to load the courses.
Please try again.
```

---

# 23. Empty States

When no data exists, display a meaningful empty state.

For example:

```text
No courses found.

Try changing your search or filter.
```

Avoid showing blank pages.

---

# 24. Git Branching Strategy

The repository uses protected branches.

Recommended structure:

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

---

# 25. Creating a Branch

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

---

# 26. Branch Naming

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

---

# 27. Commit Messages

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
```

```text
changes
```

```text
fixed stuff
```

```text
final
```

Commits should clearly explain what changed.

---

# 28. Pull Requests

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

---

# 29. Pull Request Example

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

---

# 30. Before Opening a Pull Request

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

---

# 31. Files Contributors Must Not Commit

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

---

# 32. Do Not Change Core Infrastructure Without Approval

Before modifying any of the following, contact the project maintainer:

```text
package.json
next.config.ts
tsconfig.json
src/app/layout.tsx
src/app/globals.css
src/lib/api.ts
src/lib/apiClient.ts
src/lib/auth.ts
src/context/AuthContext.tsx
middleware.ts
.env.example
```

Also contact the maintainer before:

* Adding a new dependency.
* Changing authentication.
* Changing API architecture.
* Changing the global design system.
* Changing the routing architecture.
* Changing environment variable names.
* Changing deployment configuration.

---

# 33. Adding New Dependencies

Do not install packages simply because they are convenient.

Before adding a dependency:

1. Check whether the functionality already exists.
2. Check whether the project already has a library that solves the problem.
3. Discuss the dependency with the maintainer.
4. Explain why it is necessary.
5. Consider bundle size and performance.
6. Consider security and maintenance.

For example, do not install another UI framework if the project already uses Tailwind CSS and the approved component system.

---

# 34. Performance Guidelines

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

---

# 35. Accessibility Guidelines

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

---

# 36. SEO Guidelines

Public pages should be SEO-friendly.

Where applicable, provide:

* Page title.
* Meta description.
* Open Graph metadata.
* Canonical URL.
* Semantic HTML.
* Descriptive URLs.

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

Private dashboards do not need the same SEO treatment as public pages.

---

# 37. Authentication and Authorization

Authentication is handled centrally.

Do not create independent authentication logic inside individual feature modules.

The platform supports roles such as:

```text
Student
Instructor
Mentor
Employer
Administrator
```

Access to protected features must be controlled through the application's authentication and authorization architecture.

Do not assume that hiding a button provides security.

Authorization must ultimately be enforced by the backend.

The frontend should provide the appropriate user experience, but the Django backend remains the final authority for permissions.

---

# 38. API Security

The frontend must never assume that an API endpoint is secure simply because the button is hidden.

All sensitive permissions must be enforced by the Django backend.

Never trust:

```text
Frontend role checks
Frontend route restrictions
Hidden UI elements
```

as the only security mechanism.

The backend must validate:

* Authentication.
* Authorization.
* User permissions.
* Resource ownership.

---

# 39. Working With the Django Backend

The Next.js frontend and Django backend are separate applications.

```text
CodeHouse Cloud
│
├── Next.js Frontend
│
└── Django REST API
```

Frontend contributors should not modify backend code unless they are explicitly assigned backend work.

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

Response:

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

---

# 40. Do Not Mix Frontend and Backend Responsibilities

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

---

# 41. Code Review

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

---

# 42. Do Not Merge Your Own Pull Request Without Approval

Unless you are an authorized maintainer, do not merge your own Pull Request.

Wait for the required review and approval.

The project may require:

* Successful CI checks.
* At least one approval.
* No unresolved review comments.
* Passing build.
* Passing lint checks.

---

# 43. If You Discover a Problem

If you discover an issue outside your assigned feature:

Do not immediately modify unrelated code.

Instead:

1. Document the issue.
2. Create an issue if appropriate.
3. Inform the maintainer.
4. Fix it only if authorized.

This prevents contributors from unintentionally changing another developer's work.

---

# 44. Avoid Unnecessary Refactoring

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

---

# 45. Feature Ownership

The project may assign contributors to specific areas.

Example:

```text
Contributor A
Courses

Contributor B
Roadmaps

Contributor C
AI

Contributor D
Projects

Contributor E
Mentorship

Contributor F
Career

Contributor G
Community
```

Feature ownership does not mean permanent ownership.

It means the contributor is responsible for implementing the assigned feature according to the project requirements.

All code remains part of the CodeHouse Cloud project.

---

# 46. Communication

Before starting a major feature:

1. Read the project documentation.
2. Check existing issues.
3. Check existing Pull Requests.
4. Confirm your assignment.
5. Ask questions when requirements are unclear.

Do not duplicate work already being done by another contributor.

---

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

---

# 48. Recommended Contributor Workflow

Every contributor should follow this process:

```text
1. Read GUIDELINES.md
        ↓
2. Understand your assigned feature
        ↓
3. Pull latest development branch
        ↓
4. Create a feature branch
        ↓
5. Build the assigned feature
        ↓
6. Reuse existing components
        ↓
7. Use centralized API services
        ↓
8. Test the feature
        ↓
9. Check responsive behavior
        ↓
10. Check accessibility
        ↓
11. Check TypeScript and lint
        ↓
12. Commit changes
        ↓
13. Push feature branch
        ↓
14. Open Pull Request
        ↓
15. Respond to code review
        ↓
16. Obtain approval
        ↓
17. Merge according to repository rules
```

---

# 49. Final Architecture Principle

The CodeHouse Cloud frontend should follow this principle:

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

The frontend should be modular, reusable, scalable, secure, accessible, and maintainable.

Contributors should focus on building high-quality features while respecting the project's shared architecture and protected infrastructure.

---

# 50. Core Contributor Rule

> **Build your assigned feature. Reuse the shared architecture. Do not duplicate core functionality. Do not expose secrets. Do not hardcode API configuration. Do not modify protected infrastructure without approval. Always work through a feature branch and Pull Request.**

---

# 51. CodeHouse Cloud Development Philosophy

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

---

## Contact

**CodeHouse Cloud**

Website: https://www.codehouse.cloud

A product of **Applinet Technology**.
