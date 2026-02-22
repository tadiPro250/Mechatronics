import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { projects } from "@/lib/data"
import { Lightbulb, Users, Calendar, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Projects",
  description: "Student project gallery showcasing innovative mechatronics projects at SRMIST.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Projects Gallery"
          subtitle="Innovative projects by our students solving real-world problems"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Students", href: "/students/projects" },
            { name: "Projects", href: "/students/projects" },
          ]}
        />

        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="bg-primary/5 p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      <Tag className="h-3 w-3" /> {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">{project.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Project Guidelines */}
        <Section className="bg-secondary" title="Project Guidelines" subtitle="Information for students undertaking final year and mini projects">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Mini Project (Sem 5-6)", desc: "Teams of 2-3 students work on a semester-long project applying concepts from robotics, IoT, or automation. Evaluated through demonstration and report." },
              { title: "Final Year Project (Sem 7-8)", desc: "Teams of 3-4 students undertake a significant engineering project with faculty guidance. Must include design, implementation, testing, and documentation." },
              { title: "Industry-Sponsored Projects", desc: "Selected students work on projects sponsored by partner companies. Includes mentoring from industry experts and potential for real-world deployment." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
