import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/section"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  { src: "/images/lab-robotics.jpg", alt: "Robotics Lab", caption: "Robotics & Automation Lab" },
  { src: "/images/hero-banner.jpg", alt: "Department Symposium", caption: "MechaTech Symposium 2025" },
  { src: "/images/campus.jpg", alt: "Campus View", caption: "SRM Kattankulathur Campus" },
  { src: "/images/lab-robotics.jpg", alt: "Student Project", caption: "Smart India Hackathon Winners" },
]

export function GalleryPreview() {
  return (
    <Section
      title="Photo Gallery"
      subtitle="Glimpses of life at the Department of Mechatronics"
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {galleryImages.map((img, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform group-hover:translate-y-0">
              <p className="text-sm font-medium text-card">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          View full gallery
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
