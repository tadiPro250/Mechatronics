import { highlights } from "@/lib/data"

export function HighlightsStrip() {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-primary md:text-3xl" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {item.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
