import { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { laboratories } from "@/lib/data"
import { Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Laboratories",
  description: "State-of-the-art laboratories in the Department of Mechatronics at SRMIST.",
}

export default function LaboratoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Laboratories"
          subtitle="12+ state-of-the-art facilities for hands-on learning and research"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Laboratories", href: "/laboratories" },
          ]}
        />

        <Section>
          <div className="flex flex-col gap-12">
            {laboratories.map((lab, i) => (
              <div
                key={lab.id}
                id={lab.id}
                className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={lab.image}
                      alt={lab.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {lab.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{lab.description}</p>
                  <div className="mt-5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                      <Wrench className="h-4 w-4 text-primary" />
                      Key Equipment
                    </h4>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {lab.equipment.map((eq) => (
                        <li key={eq} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {eq}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="bg-primary text-primary-foreground" dark title="Lab Access & Safety" subtitle="Guidelines for using department laboratories">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Lab Hours", desc: "Monday to Friday: 8:30 AM - 5:00 PM. Extended hours available for research scholars with prior permission from the lab in-charge." },
              { title: "Safety Guidelines", desc: "All students must wear safety equipment. No food or beverages inside labs. Follow standard operating procedures for all equipment." },
              { title: "Booking & Access", desc: "Lab slots can be booked through the department coordinator. Research scholars may apply for 24/7 access with HOD approval." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <h4 className="font-bold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
