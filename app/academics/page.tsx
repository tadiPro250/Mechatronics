import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { programs } from "@/lib/data"
import { GraduationCap, Clock, Users, Calendar, BookOpen, FileText, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Academics",
  description: "Academic programs, syllabus, timetable, and calendar for the Department of Mechatronics at SRMIST.",
}

const semesterSyllabus = [
  { sem: "Semester 1", subjects: ["Engineering Mathematics I", "Engineering Physics", "Engineering Chemistry", "Basic Electrical & Electronics", "Engineering Graphics", "Programming in C"] },
  { sem: "Semester 2", subjects: ["Engineering Mathematics II", "Material Science", "Digital Electronics", "Engineering Mechanics", "Environmental Science", "Programming Lab"] },
  { sem: "Semester 3", subjects: ["Transforms & Partial Diff. Equations", "Electrical Machines", "Sensors & Transducers", "Mechanics of Solids", "Electronic Circuits", "Sensors Lab"] },
  { sem: "Semester 4", subjects: ["Probability & Statistics", "Control Systems", "Microprocessors & Microcontrollers", "Fluid Mechanics & Machinery", "Kinematics of Machinery", "Microprocessor Lab"] },
  { sem: "Semester 5", subjects: ["Robotics Engineering", "PLC & SCADA", "Embedded Systems", "CAD/CAM", "Industrial Automation", "Robotics Lab"] },
  { sem: "Semester 6", subjects: ["Machine Vision", "IoT & Industry 4.0", "Hydraulics & Pneumatics", "Finite Element Analysis", "Elective I", "IoT Lab"] },
  { sem: "Semester 7", subjects: ["AI & Machine Learning", "Elective II", "Elective III", "Project Phase I", "Industrial Internship", "Seminar"] },
  { sem: "Semester 8", subjects: ["Elective IV", "Project Phase II", "Comprehensive Viva"] },
]

const timetable = [
  { time: "8:30 - 9:20", mon: "Mathematics III", tue: "Control Systems", wed: "Sensors Lab", thu: "Robotics", fri: "PLC/SCADA" },
  { time: "9:20 - 10:10", mon: "Control Systems", tue: "Robotics", wed: "Sensors Lab", thu: "Mathematics III", fri: "Embedded Systems" },
  { time: "10:20 - 11:10", mon: "Robotics", tue: "Embedded Systems", wed: "PLC/SCADA", thu: "Control Systems", fri: "Tutorial" },
  { time: "11:10 - 12:00", mon: "Embedded Systems", tue: "PLC/SCADA", wed: "Mathematics III", thu: "Sensors", fri: "Robotics Lab" },
  { time: "1:00 - 1:50", mon: "PLC/SCADA", tue: "Mathematics III", wed: "Robotics", thu: "Embedded Lab", fri: "Robotics Lab" },
  { time: "1:50 - 2:40", mon: "Tutorial", tue: "Sensors", wed: "Library", thu: "Embedded Lab", fri: "Sports" },
]

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Academics"
          subtitle="Programs, curriculum, and academic resources for Mechatronics Engineering"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Academics", href: "/academics" },
          ]}
        />

        {/* Programs */}
        <Section id="programs" title="Our Programs" subtitle="Undergraduate, postgraduate, and doctoral programs in Mechatronics">
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((prog) => (
              <div key={prog.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {prog.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    <Clock className="h-3 w-3" /> {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                    <Users className="h-3 w-3" /> Intake: {prog.intake}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{prog.description}</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Eligibility</p>
                  <p className="mt-1 text-sm text-foreground">{prog.eligibility}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Syllabus */}
        <Section id="syllabus" className="bg-secondary" title="B.Tech Mechatronics - Syllabus Overview" subtitle="Semester-wise course structure">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {semesterSyllabus.map((sem) => (
              <div key={sem.sem} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-bold text-foreground">{sem.sem}</h4>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {sem.subjects.map((sub) => (
                    <li key={sub} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download Full Syllabus (PDF)
            </a>
          </div>
        </Section>

        {/* Timetable */}
        <Section id="timetable" title="Sample Timetable" subtitle="Semester 5 - B.Tech Mechatronics (Section A)">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="rounded-tl-lg px-4 py-3 text-left text-sm font-semibold">Time</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Monday</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Tuesday</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Wednesday</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Thursday</th>
                  <th className="rounded-tr-lg px-4 py-3 text-left text-sm font-semibold">Friday</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, i) => (
                  <tr key={row.time} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{row.time}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.mon}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.tue}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.wed}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.thu}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{row.fri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Note: This is a representative timetable. Actual schedules may vary. Please check the department notice board for updates.
          </p>
        </Section>

        {/* Academic Calendar */}
        <Section id="calendar" className="bg-secondary" title="Academic Calendar 2025-26" subtitle="Key dates and events for the academic year">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { quarter: "Odd Semester (Jul - Dec 2025)", events: [
                { date: "Jul 14, 2025", event: "Commencement of classes" },
                { date: "Aug 15, 2025", event: "Independence Day (Holiday)" },
                { date: "Sep 15-19, 2025", event: "Internal Assessment I" },
                { date: "Oct 13-17, 2025", event: "Internal Assessment II" },
                { date: "Nov 03-07, 2025", event: "Internal Assessment III" },
                { date: "Dec 01-19, 2025", event: "End Semester Examinations" },
              ]},
              { quarter: "Even Semester (Jan - Jun 2026)", events: [
                { date: "Jan 12, 2026", event: "Commencement of classes" },
                { date: "Jan 26, 2026", event: "Republic Day (Holiday)" },
                { date: "Feb 16-20, 2026", event: "Internal Assessment I" },
                { date: "Mar 15-17, 2026", event: "MechaTech Symposium 2026" },
                { date: "Apr 20-24, 2026", event: "Internal Assessment II" },
                { date: "May 18 - Jun 05, 2026", event: "End Semester Examinations" },
              ]},
            ].map((q) => (
              <div key={q.quarter} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{q.quarter}</h4>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {q.events.map((ev) => (
                    <div key={ev.event} className="flex items-start gap-3">
                      <span className="w-28 shrink-0 text-xs font-medium text-primary">{ev.date}</span>
                      <span className="text-sm text-muted-foreground">{ev.event}</span>
                    </div>
                  ))}
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
