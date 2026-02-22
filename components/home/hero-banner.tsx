import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FlaskConical, Phone, BookOpen, Heart } from "lucide-react"

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Mechatronics Department Laboratory"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium tracking-wide text-primary-foreground/80">
            SRM Institute of Science and Technology
          </div>
          <h1
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-primary-foreground md:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Department of Mechatronics Engineering
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Bridging mechanical precision with digital intelligence. We engineer the future of robotics, automation, and smart systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/academics#programs"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/laboratories"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <FlaskConical className="h-4 w-4" />
              Explore Labs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </Link>
            <Link
              href="/wellness"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <Heart className="h-4 w-4" />
              Wellness Forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
