"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { Search as SearchIcon, ArrowRight, FileText, Users, BookOpen, FlaskConical, Calendar, Download } from "lucide-react"
import { faculty, laboratories, programs, events, downloads, news, clubs, projects, achievements, notices } from "@/lib/data"
import { Suspense } from "react"

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
  icon: React.ComponentType<{ className?: string }>
}

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = []

  faculty.forEach((f) => {
    results.push({
      title: f.name,
      description: `${f.designation} - ${f.specialization}`,
      href: "/faculty",
      category: "Faculty",
      icon: Users,
    })
  })

  laboratories.forEach((l) => {
    results.push({
      title: l.name,
      description: l.description,
      href: `/laboratories#${l.id}`,
      category: "Laboratory",
      icon: FlaskConical,
    })
  })

  programs.forEach((p) => {
    results.push({
      title: p.name,
      description: p.description,
      href: "/academics#programs",
      category: "Program",
      icon: BookOpen,
    })
  })

  events.forEach((e) => {
    results.push({
      title: e.title,
      description: e.description,
      href: "/events",
      category: "Event",
      icon: Calendar,
    })
  })

  downloads.forEach((d) => {
    results.push({
      title: d.name,
      description: `${d.category} - ${d.size}`,
      href: "/downloads",
      category: "Download",
      icon: Download,
    })
  })

  news.forEach((n) => {
    results.push({
      title: n.title,
      description: n.excerpt,
      href: "/news",
      category: "News",
      icon: FileText,
    })
  })

  clubs.forEach((c) => {
    results.push({
      title: c.name,
      description: c.description,
      href: "/students/clubs",
      category: "Club",
      icon: Users,
    })
  })

  projects.forEach((p) => {
    results.push({
      title: p.title,
      description: p.description,
      href: "/students/projects",
      category: "Project",
      icon: FlaskConical,
    })
  })

  achievements.forEach((a) => {
    results.push({
      title: a.title,
      description: `${a.category} - ${a.year}`,
      href: "/students/achievements",
      category: "Achievement",
      icon: FileText,
    })
  })

  notices.forEach((n) => {
    results.push({
      title: n.title,
      description: `${n.category} - ${n.date}`,
      href: "/",
      category: "Notice",
      icon: FileText,
    })
  })

  const pages = [
    { title: "About the Department", description: "Vision, mission, history, and HOD message", href: "/about", category: "Page" },
    { title: "Faculty & Staff Directory", description: "Faculty profiles, specializations, and contacts", href: "/faculty", category: "Page" },
    { title: "Academic Programs", description: "B.Tech, M.Tech, and Ph.D. programs", href: "/academics", category: "Page" },
    { title: "Laboratories", description: "Robotics, PLC, CAD/CAM, embedded systems labs", href: "/laboratories", category: "Page" },
    { title: "Placements & Internships", description: "Placement statistics and top recruiters", href: "/placements", category: "Page" },
    { title: "Research & Publications", description: "Research areas, publications, funded projects", href: "/research", category: "Page" },
    { title: "Events & Workshops", description: "Upcoming and past events, workshops, seminars", href: "/events", category: "Page" },
    { title: "Photo & Video Gallery", description: "Department photos and event captures", href: "/gallery", category: "Page" },
    { title: "Student Resources", description: "Notes, forms, previous year papers", href: "/students/resources", category: "Page" },
    { title: "Student Clubs", description: "Robo Club, IoT Hub, AI/ML Club, Design Club", href: "/students/clubs", category: "Page" },
    { title: "Student Projects", description: "Capstone and research projects", href: "/students/projects", category: "Page" },
    { title: "Achievements & Awards", description: "Competition wins and research awards", href: "/students/achievements", category: "Page" },
    { title: "Alumni Network", description: "Alumni working at top companies worldwide", href: "/alumni", category: "Page" },
    { title: "News & Updates", description: "Latest department news and announcements", href: "/news", category: "Page" },
    { title: "Downloads", description: "Syllabi, forms, lab manuals, papers", href: "/downloads", category: "Page" },
    { title: "Wellness Forum", description: "Mental health, grievance redressal, feedback", href: "/wellness", category: "Page" },
    { title: "Contact Us", description: "Address, phone, email, map, contact form", href: "/contact", category: "Page" },
  ]
  pages.forEach((p) => {
    results.push({ ...p, icon: FileText })
  })

  return results
}

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)

  const searchIndex = useMemo(() => buildSearchIndex(), [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [query, searchIndex])

  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>()
    results.forEach((r) => {
      if (!map.has(r.category)) map.set(r.category, [])
      map.get(r.category)!.push(r)
    })
    return map
  }, [results])

  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for faculty, courses, labs, events, downloads..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-input bg-card py-4 pl-12 pr-4 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              autoFocus
            />
          </div>
          {query.trim() && (
            <p className="mt-3 text-sm text-muted-foreground">
              {results.length} result{results.length !== 1 ? "s" : ""} found for{" "}
              <span className="font-medium text-foreground">&ldquo;{query}&rdquo;</span>
            </p>
          )}
        </div>
      </Section>

      {query.trim() && results.length > 0 && (
        <Section className="bg-secondary">
          <div className="mx-auto max-w-3xl flex flex-col gap-8">
            {Array.from(grouped.entries()).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{category} ({items.length})</h3>
                <div className="flex flex-col gap-2">
                  {items.map((item, i) => (
                    <Link
                      key={`${item.href}-${i}`}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary mt-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {query.trim() && results.length === 0 && (
        <Section className="bg-secondary">
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 py-12 text-center">
            <SearchIcon className="h-12 w-12 text-muted-foreground/40" />
            <p className="text-lg font-semibold text-foreground">No results found</p>
            <p className="text-sm text-muted-foreground">
              Try different keywords or browse through our navigation menu to find what you are looking for.
            </p>
          </div>
        </Section>
      )}

      {!query.trim() && (
        <Section className="bg-secondary">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-center text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Popular Searches
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Syllabus", "Timetable", "Faculty", "Robotics Lab", "Placements", "B.Tech", "Downloads", "Events", "Projects", "Clubs"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Search"
          subtitle="Find anything across the Department of Mechatronics website"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Search", href: "/search" },
          ]}
        />
        <Suspense fallback={<Section><p className="text-center text-muted-foreground">Loading search...</p></Section>}>
          <SearchContent />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
