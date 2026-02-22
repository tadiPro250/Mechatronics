import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { downloads } from "@/lib/data"
import { FileText, Download, BookOpen, ClipboardList, Newspaper, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Student Resources",
  description: "Notes, forms, previous year papers, and academic resources for Mechatronics students at SRMIST.",
}

const resourceCategories = [
  {
    title: "Lecture Notes & Study Materials",
    icon: BookOpen,
    items: [
      { name: "Control Systems - Unit 1 to 5 Notes", format: "PDF", size: "12 MB" },
      { name: "Robotics Engineering - Complete Notes", format: "PDF", size: "15 MB" },
      { name: "Embedded Systems - ARM Architecture Notes", format: "PDF", size: "8 MB" },
      { name: "PLC & SCADA - Ladder Logic Programming", format: "PDF", size: "6 MB" },
      { name: "Machine Vision - Image Processing Fundamentals", format: "PDF", size: "10 MB" },
    ],
  },
  {
    title: "Previous Year Question Papers",
    icon: ClipboardList,
    items: [
      { name: "Semester 5 - All Subjects (2024-25)", format: "ZIP", size: "8.5 MB" },
      { name: "Semester 6 - All Subjects (2024-25)", format: "ZIP", size: "7.2 MB" },
      { name: "Semester 5 - All Subjects (2023-24)", format: "ZIP", size: "7.8 MB" },
      { name: "Semester 6 - All Subjects (2023-24)", format: "ZIP", size: "6.9 MB" },
    ],
  },
  {
    title: "Forms & Applications",
    icon: FileText,
    items: [
      { name: "Admission Application Form", format: "PDF", size: "320 KB" },
      { name: "No Dues Form", format: "PDF", size: "120 KB" },
      { name: "Internship Application Form", format: "PDF", size: "150 KB" },
      { name: "Leave Application Form", format: "PDF", size: "100 KB" },
      { name: "Bonafide Certificate Request", format: "PDF", size: "90 KB" },
    ],
  },
]

const onlineResources = [
  { name: "NPTEL Courses", url: "https://nptel.ac.in", desc: "Free online courses from IITs and IISc" },
  { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", desc: "Free lecture notes and assignments from MIT" },
  { name: "Coursera", url: "https://coursera.org", desc: "Online courses from top universities" },
  { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org", desc: "Research papers and conference proceedings" },
  { name: "SRM E-Library", url: "https://www.srmist.edu.in/library", desc: "Access to journals, e-books, and databases" },
]

export default function StudentResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Student Resources"
          subtitle="Notes, forms, previous papers, and other academic resources"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Students", href: "/students/resources" },
            { name: "Resources", href: "/students/resources" },
          ]}
        />

        {/* Resource Categories */}
        {resourceCategories.map((cat, idx) => (
          <Section key={cat.title} className={idx % 2 === 1 ? "bg-secondary" : ""} title={cat.title}>
            <div className="flex flex-col gap-3">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.format} - {item.size}</p>
                    </div>
                  </div>
                  <a href="#" className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </Section>
        ))}

        {/* Online Resources */}
        <Section className="bg-primary text-primary-foreground" dark title="Online Learning Resources" subtitle="Recommended platforms for self-paced learning">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {onlineResources.map((res) => (
              <a key={res.name} href={res.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10">
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-accent" />
                  <h4 className="text-sm font-bold">{res.name}</h4>
                </div>
                <p className="mt-2 text-xs text-primary-foreground/70">{res.desc}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
