
/*
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║  ⚠️  CODEHOUSE CLOUD — HOMEPAGE CONTRIBUTOR IMPLEMENTATION BRIEF    ║
║                                                                      ║
║  STATUS: 🟠 ASSIGNMENT REQUIRED                                     ║
║                                                                      ║
║  This file contains the implementation requirements for the        ║
║  CodeHouse Cloud public homepage.                                  ║
║                                                                      ║
║  IMPORTANT CONTRIBUTOR INSTRUCTION                                 ║
║                                                                      ║
║  The original starter code is preserved at the bottom of this      ║
║  file inside a protected comment block.                             ║
║                                                                      ║
║  DO NOT DELETE THE COMMENTED STARTER CODE.                          ║
║                                                                      ║
║  DO NOT MODIFY THE COMMENTED STARTER CODE.                          ║
║                                                                      ║
║  Write your new homepage implementation ABOVE the commented        ║
║  starter code.                                                     ║
║                                                                      ║
║  This allows the project maintainer to compare the original        ║
║  implementation with your proposed implementation during code      ║
║  review.                                                            ║
║                                                                      ║
║  After the Pull Request has been reviewed and approved, the         ║
║  project maintainer will remove the temporary commented starter    ║
║  code and finalize this file.                                      ║
║                                                                      ║
║  DO NOT REMOVE THE COMMENTED STARTER CODE YOURSELF.                 ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
*/


