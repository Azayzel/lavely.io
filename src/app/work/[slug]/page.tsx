import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectPreview from "@/components/ProjectPreview";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.name + " — Selected Work",
    description: project.intro,
    alternates: { canonical: "/work/" + slug },
    openGraph: { title: project.name + " | Josh Lavely", description: project.intro, url: "/work/" + slug },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <main id="main" className="case">
      <header className="case__nav"><div className="shell"><Link href="/" className="case__brand">LAVELY<span>.IO</span></Link><Link href="/#work">← All work</Link></div></header>
      <section className="case__intro dark">
        <div className="shell">
          <p className="kicker">SELECTED WORK / {project.number}</p>
          <h1>{project.name}<span>.</span></h1>
          <p className="case__headline">{project.headline}</p>
          <div className="case__actions"><a className="btn btn--accent" href={project.href} target="_blank" rel="noopener noreferrer">Visit {project.domain} ↗</a><Link className="btn btn--outline" href="/#work">Explore other projects ↗</Link></div>
        </div>
      </section>
      <div className="shell case__preview"><ProjectPreview project={project}/></div>
      <section className="shell case__body">
        <div className="case__main"><p className="kicker">THE PROBLEM</p><h2>What needed solving.</h2><p>{project.challenge}</p><p className="kicker">THE APPROACH</p><h2>Building for the real world.</h2><p>{project.solution}</p></div>
        <aside className="case__aside"><h3>What went into it</h3><ul>{project.capabilities.map((item)=><li key={item}>{item}</li>)}</ul><h3>Tools & disciplines</h3><div className="tags">{project.technologies.map((item)=><span key={item}>{item}</span>)}</div><p className="caption">Project summaries describe the intended design and implemented capabilities, not invented traffic or business outcomes.</p></aside>
      </section>
      <footer className="case__footer dark"><div className="shell"><div><p>Have an idea worth making real?</p><a href="mailto:contact@lavely.io">Let's talk ↗</a></div><Link href="/">Back to Lavely.io ↑</Link></div></footer>
    </main>
  );
}
