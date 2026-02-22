import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { events } from "@/lib/data"
import { Calendar, MapPin, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Events, Workshops & Seminars",
  description: "Upcoming and past events, workshops, and seminars at the Department of Mechatronics, SRMIST.",
}

const pastEvents = [
  { title: "Guest Lecture: AI in Robotics by Dr. John Smith, MIT", date: "Feb 10, 2026", type: "Lecture" },
  { title: "National Level Workshop on 3D Printing", date: "Jan 20, 2026", type: "Workshop" },
  { title: "Alumni Meet 2025", date: "Dec 15, 2025", type: "Alumni" },
  { title: "Industrial Visit to Caterpillar India", date: "Nov 22, 2025", type: "Visit" },
  { title: "Robotics Competition - Robo Wars", date: "Oct 18, 2025", type: "Competition" },
  { title: "Workshop on IoT using Raspberry Pi", date: "Sep 14, 2025", type: "Workshop" },
]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Events, Workshops & Seminars"
          subtitle="Stay updated with our latest academic and extracurricular activities"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Events", href: "/events" },
          ]}
        />

        {/* Upcoming Events */}
        <Section title="Upcoming Events" subtitle="Events and activities coming up in the near future">
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <div key={event.id} className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
                <div className="flex items-center gap-2 bg-primary px-5 py-2.5 text-primary-foreground">
                  <Tag className="h-3.5 w-3.5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">{event.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {event.venue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Past Events */}
        <Section className="bg-secondary" title="Past Events" subtitle="A look back at recent events and activities">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div key={event.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{event.title}</h4>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {event.date}
                    </span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">{event.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
