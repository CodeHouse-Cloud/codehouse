import type { Metadata, Viewport } from "next";
import { Poppins, Roboto, Fira_Code } from "next/font/google";
import "./globals.css";

/**
 * >
 * CodeHouse Cloud
 * Root Application Layout
 * >
 *
 * 🔴 PROTECTED FILE
 *
 * This file defines the global application foundation.
 *
 * It is responsible for:
 *
 * - Global fonts
 * - Global metadata
 * - SEO defaults
 * - Viewport configuration
 * - Application-level HTML structure
 * - Loading the global stylesheet
 *
 * Contributors must NOT modify this file unless explicitly
 * authorized by the project maintainer.
 *
 * Feature-specific layouts belong in:
 *
 * - src/app/(public)/layout.tsx
 * - src/app/(auth)/layout.tsx
 * - src/app/dashboard/layout.tsx
 * - src/app/instructor/layout.tsx
 * - src/app/admin/layout.tsx
 *
 * The root layout must remain stable and must not contain
 * feature-specific UI, navigation, dashboards, or business logic.
 *
 * >
 */


/* >
   FONTS
   > */

/**
 * Poppins
 *
 * Primary font for:
 *
 * - Headings
 * - Navigation
 * - Buttons
 * - Labels
 * - Brand elements
 * - UI emphasis
 */

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});


/**
 * Roboto
 *
 * Primary font for:
 *
 * - Body text
 * - Descriptions
 * - Paragraphs
 * - Forms
 * - General application content
 */

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
});


/**
 * Fira Code
 *
 * Primary monospace font for:
 *
 * - Code editors
 * - Code blocks
 * - Terminal interfaces
 * - Developer tools
 * - Programming challenges
 */

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});


/* >
   SITE CONFIGURATION
   > */

const SITE_URL = "https://www.codehouse.cloud";

const SITE_NAME = "CodeHouse Cloud";

const SITE_DESCRIPTION =
  "CodeHouse Cloud is an AI-powered software engineering academy helping learners learn programming, practice coding, build real-world projects, collaborate with developers, connect with mentors, and prepare for professional careers.";


/* >
   GLOBAL METADATA
   > */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "CodeHouse Cloud | AI-Powered Software Engineering Academy",

    template:
      "%s | CodeHouse Cloud",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "CodeHouse Cloud",
    "software engineering academy",
    "learn programming",
    "learn software development",
    "AI coding education",
    "coding challenges",
    "software engineering projects",
    "developer mentorship",
    "programming courses",
    "developer careers",
    "coding playground",
    "software engineering education",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,

  publisher: SITE_NAME,

  category: "Education",

  alternates: {
    canonical: "/",
  },

  /* >
     OPEN GRAPH
     > */

  openGraph: {
    type: "website",

    siteName: SITE_NAME,

    title:
      "CodeHouse Cloud | AI-Powered Software Engineering Academy",

    description:
      "Learn software engineering with structured learning paths, AI-powered tools, practical coding, real-world projects, mentorship, collaboration, and career opportunities.",

    url: SITE_URL,

    locale: "en_US",

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


  /* >
     TWITTER / X
     > */

  twitter: {
    card: "summary_large_image",

    title:
      "CodeHouse Cloud | AI-Powered Software Engineering Academy",

    description:
      "Learn, practice, build, collaborate, and grow into an industry-ready software engineer with CodeHouse Cloud.",

    images: ["/images/og-image.png"],
  },


  /* >
     ROBOTS
     > */

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,
    },
  },


  /* >
     FAVICON
     > */

  icons: {
    icon: "/favicon.ico",
  },
};


/* >
   VIEWPORT
   > */

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 5,

  themeColor: "#050538",

  colorScheme: "light",
};


/* >
   ROOT LAYOUT
   > */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${roboto.variable}
        ${firaCode.variable}
      `}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
