import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { alumni } from "@/lib/data"
import { Briefcase, GraduationCap, MapPin, Users, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alumni",
  description: "Connect with our distinguished alumni network from the Department of Mechatronics, SRMIST.",
}

const alumniStats = [
  { label: "Alumni Network", value: "1,500+", icon: Users },
  { label: "Countries", value: "18", icon: MapPin },
  { label: "Top Companies", value: "60+", icon: Briefcase },
  { label: "Entrepreneurs", value: "35+", icon: GraduationCap },
]

const testimonials = [
  {
    name: "Ananya Iyer",
    batch: "2019",
    role: "Automation Engineer at Tesla, USA",
    quote: "The mechatronics department at SRM gave me the perfect blend of theory and hands-on experience. The robotics lab and industry workshops were instrumental in landing my role at Tesla.",
  },
  {
    name: "Aditya Menon",
    batch: "2018",
    role: "Senior R&D Engineer at ABB Robotics, Sweden",
    quote: "My professors encouraged research from the very first year. The Ph.D. scholars and faculty mentorship shaped my career in industrial robotics and helped me contribute to cutting-edge automation systems.",
  },
  {
    name: "Meera Krishnan",
    batch: "2021",
    role: "CEO - RoboKraft Technologies",
    quote: "The entrepreneurial culture and innovation labs at SRM gave me the confidence to start my own robotics startup. The alumni network continues to be a massive support system.",
  },
]

export default function AlumniPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Alumni Network"
          subtitle="Our graduates are leaders in industry, research, and entrepreneurship worldwide"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Alumni", href: "/alumni" },
          ]}
        />

        {/* Stats */}
        <Section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {alumniStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Notable Alumni */}
        <Section className="bg-secondary" title="Notable Alumni" subtitle="Our graduates are making an impact across the globe">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {alumni.map((alum) => (
              <div key={alum.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-lg font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {alum.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{alum.name}</h3>
                  <p className="text-sm text-primary font-medium">{alum.role}</p>
                  <p className="text-sm text-muted-foreground">{alum.company}</p>
                </div>
                <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Batch of {alum.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section title="Alumni Testimonials" subtitle="Hear from our graduates about their experiences">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                  {`"${t.quote}"`}
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} | Batch {t.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Stay Connected */}
        <Section className="bg-primary" dark title="Stay Connected" subtitle="Join our alumni network and give back to the community">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { title: "Alumni Portal", desc: "Register on our alumni portal to stay updated with department events and connect with fellow graduates.", link: "#" },
              { title: "Mentorship Program", desc: "Guide current students through career advice, internship opportunities, and industry insights.", link: "#" },
              { title: "Contribute", desc: "Support the department through guest lectures, lab sponsorships, scholarships, or project mentoring.", link: "#" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <h3 className="font-bold text-primary-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.desc}</p>
                <a href={item.link} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground hover:underline">
                  Learn More <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