/* ====================================================================
   HOMEPAGE IMPLEMENTATION REQUIREMENTS
   ====================================================================

   PROJECT
   --------------------------------------------------------------------

   CodeHouse Cloud

   Website:
   https://www.codehouse.cloud

   Product:
   AI-Powered Software Engineering Academy


   HOMEPAGE PURPOSE
   --------------------------------------------------------------------

   The homepage is the primary public entry point into CodeHouse Cloud.

   Its purpose is to clearly communicate what CodeHouse Cloud is,
   who it serves, and how learners can begin their journey.

   The homepage should guide a visitor through the following journey:

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


   CORE PRODUCT MESSAGE
   --------------------------------------------------------------------

   CodeHouse Cloud is an AI-powered software engineering academy
   designed to help learners progress from beginners to
   industry-ready software engineers.

   The platform combines:

   - Structured learning paths
   - Software engineering courses
   - AI-powered learning assistance
   - AI tutoring
   - Coding practice
   - Coding challenges
   - Practical coding environments
   - Real-world projects
   - Developer collaboration
   - Mentorship
   - Career development
   - Jobs and internships
   - Professional developer profiles
   - Certificates
   - Developer community


   REQUIRED HOMEPAGE SECTIONS
   ====================================================================

   The homepage implementation should include the following major
   sections.

   --------------------------------------------------------------------
   1. HERO SECTION
   --------------------------------------------------------------------

   The hero section is the first visual experience.

   It should immediately communicate:

   - What CodeHouse Cloud is.
   - Who the platform is for.
   - What learners can achieve.
   - Why the platform is different.
   - The value of combining learning, AI, practice, projects,
     mentorship, and career development.

   Required elements:

   - Strong headline.
   - Supporting description.
   - Primary call-to-action.
   - Secondary call-to-action.
   - Appropriate visual element.
   - Responsive layout.

   Suggested primary actions:

   - Start Learning
   - Explore Courses

   Suggested secondary actions:

   - Explore Learning Paths
   - Explore the Platform


   --------------------------------------------------------------------
   2. PLATFORM VALUE / ECOSYSTEM SECTION
   --------------------------------------------------------------------

   Introduce the complete CodeHouse Cloud learning ecosystem.

   The section should visually communicate that CodeHouse Cloud is
   more than a traditional online course platform.

   Suggested areas:

   - Learn
   - Practice
   - Build
   - Use AI
   - Collaborate
   - Get Mentored
   - Build a Career

   The section should be visually scannable and easy to understand.


   --------------------------------------------------------------------
   3. FEATURED COURSES
   --------------------------------------------------------------------

   Display selected courses available on the platform.

   Each course presentation may include:

   - Course title.
   - Course description.
   - Difficulty level.
   - Estimated duration.
   - Technology or programming language.
   - Instructor information where available.
   - Course image.
   - Call-to-action.

   The layout should support future API integration.

   Do not hardcode sensitive backend configuration.

   If data is eventually retrieved from the Django API, use the
   centralized API architecture defined by the project.


   --------------------------------------------------------------------
   4. LEARNING ROADMAPS
   --------------------------------------------------------------------

   Introduce structured learning paths.

   The visitor should understand that CodeHouse Cloud helps learners
   follow a guided path instead of learning randomly.

   Possible roadmap examples:

   - Web Development
   - Software Development
   - Python Development
   - Frontend Development
   - Backend Development
   - Full-Stack Development
   - AI and Machine Learning
   - Cloud Computing

   Roadmap cards should communicate progression clearly.


   --------------------------------------------------------------------
   5. AI-POWERED LEARNING
   --------------------------------------------------------------------

   Introduce the AI capabilities of CodeHouse Cloud.

   Possible features include:

   - AI Assistant.
   - AI Tutor.
   - Coding assistance.
   - Personalized explanations.
   - Learning support.
   - Programming guidance.
   - Debugging assistance.
   - Learning recommendations.

   The section should communicate that AI supports the learner's
   development journey.

   Do not expose private AI API keys in frontend code.

   Never place secret OpenAI or other AI provider credentials inside
   NEXT_PUBLIC_ environment variables.


   --------------------------------------------------------------------
   6. PRACTICAL CODING / PLAYGROUND
   --------------------------------------------------------------------

   Introduce the practical coding experience.

   Communicate that learners should be able to:

   - Write code.
   - Practice programming.
   - Solve challenges.
   - Experiment.
   - Receive feedback.
   - Improve their skills.

   The design should feel developer-focused and professional.

   Code-related UI should use:

   --font-fira-code

   where appropriate.


   --------------------------------------------------------------------
   7. REAL-WORLD PROJECTS
   --------------------------------------------------------------------

   Explain how learners move from theory to practical experience.

   The section should communicate:

   Learn
      ↓
   Practice
      ↓
   Build
      ↓
   Collaborate
      ↓
   Showcase


   --------------------------------------------------------------------
   8. MENTORSHIP
   --------------------------------------------------------------------

   Introduce access to mentors and professional guidance.

   Possible information:

   - Mentor profiles.
   - Mentorship sessions.
   - Booking.
   - Career guidance.
   - Technical guidance.

   The section should encourage learners to see mentorship as part
   of their professional development journey.


   --------------------------------------------------------------------
   9. CAREER DEVELOPMENT
   --------------------------------------------------------------------

   Introduce the career ecosystem.

   Possible features:

   - Developer profiles.
   - Jobs.
   - Internships.
   - Career preparation.
   - Portfolio development.
   - Certificates.

   The objective is to communicate the transition:

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


   --------------------------------------------------------------------
   10. FINAL CALL TO ACTION
   --------------------------------------------------------------------

   End the homepage with a strong call to action.

   The visitor should have a clear next step.

   Possible actions:

   - Create an Account.
   - Start Learning.
   - Explore Courses.
   - Explore Roadmaps.


   ====================================================================
   DESIGN AND LAYOUT REQUIREMENTS
   ====================================================================

   The homepage must align with the CodeHouse Cloud global design
   system defined in:

   src/app/globals.css

   Do not redefine the global theme inside this file.


   BRAND COLORS
   --------------------------------------------------------------------

   Primary Navy:

   #050538

   Secondary Cyan:

   #16C4E8

   White:

   #FFFFFF

   Use the central theme tokens wherever available.

   Do not introduce random colors.

   Do not create a new color system for the homepage.


   TYPOGRAPHY
   --------------------------------------------------------------------

   Primary heading font:

   Poppins

   Body font:

   Roboto

   Code and developer interfaces:

   Fira Code

   These fonts are loaded globally by:

   src/app/layout.tsx


   LAYOUT
   --------------------------------------------------------------------

   The homepage should be:

   - Modern.
   - Professional.
   - Responsive.
   - Accessible.
   - Visually consistent.
   - Easy to scan.
   - Conversion-focused.
   - Performance-conscious.

   Use a consistent maximum content width.

   Recommended:

   max-width:
   1280px

   or the equivalent centralized design token.

   Maintain consistent horizontal spacing across sections.

   Avoid excessively wide text blocks.

   Use appropriate vertical spacing between sections.


   RESPONSIVE DESIGN
   --------------------------------------------------------------------

   The homepage must work correctly on:

   - Mobile phones.
   - Tablets.
   - Laptops.
   - Desktop monitors.

   Test:

   - 320px.
   - 375px.
   - 390px.
   - 768px.
   - 1024px.
   - 1280px.
   - 1440px and above.

   Pay particular attention to:

   - Hero layout.
   - Navigation interaction.
   - Cards.
   - Buttons.
   - Images.
   - Typography.
   - Horizontal overflow.
   - Mobile spacing.


   ====================================================================
   CSS REQUIREMENTS
   ====================================================================

   The homepage must use the project's central design system.

   Global theme:

   src/app/globals.css

   Contributors may use:

   - Tailwind CSS utility classes.
   - Existing shared components.
   - Existing design tokens.

   Contributors must NOT modify globals.css as part of this task.

   If a new global design token is genuinely required:

   1. Document the requirement.
   2. Mention it in the Pull Request.
   3. Contact the project maintainer.
   4. Wait for approval.

   Do not create conflicting global CSS rules.


   COMPONENT GUIDELINES
   --------------------------------------------------------------------

   If the homepage becomes too large, extract reusable sections into:

   src/components/home/

   Examples:

   - Hero.tsx
   - PlatformFeatures.tsx
   - FeaturedCourses.tsx
   - FeaturedRoadmaps.tsx
   - AISection.tsx
   - PlaygroundSection.tsx
   - ProjectsSection.tsx
   - MentorshipSection.tsx
   - CareerSection.tsx
   - CTASection.tsx

   However, do not unnecessarily create components for every small
   element.

   Components should be created when they provide:

   - Reusability.
   - Clear responsibility.
   - Better maintainability.
   - Better readability.


   ====================================================================
   SITE PLAN / VISUAL REFERENCE
   ====================================================================

   The homepage implementation should follow the approved CodeHouse
   Cloud site plan and visual direction.

   Site plan image:

   public/images/site-plan/homepage-site-plan.png

   If the site plan image exists, review it before implementing
   the homepage.

   If the image does not exist yet, request the approved site plan
   from the project maintainer before making major structural
   decisions.

   Do not invent a completely different homepage architecture if
   an approved site plan already exists.

   The site plan should be treated as a design and product reference,
   not as a replacement for responsive implementation.


   ====================================================================
   WIREFRAMES / DESIGN REFERENCES
   ====================================================================

   Contributors must review the approved homepage wireframes before
   beginning implementation.

   The wireframes provide the intended visual structure, layout,
   spacing, content hierarchy, and responsive behavior of the
   CodeHouse Cloud homepage.

   --------------------------------------------------------------------
   DESKTOP WIREFRAME
   --------------------------------------------------------------------

   Review the approved desktop homepage wireframe:

   http://my.codehouse.cloud/images/desktop.png

   Desktop wireframe should be used as the primary reference for:

   - Header and navigation layout.
   - Hero section structure.
   - Section positioning.
   - Content hierarchy.
   - Course and roadmap card layouts.
   - AI learning section.
   - Coding playground presentation.
   - Project showcase.
   - Mentorship section.
   - Career development section.
   - Final call-to-action.
   - Footer positioning.

   
   --------------------------------------------------------------------
   MOBILE WIREFRAME
   --------------------------------------------------------------------

   Review the approved mobile homepage wireframe:

   http://my.codehouse.cloud/images/mobile.png

   Mobile wireframe should be used as the primary reference for:

   - Mobile navigation.
   - Mobile menu behavior.
   - Hero content stacking.
   - Button layout.
   - Card responsiveness.
   - Typography scaling.
   - Image sizing.
   - Section spacing.
   - Horizontal overflow prevention.
   - Mobile call-to-action placement.


   --------------------------------------------------------------------
   RESPONSIVE IMPLEMENTATION RULE
   --------------------------------------------------------------------

   The desktop and mobile wireframes are visual references.

   Contributors must not implement the homepage as a fixed design
   that only matches one screen size.

   The final implementation must provide a responsive experience
   between the approved desktop and mobile designs.

   Contributors should use responsive CSS and/or Tailwind responsive
   utilities to ensure the layout adapts naturally across:

   - Small mobile devices.
   - Large mobile devices.
   - Tablets.
   - Small laptops.
   - Desktop monitors.
   - Large desktop screens.

   Where the desktop and mobile wireframes differ structurally,
   implement the responsive behavior required to reproduce the
   intended experience at the appropriate breakpoint.

   Do not create separate duplicated pages for desktop and mobile
   unless explicitly approved by the project maintainer.


   --------------------------------------------------------------------
   DESIGN REFERENCE PRIORITY
   --------------------------------------------------------------------

   When implementing the homepage, use the following priority order:

   1. Approved desktop and mobile wireframes.
   2. Approved CodeHouse Cloud site plan.
   3. CodeHouse Cloud global design system.
   4. Existing shared components.
   5. Homepage functional requirements.
   6. Contributor design decisions.

   If a conflict exists between these references, do not silently
   introduce a new design direction.

   Document the conflict in the Pull Request and request clarification
   from the project maintainer.


   --------------------------------------------------------------------
   IMPORTANT
   --------------------------------------------------------------------

   Wireframes are references for visual structure and user experience.

   They do not override:

   - Accessibility requirements.
   - Responsive requirements.
   - Performance requirements.
   - SEO requirements.
   - Global design tokens.
   - Existing project architecture.

   The final homepage should preserve the approved visual direction
   while meeting modern web development standards.


   ====================================================================
   ACCESSIBILITY REQUIREMENTS
   ====================================================================

   The homepage must be accessible.

   Contributors must:

   - Use semantic HTML.
   - Use proper heading hierarchy.
   - Provide meaningful alt text.
   - Ensure buttons are keyboard accessible.
   - Ensure links have descriptive text.
   - Maintain visible focus states.
   - Use sufficient color contrast.
   - Avoid communicating information through color alone.
   - Avoid inaccessible hover-only interactions.

   The page should have one primary H1 heading.

   Heading hierarchy should generally follow:

   H1
     ↓
   H2
     ↓
   H3


   ====================================================================
   SEO REQUIREMENTS
   ====================================================================

   The homepage must support search engine optimization.

   The root layout provides global metadata.

   This page may define homepage-specific metadata.

   Do not unnecessarily duplicate global metadata.

   Ensure:

   - One clear H1.
   - Semantic HTML.
   - Descriptive page content.
   - Descriptive links.
   - Optimized images.
   - Appropriate alt text.
   - No keyword stuffing.


   ====================================================================
   PERFORMANCE REQUIREMENTS
   ====================================================================

   The homepage should prioritize performance.

   Contributors should:

   - Avoid unnecessary client components.
   - Avoid unnecessary JavaScript.
   - Optimize images.
   - Avoid oversized images.
   - Use Next.js image optimization where appropriate.
   - Avoid unnecessary API requests.
   - Use Server Components where possible.

   Do not add:

   "use client";

   unless client-side functionality actually requires it.


   ====================================================================
   API INTEGRATION
   ====================================================================

   If homepage data is retrieved from the backend:

   Do NOT write:

   fetch("https://api.codehouse.cloud/api/courses/");

   Do NOT hardcode API URLs.

   Use the project's centralized API architecture.

   Expected architecture:

   Homepage
       ↓
   Feature Component
       ↓
   Service
       ↓
   API Client
       ↓
   Django REST API

   Coordinate with the backend team before assuming API endpoints.


   ====================================================================
   REQUIRED STATES
   ====================================================================

   API-driven sections must consider:

   - Loading state.
   - Error state.
   - Empty state.
   - Successful state.

   Do not leave sections blank when data is unavailable.

   Provide meaningful user feedback.


   ====================================================================
   CONTRIBUTOR IMPLEMENTATION RULE
   ====================================================================

   START YOUR IMPLEMENTATION ABOVE THIS COMMENT BLOCK.

   The original starter implementation is preserved below.

   DO NOT DELETE IT.

   DO NOT MODIFY IT.

   DO NOT WRITE YOUR IMPLEMENTATION BELOW IT.

   Your implementation must appear ABOVE the protected starter
   implementation.

   After review and approval:

   The project maintainer will:

   1. Review the implementation.
   2. Compare it with the original starter.
   3. Request changes if necessary.
   4. Approve the Pull Request.
   5. Remove the temporary commented starter code.
   6. Finalize the homepage implementation.

   ====================================================================
*/


