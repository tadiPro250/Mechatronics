import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { laboratories } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function FeaturedLabs() {
  const featuredLabs = laboratories.slice(0, 3)

  return (
    <Section
      className="bg-secondary/50"
      title="Featured Laboratories"
      subtitle="State-of-the-art facilities equipped with industry-grade equipment for hands-on learning."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredLabs.map((lab) => (
          <Link
            key={lab.id}
            href={`/laboratories#${lab.id}`}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={lab.image}
                alt={lab.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {lab.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {lab.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/laboratories"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          View All Laboratories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
