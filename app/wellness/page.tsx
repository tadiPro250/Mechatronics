"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { ShieldCheck, Heart, MessageSquare, Phone, AlertTriangle, BookOpen, Send, CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

const supportCategories = [
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Confidential counseling services for stress, anxiety, and emotional well-being. Our certified counselors are available on campus.",
    contact: "counselor@srmist.edu.in",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Ragging Cell",
    description: "Zero tolerance for ragging. Report incidents confidentially. The committee ensures swift action and student safety.",
    contact: "antiragging@srmist.edu.in",
  },
  {
    icon: AlertTriangle,
    title: "Grievance Redressal",
    description: "Academic or administrative grievances can be formally submitted for review by the departmental grievance committee.",
    contact: "grievance.mech@srmist.edu.in",
  },
  {
    icon: MessageSquare,
    title: "General Feedback",
    description: "Share suggestions to improve department facilities, teaching quality, or student services. All feedback is reviewed monthly.",
    contact: "feedback.mech@srmist.edu.in",
  },
]

const faqs = [
  {
    q: "Is the grievance submission anonymous?",
    a: "Yes. You may choose to submit your grievance anonymously. However, providing your name helps us follow up directly with you.",
  },
  {
    q: "How long does it take to address a grievance?",
    a: "The committee acknowledges all submissions within 48 hours and aims to resolve issues within 7-14 working days depending on complexity.",
  },
  {
    q: "Can I reach out for mental health support without anyone knowing?",
    a: "Absolutely. All counseling sessions are 100% confidential and nothing is shared with faculty or administration without your consent.",
  },
  {
    q: "Who is on the Wellness Committee?",
    a: "The committee includes the department wellness coordinator, a faculty advisor, a certified counselor, and two elected student representatives.",
  },
]

export default function WellnessPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", category: "", message: "", anonymous: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    toast.success("Your submission has been received. We will review it promptly.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Wellness & Grievance Forum"
          subtitle="A safe space for support, feedback, and well-being"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Wellness Forum", href: "/wellness" },
          ]}
        />

        {/* Support Categories */}
        <Section title="Support Services" subtitle="We care about your well-being. Reach out through any of our support channels.">
          <div className="grid gap-6 md:grid-cols-2">
            {supportCategories.map((cat) => (
              <div key={cat.title} className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{cat.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                    <p className="mt-2 text-sm font-medium text-primary">{cat.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Emergency Contact */}
        <Section className="bg-secondary">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-destructive/10 p-8 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-destructive/20">
              <Phone className="h-8 w-8 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Emergency Helpline
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                If you or someone you know is in immediate danger or needs urgent help, call our 24/7 helpline.
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-destructive">1800-XXX-XXXX</p>
              <p className="text-xs text-muted-foreground">Toll Free - Available 24/7</p>
            </div>
          </div>
        </Section>

        {/* Grievance Submission Form */}
        <Section title="Submit a Grievance or Feedback" subtitle="Your voice matters. All submissions are handled with utmost confidentiality.">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Submission Received
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. Our wellness committee will review your submission and respond within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: "", email: "", category: "", message: "", anonymous: false })
                  }}
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                    className="h-4 w-4 rounded border-input accent-primary"
                  />
                  <label htmlFor="anonymous" className="text-sm text-muted-foreground">Submit anonymously</label>
                </div>
                {!formData.anonymous && (
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="wname" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                      <input
                        id="wname"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="wemail" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                      <input
                        id="wemail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="your.email@srmist.edu.in"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="wcategory" className="mb-1.5 block text-sm font-medium text-foreground">Category *</label>
                  <select
                    id="wcategory"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a category</option>
                    <option value="mental-health">Mental Health Support</option>
                    <option value="ragging">Anti-Ragging Report</option>
                    <option value="academic-grievance">Academic Grievance</option>
                    <option value="facility">Facility / Infrastructure</option>
                    <option value="feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="wmessage" className="mb-1.5 block text-sm font-medium text-foreground">Your Message *</label>
                  <textarea
                    id="wmessage"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Describe your concern, suggestion, or feedback..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Submit
                </button>
              </form>
            )}
          </div>
        </Section>

        {/* FAQs */}
        <Section className="bg-secondary" title="Frequently Asked Questions">
          <div className="mx-auto max-w-2xl flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-secondary/50"
                >
                  <span className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 text-muted-foreground">{openFaq === i ? "-" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
