"use client";

import {
  ContentAnchor,
  ContentText,
  useContentProjects,
} from "@/components/cms/Content";
import React, { useState } from "react";
import { ContentImage as Image } from "@/components/cms/Content";
import { ContentLink as Link } from "@/components/cms/Content";
import { ArrowUpRight, X, Check, Phone } from "lucide-react";
import { Project } from "@/data/projects";
import { COMPANY_INFO } from "@/data/assets";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

interface ProjectGalleryProps {
  initialFilter?: "all" | "kitchens" | "bathrooms" | "painting" | "other";
  limit?: number;
  showFilters?: boolean;
  showViewAllButton?: boolean;
}

export function ProjectGallery({
  initialFilter = "all",
  limit,
  showFilters = true,
  showViewAllButton = false,
}: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { key: "all", label: "ALL" },
    { key: "kitchens", label: "KITCHENS" },
    { key: "bathrooms", label: "BATHROOMS" },
    { key: "painting", label: "PAINTING" },
    { key: "other", label: "OTHER PROJECTS" },
  ];

  const projects = useContentProjects();
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-covenant-navy text-white shadow-sm border border-covenant-gold/50"
                    : "bg-white text-covenant-muted hover:text-covenant-navy border border-covenant-border hover:border-covenant-gold/40"
                }`}
              >
                <ContentText id="components-ProjectGallery-text-1">
                  {f.label}
                </ContentText>
              </button>
            );
          })}
        </div>
      )}

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            data-project-id={project.id} // Internal identifier for easy client swapping
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-covenant-border/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-covenant-navy/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-covenant-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Pill */}
              <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-sm text-covenant-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded shadow-sm border border-covenant-border">
                <ContentText id="components-ProjectGallery-text-2">
                  {project.categoryLabel}
                </ContentText>
              </div>

              {/* View Icon Badge */}
              <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-covenant-gold text-covenant-navy flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="p-6 space-y-2.5">
              <h3 className="font-serif text-xl font-bold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                <ContentText id="components-ProjectGallery-text-3">
                  {project.title}
                </ContentText>
              </h3>
              <p className="text-sm text-covenant-muted line-clamp-2 leading-relaxed font-light">
                <ContentText id="components-ProjectGallery-text-4">
                  {project.summary}
                </ContentText>
              </p>
              <div className="pt-2 flex items-center text-xs font-semibold text-covenant-navy group-hover:text-covenant-gold-dark transition-colors">
                <span>
                  <ContentText id="components-ProjectGallery-text-5">
                    {"Explore Project Details"}
                  </ContentText>
                </span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  <ContentText id="components-ProjectGallery-text-6">
                    {"→"}
                  </ContentText>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      {showViewAllButton && (
        <div className="text-center pt-4">
          <Link
            cmsId="components-ProjectGallery-link-1"
            href="/projects"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-covenant-offwhite text-covenant-navy font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-md border border-covenant-border hover:border-covenant-gold transition-all duration-200 shadow-subtle cursor-pointer"
          >
            <span>
              <ContentText id="components-ProjectGallery-text-7">
                {"VIEW ALL PROJECTS"}
              </ContentText>
            </span>
            <span className="text-covenant-gold">
              <ContentText id="components-ProjectGallery-text-8">
                {"→"}
              </ContentText>
            </span>
          </Link>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-covenant-navy/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="bg-white w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl shadow-elevated border border-covenant-border p-4 sm:p-8 space-y-5 sm:space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-covenant-offwhite hover:bg-covenant-border/60 text-covenant-navy flex items-center justify-center cursor-pointer transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-bold tracking-widest text-covenant-gold-dark uppercase">
                <ContentText id="components-ProjectGallery-text-9">
                  {selectedProject.categoryLabel}
                </ContentText>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-covenant-navy mt-1">
                <ContentText id="components-ProjectGallery-text-10">
                  {selectedProject.title}
                </ContentText>
              </h3>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-covenant-navy/5 shadow-subtle border border-covenant-border">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {selectedProject.beforeImage && selectedProject.afterImage && (
              <BeforeAfterSlider
                beforeImage={selectedProject.beforeImage}
                afterImage={selectedProject.afterImage}
                beforeAlt={`${selectedProject.title} — before`}
                afterAlt={`${selectedProject.title} — after`}
              />
            )}

            {/* Description & Details */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-wider uppercase text-covenant-navy">
                <ContentText id="components-ProjectGallery-text-11">
                  {"Project Overview"}
                </ContentText>
              </h4>
              <p className="text-sm sm:text-base text-covenant-muted leading-relaxed font-light">
                <ContentText id="components-ProjectGallery-text-12">
                  {selectedProject.description}
                </ContentText>
              </p>

              {/* Highlights List */}
              {selectedProject.highlights && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-covenant-navy mb-3">
                    <ContentText id="components-ProjectGallery-text-13">
                      {"Key Craftsmanship Highlights"}
                    </ContentText>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-covenant-charcoal bg-covenant-offwhite p-2.5 rounded-lg border border-covenant-border/60"
                      >
                        <Check className="w-4 h-4 text-covenant-gold shrink-0" />
                        <span>
                          <ContentText id="components-ProjectGallery-text-14">
                            {h}
                          </ContentText>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-covenant-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-covenant-muted text-center sm:text-left">
                <ContentText id="components-ProjectGallery-text-15">
                  {"Want a similar transformation for your home?"}
                </ContentText>
              </div>
              <ContentAnchor
                cmsId="components-ProjectGallery-link-2"
                href={COMPANY_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-covenant-navy hover:bg-covenant-navy-light text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg shadow-sm transition-colors border border-covenant-gold/40"
              >
                <Phone className="w-3.5 h-3.5 text-covenant-gold" />
                <span>
                  <ContentText id="components-ProjectGallery-text-16">
                    {"Call "}
                  </ContentText>
                  <ContentText id="components-ProjectGallery-text-17">
                    {COMPANY_INFO.phoneDisplay}
                  </ContentText>
                </span>
              </ContentAnchor>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
