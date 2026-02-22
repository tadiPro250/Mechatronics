import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
  dark?: boolean
}

export function Section({ children, className, id, title, subtitle, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        dark && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        {(title || subtitle) && (
          <div className="mb-10 text-center md:mb-12">
            {title && (
              <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn("mx-auto mt-3 max-w-2xl text-pretty text-base", dark ? "text-primary-foreground/70" : "text-muted-foreground")}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: { name: string; href: string }[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <div className="bg-primary py-12 text-primary-foreground md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {breadcrumbs && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/60" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.name} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <a href={crumb.href} className="hover:text-primary-foreground">{crumb.name}</a>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-pretty text-base text-primary-foreground/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
