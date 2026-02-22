"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { siteConfig } from "@/lib/data"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thank you! Your message has been sent. We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with the Department of Mechatronics"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />

        <Section>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Send us a Message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form below and we will respond within 2-3 business days.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">Subject *</label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academics">Academic Query</option>
                      <option value="placements">Placement Information</option>
                      <option value="research">Research Collaboration</option>
                      <option value="events">Events & Workshops</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Contact Information
                </h3>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Address</h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">Department of Mechatronics Engineering</p>
                      <p className="text-sm text-muted-foreground">{siteConfig.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Phone</h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">{siteConfig.phone}</p>
                      <p className="text-sm text-muted-foreground">+91-44-2745-5500 (College)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Email</h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">{siteConfig.email}</p>
                      <p className="text-sm text-muted-foreground">hod.mech@srmist.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Office Hours</h4>
                      <p className="mt-0.5 text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Map */}
        <Section className="bg-secondary">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={siteConfig.mapUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SRM Institute of Science and Technology Map"
            />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
