import Link from "next/link"
import { Section } from "@/components/section"
import { projects } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function ProjectShowcase() {
  return (
    <Section title="Innovation Showcase" subtitle="Highlights from student-led projects and innovations.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary self-start">
              {project.category}
            </span>
            <h3 className="mt-3 text-sm font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>{project.team}</span>
              <span>{project.year}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/students/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Explore all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
