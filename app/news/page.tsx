import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { news } from "@/lib/data"
import { Calendar, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news and updates from the Department of Mechatronics, SRMIST.",
}

const additionalNews = [
  {
    id: 5,
    title: "Department Hosts International Conference on Smart Manufacturing",
    date: "2025-11-15",
    excerpt: "Over 200 researchers from 15 countries participated in the 3-day conference on smart manufacturing, Industry 4.0, and digital twins hosted by the department.",
    category: "Conference",
  },
  {
    id: 6,
    title: "Five Faculty Members Receive Research Excellence Awards",
    date: "2025-10-28",
    excerpt: "Dr. R. Karthikeyan, Dr. S. Priya, Dr. K. Lakshmi, Dr. V. Senthil Kumar, and Dr. A. Rajesh were recognized for their contributions to research and innovation.",
    category: "Awards",
  },
  {
    id: 7,
    title: "New Partnership with ISRO for Satellite Sub-Systems Research",
    date: "2025-09-15",
    excerpt: "The department has entered into a research collaboration with ISRO to develop lightweight mechatronic sub-systems for future satellite missions.",
    category: "Research",
  },
  {
    id: 8,
    title: "Students Develop Low-Cost Ventilator Prototype",
    date: "2025-08-20",
    excerpt: "A team of final-year students has developed a cost-effective ventilator prototype that received appreciation from local healthcare organizations.",
    category: "Innovation",
  },
]

const allNews = [
  ...news.map(n => ({ ...n, category: "Department" })),
  ...additionalNews,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric",
  })
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="News & Updates"
          subtitle="Stay informed about the latest happenings in the Department of Mechatronics"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "News", href: "/news" },
          ]}
        />

        {/* Featured News */}
        <Section>
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center px-8">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Featured</span>
                    <h2 className="mt-4 text-balance text-2xl font-bold text-foreground md:text-3xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {allNews[0].title}
                    </h2>
                    <p className="mt-3 mx-auto max-w-lg text-sm text-muted-foreground">{allNews[0].excerpt}</p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{formatDate(allNews[0].date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-2">
              {allNews.slice(1, 4).map((item) => (
                <div key={item.id} className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      <Tag className="h-3 w-3" />
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* All News */}
        <Section className="bg-secondary" title="All News" subtitle="Browse all news and updates from the department">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allNews.slice(4).map((item) => (
              <article key={item.id} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(item.date)}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-foreground leading-snug" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline cursor-pointer">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Newsletter */}
        <Section title="Subscribe to Updates" subtitle="Get the latest news delivered to your inbox">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">We send updates monthly. No spam, unsubscribe anytime.</p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
