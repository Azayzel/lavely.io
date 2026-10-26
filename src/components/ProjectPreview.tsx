import Image from "next/image";
import type { Project } from "@/data/projects";

const previews: Record<Project["slug"], { src: string; width: number; height: number }> = {
  kinvite: { src: "/work/kinvite-mobile.webp", width: 650, height: 1109 },
  kennasits: { src: "/work/kennasits-mobile.webp", width: 650, height: 1132 },
  "veerdonk-furniture": { src: "/work/veerdonk-mobile.webp", width: 650, height: 1119 },
};

export default function ProjectPreview({ project }: { project: Project }) {
  const preview = previews[project.slug];
  return (
    <div className={"preview preview--" + project.slug}>
      <div className="photo-stage">
        <span className="photo-stage__badge">REAL PROJECT · MOBILE SCREENSHOT</span>
        <div className="phone-frame">
          <div className="phone-frame__screen">
            <Image
              src={preview.src}
              alt={project.name + " mobile website screenshot"}
              width={preview.width}
              height={preview.height}
              sizes="(max-width: 540px) 198px, (max-width: 800px) 218px, 230px"
              quality={85}
            />
          </div>
        </div>
        <span className="photo-stage__domain">{project.domain}</span>
      </div>
    </div>
  );
}
