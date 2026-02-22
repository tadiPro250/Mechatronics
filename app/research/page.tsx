import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero, Section } from "@/components/section"
import { BookOpen, FileText, Users, Building2, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Research areas, publications, funded projects, and industry collaborations at the Department of Mechatronics, SRMIST.",
}

const researchAreas = [
  { name: "Robotics & Autonomous Systems", desc: "Mobile robots, humanoid robots, surgical robotics, autonomous vehicles, swarm intelligence" },
  { name: "Industrial IoT & Industry 4.0", desc: "Smart manufacturing, digital twins, predictive maintenance, cyber-physical systems" },
  { name: "AI & Machine Learning", desc: "Computer vision, deep learning, reinforcement learning for control, NLP for industrial applications" },
  { name: "Embedded Systems & VLSI", desc: "FPGA-based control, SoC design, real-time embedded systems, hardware-software co-design" },
  { name: "Bio-Mechatronics", desc: "Prosthetics, exoskeletons, medical robots, rehabilitation systems, bio-signal processing" },
  { name: "Smart Materials & Actuators", desc: "Shape memory alloys, piezoelectric actuators, soft robotics, compliant mechanisms" },
]

const recentPublications = [
  { title: "Deep Reinforcement Learning for Autonomous Navigation in Unstructured Environments", journal: "IEEE Transactions on Robotics", year: "2025", authors: "Karthikeyan R., Aravind M." },
  { title: "IoT-Enabled Predictive Maintenance Framework for CNC Machines", journal: "Journal of Manufacturing Systems", year: "2025", authors: "Priya S., Lakshmi K." },
  { title: "EMG-Based Gesture Recognition for Prosthetic Hand Control Using CNN-LSTM", journal: "Biomedical Signal Processing and Control", year: "2025", authors: "Senthil Kumar V., Deepa P." },
  { title: "Digital Twin Framework for Smart Factory Automation", journal: "Computers in Industry", year: "2024", authors: "Rajesh A., Priya S." },
  { title: "Soft Robotic Gripper with Adaptive Grasping Using Pneumatic Actuators", journal: "Soft Robotics", year: "2024", authors: "Senthil Kumar V., Karthikeyan R." },
  { title: "FPGA-Based Real-Time Control of Six-DOF Robotic Manipulator", journal: "Mechatronics", year: "2024", authors: "Aravind M., Kavitha N." },
]

const fundedProjects = [
  { title: "Autonomous Surveillance Drone with AI-Powered Threat Detection", agency: "DRDO", amount: "Rs. 2.0 Crore", duration: "2024-2027", pi: "Dr. R. Karthikeyan" },
  { title: "Smart Agricultural Robot for Precision Farming", agency: "DST-SERB", amount: "Rs. 45 Lakhs", duration: "2023-2026", pi: "Dr. V. Senthil Kumar" },
  { title: "Industry 4.0 Centre of Excellence", agency: "Siemens India", amount: "Rs. 1.2 Crore", duration: "2022-2025", pi: "Dr. S. Priya" },
  { title: "Bio-Inspired Soft Robotic Systems for Rehabilitation", agency: "ICMR", amount: "Rs. 30 Lakhs", duration: "2024-2026", pi: "Dr. V. Senthil Kumar" },
]

const collaborations = [
  { name: "Bosch India", type: "Industry", focus: "Automotive Mechatronics, ADAS Systems" },
  { name: "Siemens India", type: "Industry", focus: "PLC/SCADA Lab, Industry 4.0 CoE" },
  { name: "ABB Robotics", type: "Industry", focus: "Industrial Robotics, Robot Programming" },
  { name: "DRDO", type: "Government", focus: "Defence Robotics, Autonomous Systems" },
  { name: "ISRO", type: "Government", focus: "Satellite Sub-systems, Space Robotics" },
  { name: "IIT Madras", type: "Academic", focus: "Joint Research, Ph.D. Programs" },
  { name: "NUS Singapore", type: "International", focus: "Student Exchange, Collaborative Research" },
  { name: "TU Munich", type: "International", focus: "Dual Degree Program, Research Collaboration" },
]

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          title="Research & Publications"
          subtitle="250+ publications, Rs. 4+ Crore in funded projects, and 40+ industry collaborations"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Research", href: "/research" },
          ]}
        />

        {/* Research Areas */}
        <Section title="Research Areas" subtitle="Key focus areas driving innovation in our department">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <div key={area.name} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <h3 className="font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{area.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Recent Publications */}
        <Section className="bg-secondary" title="Recent Publications" subtitle="Selected publications from our faculty in top journals">
          <div className="flex flex-col gap-4">
            {recentPublications.map((pub) => (
              <div key={pub.title} className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{pub.title}</h4>
                    <p className="mt-1 text-sm text-primary">{pub.journal} ({pub.year})</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">Authors: {pub.authors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Funded Projects */}
        <Section title="Funded Research Projects" subtitle="Major projects supported by government and industry">
          <div className="grid gap-4 md:grid-cols-2">
            {fundedProjects.map((proj) => (
              <div key={proj.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <h4 className="font-bold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>{proj.title}</h4>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Funding Agency</span>
                    <p className="mt-0.5 text-sm font-medium text-primary">{proj.agency}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Amount</span>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{proj.amount}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Duration</span>
                    <p className="mt-0.5 text-sm text-foreground">{proj.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Principal Investigator</span>
                    <p className="mt-0.5 text-sm text-foreground">{proj.pi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Industry Collaborations */}
        <Section className="bg-primary text-primary-foreground" dark title="Industry & Academic Collaborations" subtitle="Partnerships driving real-world impact">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {collaborations.map((collab) => (
              <div key={collab.name} className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">{collab.type}</span>
                </div>
                <h4 className="mt-2 font-bold">{collab.name}</h4>
                <p className="mt-1 text-sm text-primary-foreground/70">{collab.focus}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  )
}
