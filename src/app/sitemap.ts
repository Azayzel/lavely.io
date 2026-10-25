import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...projects.map((project) => "/work/" + project.slug)];
  return pages.map((path) => ({
    url: "https://lavely.io" + path,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
