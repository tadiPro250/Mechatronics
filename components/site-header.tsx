"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ChevronDown, Search, GraduationCap } from "lucide-react"
import { navigation } from "@/lib/data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:text-sm">
          <span className="font-medium tracking-wide">SRM Institute of Science and Technology, Kattankulathur</span>
          <div className="hidden items-center gap-4 sm:flex">
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/wellness" className="hover:underline">Wellness Forum</Link>
            <Link href="/alumni" className="hover:underline">Alumni</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Dept. of Mechatronics
              </span>
              <span className="text-xs text-muted-foreground">SRMIST, Kattankulathur</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      )}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 top-full z-50 w-56 rounded-lg border border-border bg-card p-1.5 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search + Mobile menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-border bg-card px-4 py-3">
            <div className="mx-auto max-w-2xl">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search faculty, courses, labs, events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
              </form>
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="border-t border-border bg-card px-4 py-4 lg:hidden" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                      >
                        {item.name}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === item.name && "rotate-180")} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
