import { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { Target, Eye, BookOpen, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "About the Department",
  description: "Learn about the Department of Mechatronics at SRM Institute of Science and Technology - our vision, mission, history, and leadership.",
}

const milestones = [
  { year: "2004", event: "Department of Mechatronics established with an intake of 60 students" },
  { year: "2008", event: "M.Tech program launched; first batch of UG students graduate" },
  { year: "2010", event: "Robotics Lab inaugurated with ABB and KUKA collaborations" },
  { year: "2013", event: "Ph.D. program introduced; first international MoU signed" },
  { year: "2015", event: "Accredited by NBA; 100% placement achieved for the first time" },
  { year: "2018", event: "Centre of Excellence in Industrial IoT established with Siemens" },
  { year: "2020", event: "Online lab simulation platform launched during COVID-19" },
  { year: "2022", event: "Best Department Award at SRM University convocation" },
  { year: "2024", event: "Rs. 2 Crore DRDO research grant; new AI-Robotics specialization announced" },
  { year: "2026", event: "12+ labs, 20+ faculty, 250+ publications, 40+ industry partnerships" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="About the Department"
          subtitle="Shaping the future of intelligent systems since 2004"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />

        {/* Vision & Mission */}
        <Section id="vision-mission">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To be a globally recognized center of excellence in mechatronics engineering education and research,
                nurturing innovators who design intelligent systems that transform industries and improve lives,
                while maintaining the highest standards of academic integrity and social responsibility.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>Our Mission</h3>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>Provide industry-aligned curriculum integrating mechanical, electronics, computing, and control engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>Foster cutting-edge research in robotics, AI, IoT, and smart manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>Build strong industry partnerships for experiential learning and placements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>Develop well-rounded engineers with leadership skills and ethical values</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* HOD Message */}
        <Section id="hod-message" className="bg-secondary">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="flex justify-center md:col-span-1">
              <div className="relative h-64 w-52 overflow-hidden rounded-2xl">
                <Image
                  src="/images/hod-portrait.jpg"
                  alt="Dr. R. Karthikeyan, Head of Department"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Message from the Head of Department
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">Dr. R. Karthikeyan</p>
              <p className="mt-1 text-xs text-muted-foreground">Professor & Head, Department of Mechatronics</p>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic leading-relaxed text-muted-foreground">
                {'"Welcome to the Department of Mechatronics at SRM Institute of Science and Technology. Our department stands at the intersection of mechanical engineering, electronics, computer science, and intelligent control — the very core of Industry 4.0. We are committed to providing our students with a holistic education that combines rigorous academic training with hands-on experience in state-of-the-art laboratories. Our graduates are equipped to lead innovation in robotics, automation, and smart systems across the globe. I invite you to explore our programs, research, and the vibrant community that makes our department truly exceptional."'}
              </blockquote>
            </div>
          </div>
        </Section>

        {/* History Timeline */}
        <Section id="history" title="Our Journey" subtitle="Key milestones in the growth of the department">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-px" />
            <div className="flex flex-col gap-8">
              {milestones.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden flex-1 md:block" />
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-xs font-bold text-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-card p-4 md:max-w-md">
                    <div className="text-sm font-bold text-primary">{item.year}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section className="bg-primary text-primary-foreground" dark>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: BookOpen, title: "Academic Excellence", desc: "NBA accredited programs with industry-aligned curriculum" },
              { icon: Target, title: "Research Innovation", desc: "250+ publications in reputed international journals" },
              { icon: Calendar, title: "Industry Connect", desc: "40+ partnerships with Fortune 500 companies" },
              { icon: Eye, title: "Student Success", desc: "95% placement rate with top recruiters globally" },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <v.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold">{v.title}</h4>
                <p className="mt-1 text-sm text-primary-foreground/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
