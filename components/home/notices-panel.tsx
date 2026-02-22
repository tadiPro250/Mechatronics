import Link from "next/link"
import { Section } from "@/components/section"
import { notices } from "@/lib/data"
import { Bell, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function NoticesPanel() {
  return (
    <Section className="bg-secondary/50" title="Notices & Announcements" subtitle="Stay updated with the latest department notices and announcements.">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-primary/5 px-5 py-3">
            <Bell className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Latest Updates</span>
            <span className="ml-auto rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {notices.length} new
            </span>
          </div>
          <ul className="divide-y divide-border" role="list">
            {notices.map((notice) => (
              <li key={notice.id}>
                <Link
                  href="#"
                  className="flex items-start gap-4 px-5 py-3.5 transition-colors hover:bg-secondary/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {notice.important && (
                        <span className="rounded bg-destructive/10 px-1.5 py-0.5 text-xs font-medium text-destructive">
                          Important
                        </span>
                      )}
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                        {notice.category}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">{notice.title}</p>
                  </div>
                  <time className="shrink-0 text-xs text-muted-foreground">
                    {new Date(notice.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border px-5 py-3 text-center">
            <Link href="/news" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View all notices
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
