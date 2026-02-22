"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { downloads } from "@/lib/data"
import { Download, FileText, Search, Filter } from "lucide-react"

const categories = ["All", "Syllabus", "Calendar", "Forms", "Lab Manual", "Papers", "Handbook", "Brochure"]

function getCategoryColor(cat: string) {
  const map: Record<string, string> = {
    Syllabus: "bg-blue-100 text-blue-700",
    Calendar: "bg-green-100 text-green-700",
    Forms: "bg-orange-100 text-orange-700",
    "Lab Manual": "bg-purple-100 text-purple-700",
    Papers: "bg-red-100 text-red-700",
    Handbook: "bg-teal-100 text-teal-700",
    Brochure: "bg-pink-100 text-pink-700",
  }
  return map[cat] || "bg-secondary text-muted-foreground"
}

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = downloads.filter((d) => {
    const matchesCategory = activeCategory === "All" || d.category === activeCategory
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Downloads"
          subtitle="Access syllabi, forms, lab manuals, previous papers, and other important documents"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Downloads", href: "/downloads" },
          ]}
        />

        <Section>
          {/* Search and Filter */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc, i) => (
              <a
                key={i}
                href={doc.href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {doc.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${getCategoryColor(doc.category)}`}>
                      {doc.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{doc.size}</span>
                  </div>
                </div>
                <Download className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-8 flex flex-col items-center gap-3 py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground/40" />
              <p className="text-lg font-semibold text-foreground">No documents found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </Section>

        {/* Important Note */}
        <Section className="bg-secondary">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center">
            <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Need a Document?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you cannot find the document you are looking for, please contact the department office or email us at{" "}
              <span className="font-medium text-primary">mechatronics@srmist.edu.in</span>. We will be happy to assist you.
            </p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
