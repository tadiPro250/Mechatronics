import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { clubs } from "@/lib/data"
import { Users, Star, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Clubs & Activities",
  description: "Student clubs, technical teams, and extracurricular activities at the Department of Mechatronics, SRMIST.",
}

const extracurricular = [
  { name: "Robocon Team", desc: "Represents SRM at ABU Asia-Pacific Robot Contest. Multiple national medals.", type: "Competition Team" },
  { name: "Smart India Hackathon Team", desc: "Annual participation in SIH with consistent top finishes.", type: "Competition Team" },
  { name: "SAE India Club", desc: "Design and build formula-style electric vehicles for SAE competitions.", type: "Technical Club" },
  { name: "IEEE Student Chapter", desc: "Organizes guest lectures, paper presentations, and tech talks.", type: "Professional Body" },
]

export default function ClubsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Student Clubs & Activities"
          subtitle="A vibrant ecosystem of technical clubs, teams, and extracurricular activities"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Students", href: "/students/clubs" },
            { name: "Clubs & Activities", href: "/students/clubs" },
          ]}
        />

        {/* Department Clubs */}
        <Section title="Department Clubs" subtitle="Student-run clubs fostering innovation and hands-on learning">
          <div className="grid gap-6 md:grid-cols-2">
            {clubs.map((club) => (
              <div key={club.name} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {club.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{club.description}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    {club.members} members
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 text-accent" />
                    Lead: {club.lead}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Competition Teams */}
        <Section className="bg-secondary" title="Competition Teams & Professional Bodies">
          <div className="grid gap-4 md:grid-cols-2">
            {extracurricular.map((item) => (
              <div key={item.name} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">{item.type}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* How to Join */}
        <Section title="How to Get Involved">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground">
              All registered students of the Department of Mechatronics are welcome to join any club or activity.
              Club registrations open at the beginning of each academic year. Contact the Student Activity Coordinator
              or visit the department office for more information.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-secondary p-6">
              <h4 className="font-bold text-foreground">Student Activity Coordinator</h4>
              <p className="mt-1 text-sm text-muted-foreground">Dr. A. Rajesh, Assistant Professor</p>
              <p className="mt-0.5 text-sm text-primary">rajesh.a@srmist.edu.in | +91-44-2745-5507</p>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
