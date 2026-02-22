import Link from "next/link"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/data"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export function ContactSummary() {
  return (
    <Section className="bg-secondary">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2
            className="text-2xl font-bold tracking-tight md:text-3xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get in Touch
          </h2>
          <p className="mt-3 text-muted-foreground">
            Have questions about admissions, research collaborations, or campus visits?
            We would love to hear from you.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">Address</div>
                <div className="text-sm text-muted-foreground">{siteConfig.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">Phone</div>
                <div className="text-sm text-muted-foreground">{siteConfig.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">{siteConfig.email}</div>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Visit Contact Page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl">
          <iframe
            src={siteConfig.mapUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SRM Institute of Science and Technology Location"
            className="rounded-xl"
          />
        </div>
      </div>
    </Section>
  )
}
