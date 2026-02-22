import Image from "next/image"
import { Section } from "@/components/section"
import { Quote } from "lucide-react"

export function HodMessage() {
  return (
    <Section className="bg-secondary/50">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl border-4 border-primary/20 md:h-48 md:w-48">
              <Image
                src="/images/hod-portrait.jpg"
                alt="Dr. R. Karthikeyan, Head of Department"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <Quote className="mx-auto mb-3 h-8 w-8 text-primary/30 md:mx-0" />
            <p className="text-pretty text-base italic leading-relaxed text-foreground">
              {'"Welcome to the Department of Mechatronics at SRM Institute of Science and Technology. Our mission is to nurture engineers who can seamlessly integrate mechanical, electronics, and computing systems to solve real-world challenges. With world-class labs, dedicated faculty, and strong industry connections, we prepare our students to be leaders in the rapidly evolving field of intelligent systems and automation."'}
            </p>
            <div className="mt-5">
              <p className="text-base font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Dr. R. Karthikeyan
              </p>
              <p className="text-sm text-muted-foreground">
                Professor & Head of Department
              </p>
              <p className="text-xs text-muted-foreground">
                Ph.D. (Mechatronics), IIT Madras
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