/*
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║  ⚠️  START YOUR NEW HOMEPAGE IMPLEMENTATION ABOVE THIS LINE         ║
║                                                                      ║
║  The code below is the original protected starter implementation.   ║
║                                                                      ║
║  Keep it commented during development and code review.              ║
║                                                                      ║
║  The project maintainer will remove this block after review.        ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
*/


/*
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Learn Software Engineering with AI",

  description:
    "CodeHouse Cloud is an AI-powered software engineering academy where learners can learn programming, follow structured learning paths, practice coding, build real-world projects, collaborate with developers, connect with mentors, and prepare for professional careers.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "CodeHouse Cloud | AI-Powered Software Engineering Academy",

    description:
      "Learn, practice, build, collaborate, and grow into an industry-ready software engineer with CodeHouse Cloud.",

    url: "/",

    type: "website",

    images: [
      {
        url: "/images/og-image.png",

        width: 1200,

        height: 630,

        alt:
          "CodeHouse Cloud - AI-Powered Software Engineering Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "CodeHouse Cloud | AI-Powered Software Engineering Academy",

    description:
      "Learn, practice, build, collaborate, and grow into an industry-ready software engineer with CodeHouse Cloud.",

    images: ["/images/og-image.png"],
  },
};


export default function HomePage() {
  return (
    <main id="main-content">
      <section>
        <h1>
          Learn Software Engineering.
          Build Real-World Skills.
          Grow With AI.
        </h1>

        <p>
          CodeHouse Cloud is an AI-powered software engineering academy
          helping learners learn, practice, build, collaborate, and
          prepare for professional careers.
        </p>

        <div>
          <a href="/courses">
            Start Learning
          </a>

          <a href="/roadmaps">
            Explore Learning Paths
          </a>
        </div>
      </section>
    </main>
  );
}
*/


/*
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║  🔴 MAINTAINER NOTICE                                               ║
║                                                                      ║
║  This temporary implementation guide and commented starter code     ║
║  are part of the contributor review process.                        ║
║                                                                      ║
║  They should remain in this file until the Pull Request has been    ║
║  reviewed and approved.                                             ║
║                                                                      ║
║  The project maintainer is responsible for removing the temporary   ║
║  comments after the implementation has been accepted.               ║
║                                                                      ║
║  Contributors should not remove this review structure themselves.   ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
*/

