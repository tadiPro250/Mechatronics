import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { placements } from "@/lib/data"
import { TrendingUp, Building2, Award, Users, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Placements & Internships",
  description: "Placement statistics, top recruiters, and internship information for the Department of Mechatronics at SRMIST.",
}

export default function PlacementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Placements & Internships"
          subtitle="95% placement rate with top recruiters from across the globe"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Placements", href: "/placements" },
          ]}
        />

        {/* Stats */}
        <Section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: TrendingUp, label: "Average Package", value: placements.stats.averagePackage, color: "bg-primary/10 text-primary" },
              { icon: Award, label: "Highest Package", value: placements.stats.highestPackage, color: "bg-accent/10 text-accent" },
              { icon: Users, label: "Placement Rate", value: placements.stats.placementRate, color: "bg-primary/10 text-primary" },
              { icon: Building2, label: "Companies Visited", value: String(placements.stats.companiesVisited), color: "bg-accent/10 text-accent" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-foreground md:text-3xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Year-wise stats */}
        <Section className="bg-secondary" title="Year-wise Placement Statistics">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="rounded-tl-lg px-4 py-3 text-left text-sm font-semibold">Year</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Students Placed</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Total Eligible</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Highest Package</th>
                  <th className="rounded-tr-lg px-4 py-3 text-left text-sm font-semibold">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {placements.yearWise.map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                    <td className="px-4 py-3 text-sm font-bold text-primary">{row.year}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{row.placed}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.total}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{row.highest}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{row.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Top Recruiters */}
        <Section title="Top Recruiters" subtitle="Leading companies that recruit from our department">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-5 lg:grid-cols-5">
            {placements.topRecruiters.map((company) => (
              <div key={company} className="flex items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Internship Info */}
        <Section className="bg-primary text-primary-foreground" dark title="Internship Program" subtitle="Gain industry experience through our structured internship program">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Briefcase, title: "Summer Internships", desc: "6-8 week internships with partner companies during summer break. Apply through the placement cell by February each year." },
              { icon: Building2, title: "Semester Internships", desc: "Semester 7 includes a mandatory industry internship component. Students are placed at leading companies for real-world experience." },
              { icon: Award, title: "Research Internships", desc: "Opportunities for research internships at IITs, IISc, DRDO, ISRO, and international universities through our faculty network." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <item.icon className="mb-3 h-8 w-8 text-accent" />
                <h4 className="font-bold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
