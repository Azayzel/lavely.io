import Link from "next/link";
import ProjectPreview from "@/components/ProjectPreview";
import { projects } from "@/data/projects";

const repos = [
  { name: "HarMock", category: "API development", mark: "{ }", desc: "Turn browser HAR files into mock APIs for development, integration tests and QA.", url: "https://github.com/Azayzel/HarMock" },
  { name: "NothingPersonal", category: "Agent privacy", mark: "//", desc: "A local egress proxy designed to redact sensitive data from outbound agent traffic.", url: "https://github.com/Azayzel/NothingPersonal" },
  { name: "PRQuest", category: "Developer experience", mark: "◇", desc: "An experiment in making code review more engaging through game mechanics.", url: "https://github.com/Azayzel/PRQuest" },
  { name: "SpawnKit", category: "AI & creative tooling", mark: "✳", desc: "Building consistent, locally generated game characters and exportable assets.", url: "https://github.com/Azayzel/SpawnKit" },
];

function Brand() {
  return <Link className="brand" href="/" aria-label="Lavely.io homepage"><span className="brand__icon">L<span>.</span></span><span>LAVELY<span className="brand__io">.IO</span></span></Link>;
}
function SiteHeader() {
  return (
    <header className="header">
      <div className="shell header__inner">
        <Brand />
        <nav className="nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#open-source">Open source</a><a href="#writing">Writing</a><a href="#about">About</a>
        </nav>
        <a className="header__contact" href="mailto:contact@lavely.io?subject=Let%27s%20build%20something">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer dark">
      <div className="shell footer__inner">
        <Brand />
        <p>Built thoughtfully. © {new Date().getFullYear()} Lavely.io.</p>
        <div className="footer__links"><a href="https://github.com/Azayzel" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://blog.lavely.io/" target="_blank" rel="noreferrer">Blog ↗</a><a href="mailto:contact@lavely.io">Email ↗</a></div>
      </div>
    </footer>
  );
}
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero dark" aria-labelledby="intro-title">
          <div className="shell hero__grid">
            <div className="hero__copy">
              <div className="eyebrow"><span className="eyebrow__dot"/> INDEPENDENT ENGINEERING & PRODUCT WORK</div>
              <h1 id="intro-title">I build things<br/>that <em>work.</em><span className="cursor">_</span></h1>
              <p className="hero__lead">I&apos;m Josh — a principal software engineer with 20+ years of experience designing systems, solving difficult problems, and turning ideas into products people can actually use.</p>
              <p className="hero__sub">Enterprise architecture by day. Websites, apps and open-source experiments the rest of the time. This is where the work lives.</p>
              <div className="actions"><a className="btn btn--accent" href="#work">Explore selected work <span>↘</span></a><a className="btn btn--outline" href="#about">A little about me <span>↗</span></a></div>
            </div>
            <div className="hero__diagram" aria-hidden="true">
              <span className="diagram__top">A FEW THINGS I&apos;VE BUILT</span>
              <div className="diagram__ring diagram__ring--outer"/><div className="diagram__ring diagram__ring--middle"/><div className="diagram__ring diagram__ring--inner"/>
              <div className="diagram__spoke diagram__spoke--a"/><div className="diagram__spoke diagram__spoke--b"/><div className="diagram__spoke diagram__spoke--c"/>
              <div className="diagram__node diagram__node--center"><b>JL</b><small>IDEA → LIVE</small></div>
              <div className="diagram__node diagram__node--a"><b>✳</b><small>PRODUCTS</small></div>
              <div className="diagram__node diagram__node--b"><b>⌘</b><small>SYSTEMS</small></div>
              <div className="diagram__node diagram__node--c"><b>{"</>"}</b><small>TOOLS</small></div>
              <span className="diagram__bottom">CONCEPT · DESIGN · ENGINEERING · SHIP</span>
            </div>
          </div>
          <div className="shell hero__end"><div/><span>01 / THE WORK IS THE INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="section work">
          <div className="shell">
            <div className="section-heading">
              <div><p className="kicker">01 — SELECTED WORK</p><h2>Not just concepts.<br/><em>Out in the world.</em></h2></div>
              <p>Three recent projects, three different problems. I like taking complicated ideas and making them feel simple — from the first click to the systems behind it.</p>
            </div>
            <div className="work__list">
              {projects.map((project) => (
                <article className="work-card" key={project.slug}>
                  <ProjectPreview project={project}/>
                  <div className="work-card__details">
                    <p className="work-card__eyebrow">PROJECT {project.number} <span>{project.category}</span></p>
                    <h3>{project.name}<span aria-hidden="true">↗</span></h3>
                    <p>{project.intro}</p>
                    <div className="tags">{project.technologies.slice(0,4).map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="work-card__links"><Link href={"/work/" + project.slug}>Behind the build ↗</Link><a href={project.href} target="_blank" rel="noopener noreferrer">Visit website ↗</a></div>
                  </div>
                </article>
              ))}
            </div>
            <p className="caption">Project screenshots were supplied by the site owner and optimized for web presentation.</p>
          </div>
        </section>

        <section id="open-source" className="section dark open-source">
          <div className="shell">
            <div className="section-heading section-heading--dark">
              <div><p className="kicker">02 — OPEN SOURCE & EXPERIMENTS</p><h2>Some tools should<br/><em>be shared.</em></h2></div>
              <p>I build tools because I keep running into problems worth solving. Some become products; others stay experiments. The useful ones make their way onto GitHub.</p>
            </div>
            <div className="repo-grid">
              {repos.map((repo) => (
                <a className="repo" href={repo.url} key={repo.name} target="_blank" rel="noopener noreferrer">
                  <span className="repo__top">{repo.category}<span>↗</span></span>
                  <span className="repo__mark">{repo.mark}</span>
                  <h3>{repo.name}</h3><p>{repo.desc}</p>
                  <span className="repo__link">Explore on GitHub ↗</span>
                </a>
              ))}
            </div>
            <div className="repo-footer"><span>There&apos;s plenty more in the workshop.</span><a href="https://github.com/Azayzel" target="_blank" rel="noopener noreferrer">Browse all GitHub projects ↗</a></div>
          </div>
        </section>

        <section id="writing" className="section writing">
          <div className="shell">
            <div className="section-heading">
              <div><p className="kicker">03 — THINKING OUT LOUD</p><h2>Notes from<br/><em>the field.</em></h2></div>
              <p>I write about engineering decisions that stick with me: architecture, security, developer tools, AI and what changes when you have to ship and maintain things.</p>
            </div>
            <div className="writing__topics">
              <div><span>01</span><h3>Building with agents without abandoning engineering judgment.</h3><span>AI & ENGINEERING</span></div>
              <div><span>02</span><h3>Designing systems that survive beyond the first demo.</h3><span>SOFTWARE ARCHITECTURE</span></div>
              <div><span>03</span><h3>The developer tooling problems worth solving.</h3><span>OPEN SOURCE</span></div>
            </div>
            <a className="underlined-link" href="https://blog.lavely.io/" target="_blank" rel="noopener noreferrer">Read my writing at blog.lavely.io ↗</a>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="shell about__grid">
            <div><p className="kicker">04 — A BIT ABOUT ME</p><h2>Engineer first.<br/><em>Always curious.</em></h2></div>
            <div className="about__copy">
              <p className="about__lead">I&apos;ve spent more than two decades building software — from hands-on product development to the architecture behind complex enterprise systems.</p>
              <p>Today I work as a Principal Software Engineer at a Fortune 200 company. Outside that role, I build independent products, help businesses create better experiences online and explore what&apos;s possible with AI-assisted engineering.</p>
              <p>I care about maintainable systems, clear interfaces and technology that gets out of people&apos;s way. The best way I know to demonstrate what you can do is to build something useful and put it out into the world.</p>
              <div className="about__fact"><small>WHAT I DO</small><strong>Architecture · Full-stack engineering · Product development</strong></div>
              <div className="about__fact"><small>WHAT I VALUE</small><strong>Clarity · Craft · Practicality · Curiosity</strong></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact dark">
          <div className="shell contact__grid">
            <div><p className="kicker">05 — SAY HELLO</p><h2>Have something<br/><em>worth building?</em></h2><p>Whether it&apos;s a website, a complex software problem or an interesting engineering conversation, I&apos;d like to hear about it.</p><a className="btn btn--accent" href="mailto:contact@lavely.io?subject=Let%27s%20build%20something">contact@lavely.io ↗</a></div>
            <span className="contact__monogram" aria-hidden="true">L.</span>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
