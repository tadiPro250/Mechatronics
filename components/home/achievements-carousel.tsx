"use client"

import { Section } from "@/components/section"
import { achievements } from "@/lib/data"
import { Trophy, Award, Star, Microscope } from "lucide-react"

const categoryIcons: Record<string, typeof Trophy> = {
  Competition: Trophy,
  Research: Microscope,
  Innovation: Star,
  Academic: Award,
}

export function AchievementsCarousel() {
  return (
    <Section title="Recent Achievements" subtitle="Celebrating excellence in competitions, research, and innovation.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.slice(0, 8).map((item, idx) => {
          const Icon = categoryIcons[item.category] || Award
          return (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{item.title}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.year}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
