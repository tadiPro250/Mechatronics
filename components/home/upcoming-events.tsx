import Link from "next/link"
import { Section } from "@/components/section"
import { events } from "@/lib/data"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export function UpcomingEvents() {
  return (
    <Section className="bg-secondary/50" title="Upcoming Events" subtitle="Workshops, seminars, competitions, and more.">
      <div className="grid gap-5 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {new Date(event.date).getDate()}
              </span>
              <span className="text-xs uppercase">
                {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded bg-accent/10 px-1.5 py-0.5 text-xs font-medium text-accent">
                  {event.type}
                </span>
              </div>
              <h3 className="mt-1 text-sm font-bold text-foreground">{event.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {event.venue}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          View all events
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
