import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://covenantconstructionpainting.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/kitchen-remodeling",
    "/services/bathroom-remodeling",
    "/services/painting",
    "/projects",
    "/before-after",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
