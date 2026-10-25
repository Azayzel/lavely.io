import type { Project } from "@/data/projects";

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={"preview preview--" + project.slug} aria-hidden="true">
      <div className="browser">
        <div className="browser__bar">
          <span className="browser__dots"><i/><i/><i/></span>
          <span>{project.domain}</span>
          <span className="browser__menu">↗</span>
        </div>
        {project.slug === "kinvite" && (
          <div className="scene scene--kinvite">
            <div className="scene__brand">kinvite<span>✳</span></div>
            <div className="scene__panel">
              <small>BRING YOUR PEOPLE TOGETHER</small>
              <h3>Make more<br/><em>memories.</em></h3>
              <div className="mini-event"><b>15<br/>NOV</b><span>Family get-together<small>RSVP · Gifts · Chat</small></span><i>↗</i></div>
              <div className="mini-event mini-event--faded"><b>24<br/>DEC</b><span>Holiday traditions<small>Everyone&apos;s invited</small></span><i>↗</i></div>
            </div>
          </div>
        )}
        {project.slug === "kennasits" && (
          <div className="scene scene--kenna">
            <div className="kenna__tiny">✳ &nbsp; PERSONALIZED PET CARE</div>
            <h3>Good care.<br/><em>Happy tails.</em></h3>
            <div className="kenna__pet" aria-hidden="true">✿</div>
            <div className="kenna__foot"><span>LOCAL & PERSONAL</span><span>♡</span></div>
          </div>
        )}
        {project.slug === "veerdonk-furniture" && (
          <div className="scene scene--veerdonk">
            <div className="veerdonk__brand">VEERDONK<span>FURNITURE</span></div>
            <div className="chair">
              <div className="chair__back"/><div className="chair__seat"/>
              <div className="chair__leg chair__leg--l"/><div className="chair__leg chair__leg--r"/>
            </div>
            <div className="veerdonk__bottom"><small>BUILT WITH INTENTION</small><h3>Furniture with a story.</h3></div>
          </div>
        )}
      </div>
    </div>
  );
}
