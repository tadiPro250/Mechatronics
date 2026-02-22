import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { achievements } from "@/lib/data"
import { Trophy, Medal, Star, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Achievements & Awards",
  description: "Awards, honors, and achievements of students and faculty at the Department of Mechatronics, SRMIST.",
}

const categoryIcons: Record<string, typeof Trophy> = {
  Competition: Medal,
  Research: Star,
  Innovation: Award,
  Academic: Trophy,
}

export default function AchievementsPage() {
  const grouped: Record<string, typeof achievements> = {}
  achievements.forEach((a) => {
    if (!grouped[a.year]) grouped[a.year] = []
    grouped[a.year].push(a)
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Achievements & Awards"
          subtitle="Recognitions and accolades earned by our students and faculty"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Students", href: "/students/achievements" },
            { name: "Achievements", href: "/students/achievements" },
          ]}
        />

        <Section>
          {/* Stats Banner */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "National Awards", value: "50+", icon: Trophy },
              { label: "International Awards", value: "30+", icon: Medal },
              { label: "Patents Filed", value: "12", icon: Star },
              { label: "Research Grants", value: "Rs. 4+ Cr", icon: Award },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                <stat.icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Year-wise achievements */}
          {Object.entries(grouped)
            .sort((a, b) => b[0].localeCompare(a[0]))
            .map(([year, items]) => (
              <div key={year} className="mb-10">
                <h3 className="mb-4 text-lg font-bold text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {year}
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((item) => {
                    const Icon = categoryIcons[item.category] || Trophy
                    return (
                      <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                          <span className="mt-1 inline-block rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
