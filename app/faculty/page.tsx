import { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { faculty } from "@/lib/data"
import { Mail, Phone, BookOpen, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description: "Meet the distinguished faculty and staff of the Department of Mechatronics at SRMIST.",
}

export default function FacultyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Faculty & Staff Directory"
          subtitle="Our team of experienced educators and researchers dedicated to excellence in mechatronics"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Faculty", href: "/faculty" },
          ]}
        />

        <Section>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member) => (
              <div
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-4 p-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                        <User className="h-8 w-8" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{member.designation}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{member.qualification}</p>
                  </div>
                </div>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Specialization</p>
                  <p className="mt-1 text-sm text-foreground">{member.specialization}</p>
                </div>
                <div className="border-t border-border px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {member.phone}
                    </a>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5" />
                      {member.publications} publications
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Staff Section */}
        <Section className="bg-secondary" title="Administrative & Technical Staff" subtitle="Support team that keeps the department running smoothly">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Mr. S. Ramesh", role: "Lab Technician (Robotics Lab)", phone: "+91-44-2745-5520" },
              { name: "Ms. J. Bharathi", role: "Administrative Assistant", phone: "+91-44-2745-5521" },
              { name: "Mr. K. Venkatesh", role: "Lab Technician (Embedded Systems)", phone: "+91-44-2745-5522" },
              { name: "Ms. R. Preethi", role: "Department Coordinator", phone: "+91-44-2745-5523" },
            ].map((staff) => (
              <div key={staff.name} className="rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <User className="h-5 w-5" />
                </div>
                <h4 className="mt-3 font-semibold text-foreground">{staff.name}</h4>
                <p className="mt-0.5 text-sm text-muted-foreground">{staff.role}</p>
                <a href={`tel:${staff.phone}`} className="mt-2 flex items-center gap-1.5 text-xs text-primary hover:underline">
                  <Phone className="h-3 w-3" />
                  {staff.phone}
                </a>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
