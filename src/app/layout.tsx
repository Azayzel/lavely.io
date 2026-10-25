import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lavely.io"),
  title: { default: "Josh Lavely | Principal Engineer & Product Builder", template: "%s | Lavely.io" },
  description: "Josh Lavely is a principal software engineer with 20+ years of experience. Explore websites, independent products, open-source developer tools, and engineering writing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "https://lavely.io", siteName: "Lavely.io",
    title: "Josh Lavely — I build things that work.",
    description: "Principal engineer by profession. Product builder by nature.",
    locale: "en_US",
  },
  twitter: { card: "summary", title: "Josh Lavely | Principal Engineer & Product Builder" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josh Lavely",
    jobTitle: "Principal Software Engineer",
    url: "https://lavely.io",
    sameAs: ["https://github.com/Azayzel", "https://blog.lavely.io"],
    knowsAbout: ["Software architecture", "Full-stack engineering", "AI-assisted development", "Open source"],
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
