import Link from "next/link"
import { Section } from "@/components/section"
import { ArrowRight } from "lucide-react"

export function DepartmentIntro() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="text-balance text-2xl font-bold tracking-tight md:text-3xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Engineering the Future of Intelligent Systems
        </h2>
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
          The Department of Mechatronics at SRM Institute of Science and Technology integrates mechanical engineering,
          electronics, computer science, and control systems to create the next generation of intelligent machines and
          automated systems. Established in 2004, our department has grown to become one of the premier mechatronics
          programs in India, producing highly skilled engineers who lead innovation in robotics, automation, IoT, and
          smart manufacturing across the globe.
        </p>
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          With 12+ state-of-the-art laboratories, a dedicated faculty of 20+ researchers, and strong industry
          partnerships with leading companies like Bosch, Siemens, and ABB, we offer an unparalleled learning
          experience that bridges theoretical foundations with real-world applications.
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Read more about us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
