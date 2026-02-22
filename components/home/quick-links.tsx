import Link from "next/link"
import { Section } from "@/components/section"
import { quickLinks } from "@/lib/data"
import { BookOpen, Clock, Users, FileText, Lightbulb, Download } from "lucide-react"

const iconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  Clock,
  Users,
  FileText,
  Lightbulb,
  Download,
}

export function QuickLinksSection() {
  return (
    <Section title="Quick Links" subtitle="Access frequently used resources and pages.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {quickLinks.map((link) => {
          const Icon = iconMap[link.icon] || BookOpen
          return (
            <Link
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </Section>
  )
}
