import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroBanner } from "@/components/home/hero-banner"
import { HighlightsStrip } from "@/components/home/highlights-strip"
import { DepartmentIntro } from "@/components/home/department-intro"
import { NoticesPanel } from "@/components/home/notices-panel"
import { QuickLinksSection } from "@/components/home/quick-links"
import { FeaturedLabs } from "@/components/home/featured-labs"
import { AchievementsCarousel } from "@/components/home/achievements-carousel"
import { UpcomingEvents } from "@/components/home/upcoming-events"
import { ProjectShowcase } from "@/components/home/project-showcase"
import { HodMessage } from "@/components/home/hod-message"
import { AlumniHighlights } from "@/components/home/alumni-highlights"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { ContactSummary } from "@/components/home/contact-summary"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroBanner />
        <HighlightsStrip />
        <DepartmentIntro />
        <NoticesPanel />
        <QuickLinksSection />
        <FeaturedLabs />
        <AchievementsCarousel />
        <UpcomingEvents />
        <ProjectShowcase />
        <HodMessage />
        <AlumniHighlights />
        <GalleryPreview />
        <ContactSummary />
      </main>
      <SiteFooter />
    </div>
  )
}
