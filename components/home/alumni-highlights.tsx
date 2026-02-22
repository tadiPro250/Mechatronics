import Link from "next/link"
import { Section } from "@/components/section"
import { alumni, placements } from "@/lib/data"
import { ArrowRight, Briefcase, Building2 } from "lucide-react"

export function AlumniHighlights() {
  return (
    <Section title="Alumni & Industry Collaborations" subtitle="Our graduates work at top companies worldwide. Strong industry partnerships drive innovation.">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Alumni */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <Briefcase className="h-5 w-5 text-primary" />
            Notable Alumni
          </h3>
          <div className="flex flex-col gap-3">
            {alumni.map((alum, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-3.5 shadow-sm"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{alum.name}</p>
                  <p className="text-xs text-muted-foreground">{alum.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-primary">{alum.company}</p>
                  <p className="text-xs text-muted-foreground">Batch of {alum.batch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Recruiters */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <Building2 className="h-5 w-5 text-primary" />
            Top Recruiters
          </h3>
          <div className="flex flex-wrap gap-2">
            {placements.topRecruiters.map((company) => (
              <span
                key={company}
                className="rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm"
              >
                {company}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <Link href="/alumni" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Meet our alumni <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/placements" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Placement details <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
