import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"
import { siteConfig, navigation } from "@/lib/data"

export function SiteFooter() {
  const footerLinks = [
    {
      title: "Academics",
      links: [
        { name: "Programs", href: "/academics#programs" },
        { name: "Syllabus", href: "/academics#syllabus" },
        { name: "Timetable", href: "/academics#timetable" },
        { name: "Faculty", href: "/faculty" },
        { name: "Laboratories", href: "/laboratories" },
      ],
    },
    {
      title: "Students",
      links: [
        { name: "Resources", href: "/students/resources" },
        { name: "Clubs & Activities", href: "/students/clubs" },
        { name: "Projects", href: "/students/projects" },
        { name: "Achievements", href: "/students/achievements" },
        { name: "Placements", href: "/placements" },
      ],
    },
    {
      title: "Department",
      links: [
        { name: "About", href: "/about" },
        { name: "Research", href: "/research" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        { name: "News", href: "/news" },
      ],
    },
    {
      title: "Quick Access",
      links: [
        { name: "Downloads", href: "/downloads" },
        { name: "Alumni", href: "/alumni" },
        { name: "Wellness Forum", href: "/wellness" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>Dept. of Mechatronics</div>
                <div className="text-xs text-primary-foreground/70">SRMIST, Kattankulathur</div>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Shaping the future of intelligent systems through excellence in education, research, and innovation in mechatronics engineering.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-primary-foreground/50 sm:flex-row">
            <p>
              {new Date().getFullYear()} Department of Mechatronics, SRM Institute of Science and Technology. All rights reserved.
            </p>
            <p>Last updated: February 2026</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
