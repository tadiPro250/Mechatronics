import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import Link from "next/link"
import { BookOpen, Users, Lightbulb, Trophy, FileText, Download, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Students",
  description: "Student resources, clubs, projects, achievements, and more at the Department of Mechatronics, SRMIST.",
}

const studentSections = [
  {
    title: "Academic Resources",
    description: "Access lecture notes, study materials, previous year papers, and important academic forms.",
    href: "/students/resources",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Clubs & Activities",
    description: "Join student clubs like Robo Club, IoT Hub, AI/ML Club, and participate in exciting activities.",
    href: "/students/clubs",
    icon: Users,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Student Projects",
    description: "Explore capstone projects, research projects, and innovative solutions built by students.",
    href: "/students/projects",
    icon: Lightbulb,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Achievements & Awards",
    description: "Celebrate our students' wins in national and international competitions and research awards.",
    href: "/students/achievements",
    icon: Trophy,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Downloads",
    description: "Download syllabi, timetables, lab manuals, handbooks, and application forms.",
    href: "/downloads",
    icon: Download,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Placements & Internships",
    description: "Explore placement statistics, top recruiters, internship opportunities, and career guidance.",
    href: "/placements",
    icon: Briefcase,
    color: "bg-teal-100 text-teal-700",
  },
  {
    title: "Wellness Forum",
    description: "Access mental health support, grievance redressal, and provide feedback anonymously.",
    href: "/wellness",
    icon: FileText,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Alumni Network",
    description: "Connect with our alumni community and learn from their industry experience.",
    href: "/alumni",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-700",
  },
]

export default function StudentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Student Corner"
          subtitle="Everything you need for a successful academic journey in Mechatronics"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Students", href: "/students" },
          ]}
        />

        <Section title="Explore" subtitle="Quick access to all student-related resources and services">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {studentSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${section.color} transition-all group-hover:scale-110`}>
                  <section.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {section.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Important Links */}
        <Section className="bg-primary" dark title="Important Quick Links">
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {[
              { label: "Academic Calendar 2025-26", href: "/academics#calendar" },
              { label: "Examination Schedule", href: "/academics#timetable" },
              { label: "Internship Application Form", href: "/downloads" },
              { label: "No Dues Form", href: "/downloads" },
              { label: "Student Handbook", href: "/downloads" },
              { label: "Contact Department Office", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <FileText className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                {link.label}
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
