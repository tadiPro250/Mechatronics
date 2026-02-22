"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Labs", "Events", "Campus", "Students", "Workshops"]

const galleryItems = [
  { src: "/images/lab-robotics.jpg", alt: "Robotics & Automation Lab", category: "Labs" },
  { src: "/images/hero-banner.jpg", alt: "MechaTech Symposium 2025", category: "Events" },
  { src: "/images/campus.jpg", alt: "SRM Kattankulathur Campus", category: "Campus" },
  { src: "/images/lab-robotics.jpg", alt: "Students in Embedded Systems Lab", category: "Students" },
  { src: "/images/hero-banner.jpg", alt: "Workshop on ROS2", category: "Workshops" },
  { src: "/images/campus.jpg", alt: "Department Building", category: "Campus" },
  { src: "/images/lab-robotics.jpg", alt: "PLC & SCADA Lab", category: "Labs" },
  { src: "/images/hero-banner.jpg", alt: "Robocon Team", category: "Students" },
  { src: "/images/campus.jpg", alt: "Convocation Ceremony", category: "Events" },
  { src: "/images/lab-robotics.jpg", alt: "CNC Manufacturing Lab", category: "Labs" },
  { src: "/images/hero-banner.jpg", alt: "IoT Workshop", category: "Workshops" },
  { src: "/images/campus.jpg", alt: "Smart India Hackathon Winners", category: "Students" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Photo & Video Gallery"
          subtitle="Capturing moments from our vibrant department life"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Gallery", href: "/gallery" },
          ]}
        />

        <Section>
          {/* Filter Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/80 to-transparent p-3 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-card">{item.alt}</p>
                  <p className="text-xs text-card/70">{item.category}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox */}
          {lightbox !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4" onClick={() => setLightbox(null)}>
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 rounded-full bg-card/20 p-2 text-card transition-colors hover:bg-card/30"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative max-h-[80vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].alt}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] rounded-xl object-contain"
                />
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-card">{filtered[lightbox].alt}</p>
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* Video Section */}
        <Section className="bg-secondary" title="Videos" subtitle="Watch our department highlights and lab tours">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Department Promo Video 2025", desc: "An overview of our department, labs, and student life" },
              { title: "Robotics Lab Virtual Tour", desc: "Walk through our state-of-the-art robotics facility" },
              { title: "MechaTech Symposium 2025 Highlights", desc: "Highlights from our annual department symposium" },
            ].map((video) => (
              <div key={video.title} className="overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-video bg-secondary">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-foreground">{video.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
