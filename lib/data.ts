// Site-wide data for the Department of Mechatronics, SRM Institute of Science and Technology

export const siteConfig = {
  name: "Department of Mechatronics",
  college: "SRM Institute of Science and Technology",
  campus: "Kattankulathur",
  address: "SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu - 603203",
  phone: "+91-44-2745-5510",
  email: "mechatronics@srmist.edu.in",
  website: "https://www.srmist.edu.in",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0547875098454!2d80.0422!3d12.8231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aab7d0c0!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
}

export const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Vision & Mission", href: "/about#vision-mission" },
      { name: "History", href: "/about#history" },
      { name: "HOD Message", href: "/about#hod-message" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    children: [
      { name: "Programs", href: "/academics#programs" },
      { name: "Syllabus", href: "/academics#syllabus" },
      { name: "Timetable", href: "/academics#timetable" },
      { name: "Academic Calendar", href: "/academics#calendar" },
    ],
  },
  { name: "Faculty", href: "/faculty" },
  { name: "Laboratories", href: "/laboratories" },
  {
    name: "Students",
    href: "/students",
    children: [
      { name: "Resources", href: "/students/resources" },
      { name: "Clubs & Activities", href: "/students/clubs" },
      { name: "Projects", href: "/students/projects" },
      { name: "Achievements", href: "/students/achievements" },
    ],
  },
  { name: "Placements", href: "/placements" },
  { name: "Research", href: "/research" },
  {
    name: "More",
    href: "#",
    children: [
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
      { name: "News", href: "/news" },
      { name: "Alumni", href: "/alumni" },
      { name: "Downloads", href: "/downloads" },
      { name: "Wellness Forum", href: "/wellness" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export const highlights = [
  { label: "Placement Rate", value: "95%", description: "of eligible students placed" },
  { label: "Research Labs", value: "12+", description: "state-of-the-art facilities" },
  { label: "Publications", value: "250+", description: "in reputed journals" },
  { label: "Industry Partners", value: "40+", description: "collaborating companies" },
  { label: "Awards Won", value: "80+", description: "national & international" },
]

export const quickLinks = [
  { name: "Syllabus", href: "/academics#syllabus", icon: "BookOpen" },
  { name: "Timetable", href: "/academics#timetable", icon: "Clock" },
  { name: "Faculty", href: "/faculty", icon: "Users" },
  { name: "Student Resources", href: "/students/resources", icon: "FileText" },
  { name: "Projects", href: "/students/projects", icon: "Lightbulb" },
  { name: "Downloads", href: "/downloads", icon: "Download" },
]

export const laboratories = [
  {
    id: "robotics-lab",
    name: "Robotics & Automation Lab",
    description: "Equipped with industrial robotic arms (ABB, KUKA), mobile robots, humanoid robots, and advanced sensor systems for hands-on learning in robotics and automation.",
    equipment: ["ABB IRB 120 Robotic Arm", "KUKA KR6 R700", "NAO Humanoid Robot", "ROS Development Kits", "Sensor Fusion Platforms"],
    image: "/images/lab-robotics.jpg",
  },
  {
    id: "plc-lab",
    name: "PLC & SCADA Lab",
    description: "Features Siemens S7-1200 and Allen-Bradley PLCs, SCADA systems, HMI panels, and industrial networking equipment for process automation training.",
    equipment: ["Siemens S7-1200 PLCs", "Allen-Bradley CompactLogix", "Wonderware SCADA", "HMI Touch Panels", "Industrial I/O Modules"],
    image: "/images/lab-robotics.jpg",
  },
  {
    id: "cad-cam-lab",
    name: "CAD/CAM/CAE Lab",
    description: "High-performance workstations running SolidWorks, CATIA, ANSYS, and MATLAB for design, analysis, and simulation of mechatronic systems.",
    equipment: ["SolidWorks Premium", "CATIA V5", "ANSYS Workbench", "MATLAB/Simulink", "3D Printers (Ultimaker)"],
    image: "/images/lab-robotics.jpg",
  },
  {
    id: "embedded-lab",
    name: "Embedded Systems Lab",
    description: "Arduino, Raspberry Pi, ARM Cortex development boards, FPGA kits, and IoT platforms for embedded programming and prototyping.",
    equipment: ["ARM Cortex-M4 Dev Boards", "Xilinx FPGA Kits", "Arduino Mega/Due", "Raspberry Pi 4", "IoT Gateway Devices"],
    image: "/images/lab-robotics.jpg",
  },
  {
    id: "cnc-lab",
    name: "CNC & Manufacturing Lab",
    description: "CNC milling machines, lathes, 3D printers, laser cutters, and metrology instruments for precision manufacturing and rapid prototyping.",
    equipment: ["CNC Vertical Milling Center", "CNC Lathe", "Wire EDM Machine", "CMM (Coordinate Measuring Machine)", "Laser Cutting System"],
    image: "/images/lab-robotics.jpg",
  },
  {
    id: "sensors-lab",
    name: "Sensors & Instrumentation Lab",
    description: "Comprehensive collection of transducers, signal conditioning circuits, DAQ systems, and virtual instrumentation platforms.",
    equipment: ["NI DAQ Systems", "LabVIEW Software", "Digital Oscilloscopes", "Strain Gauge Kits", "MEMS Sensor Arrays"],
    image: "/images/lab-robotics.jpg",
  },
]

export const faculty = [
  {
    id: 1,
    name: "Dr. R. Karthikeyan",
    designation: "Professor & Head of Department",
    qualification: "Ph.D. (Mechatronics), IIT Madras",
    specialization: "Robotics, Control Systems, Autonomous Vehicles",
    email: "karthikeyan.r@srmist.edu.in",
    phone: "+91-44-2745-5501",
    publications: 45,
    image: "/images/hod-portrait.jpg",
  },
  {
    id: 2,
    name: "Dr. S. Priya",
    designation: "Professor",
    qualification: "Ph.D. (Automation Engineering), Anna University",
    specialization: "Industrial Automation, PLC/SCADA, IoT",
    email: "priya.s@srmist.edu.in",
    phone: "+91-44-2745-5502",
    publications: 38,
  },
  {
    id: 3,
    name: "Dr. M. Aravind",
    designation: "Associate Professor",
    qualification: "Ph.D. (Embedded Systems), VIT",
    specialization: "Embedded Systems, VLSI Design, FPGA",
    email: "aravind.m@srmist.edu.in",
    phone: "+91-44-2745-5503",
    publications: 28,
  },
  {
    id: 4,
    name: "Dr. K. Lakshmi",
    designation: "Associate Professor",
    qualification: "Ph.D. (Mechatronics), NIT Trichy",
    specialization: "Machine Vision, AI in Manufacturing, Deep Learning",
    email: "lakshmi.k@srmist.edu.in",
    phone: "+91-44-2745-5504",
    publications: 32,
  },
  {
    id: 5,
    name: "Dr. V. Senthil Kumar",
    designation: "Assistant Professor",
    qualification: "Ph.D. (Robotics), IIT Delhi",
    specialization: "Soft Robotics, Bio-inspired Mechanisms, 3D Printing",
    email: "senthil.v@srmist.edu.in",
    phone: "+91-44-2745-5505",
    publications: 18,
  },
  {
    id: 6,
    name: "Dr. P. Deepa",
    designation: "Assistant Professor",
    qualification: "Ph.D. (Control Engineering), PSG Tech",
    specialization: "Adaptive Control, Signal Processing, Sensor Fusion",
    email: "deepa.p@srmist.edu.in",
    phone: "+91-44-2745-5506",
    publications: 15,
  },
  {
    id: 7,
    name: "Dr. A. Rajesh",
    designation: "Assistant Professor",
    qualification: "Ph.D. (Mechanical-Mechatronics), BITS Pilani",
    specialization: "Mechatronic Product Design, Smart Materials, Actuators",
    email: "rajesh.a@srmist.edu.in",
    phone: "+91-44-2745-5507",
    publications: 20,
  },
  {
    id: 8,
    name: "Prof. N. Kavitha",
    designation: "Assistant Professor",
    qualification: "M.Tech (Mechatronics), SRM University",
    specialization: "Hydraulics & Pneumatics, Industrial Drives, CAD/CAM",
    email: "kavitha.n@srmist.edu.in",
    phone: "+91-44-2745-5508",
    publications: 10,
  },
]

export const programs = [
  {
    name: "B.Tech Mechatronics Engineering",
    duration: "4 Years",
    intake: 120,
    description: "A comprehensive undergraduate program integrating mechanical, electronics, computer, and control engineering to design intelligent products and automated systems.",
    eligibility: "10+2 with Physics, Chemistry, and Mathematics. Admission through SRMJEEE.",
  },
  {
    name: "M.Tech Mechatronics Engineering",
    duration: "2 Years",
    intake: 30,
    description: "An advanced postgraduate program focusing on research-oriented learning in robotics, AI/ML integration, smart manufacturing, and autonomous systems.",
    eligibility: "B.Tech/B.E. in relevant disciplines. Admission through SRMGEET/GATE.",
  },
  {
    name: "Ph.D. in Mechatronics",
    duration: "3-5 Years",
    intake: 10,
    description: "Doctoral program offering cutting-edge research opportunities in robotics, embedded systems, IoT, smart manufacturing, and bio-mechatronics.",
    eligibility: "M.Tech/M.E. in relevant disciplines with valid research proposal.",
  },
]

export const notices = [
  { id: 1, title: "End Semester Examination Schedule - April 2026", date: "2026-02-18", category: "Exam", important: true },
  { id: 2, title: "Workshop on Industrial IoT - Registration Open", date: "2026-02-15", category: "Workshop" },
  { id: 3, title: "Internship Applications for Summer 2026", date: "2026-02-12", category: "Internship", important: true },
  { id: 4, title: "Guest Lecture: AI in Robotics by Dr. John Smith, MIT", date: "2026-02-10", category: "Lecture" },
  { id: 5, title: "Lab Equipment Maintenance - Feb 25 to Feb 28", date: "2026-02-08", category: "Notice" },
  { id: 6, title: "Call for Papers - Mechatronics Conference 2026", date: "2026-02-05", category: "Research" },
]

export const events = [
  {
    id: 1,
    title: "MechaTech Symposium 2026",
    date: "2026-03-15",
    endDate: "2026-03-17",
    type: "Symposium",
    description: "Annual department symposium featuring paper presentations, robotics competitions, and industry talks.",
    venue: "Main Auditorium, SRM KTR Campus",
  },
  {
    id: 2,
    title: "Workshop on ROS2 & Autonomous Navigation",
    date: "2026-03-05",
    endDate: "2026-03-06",
    type: "Workshop",
    description: "Hands-on workshop on Robot Operating System 2 covering autonomous navigation, SLAM, and path planning.",
    venue: "Robotics Lab, Tech Park",
  },
  {
    id: 3,
    title: "Industry Visit to Hyundai Motors",
    date: "2026-02-28",
    type: "Industry Visit",
    description: "Guided tour of Hyundai's Sriperumbudur plant covering assembly lines, quality control, and automation systems.",
    venue: "Hyundai Motors, Sriperumbudur",
  },
  {
    id: 4,
    title: "Hackathon: Smart India Hackathon Prep",
    date: "2026-04-01",
    endDate: "2026-04-02",
    type: "Hackathon",
    description: "Internal hackathon to prepare teams for Smart India Hackathon 2026 with mentoring from industry experts.",
    venue: "Innovation Center, SRM KTR",
  },
]

export const achievements = [
  { title: "1st Place - Smart India Hackathon 2025", category: "Competition", year: "2025" },
  { title: "Best Paper Award - IEEE ICRA 2025", category: "Research", year: "2025" },
  { title: "Gold Medal - Robocon India 2025", category: "Competition", year: "2025" },
  { title: "DRDO Funded Project - Autonomous Surveillance Drone", category: "Research", year: "2024" },
  { title: "2nd Place - ABU Robocon International", category: "Competition", year: "2024" },
  { title: "Patent Granted - Smart Prosthetic Hand", category: "Innovation", year: "2024" },
  { title: "Best Department Award - SRM University", category: "Academic", year: "2024" },
  { title: "ISRO Collaboration - Satellite Sub-systems", category: "Research", year: "2023" },
]

export const placements = {
  stats: {
    averagePackage: "6.8 LPA",
    highestPackage: "42 LPA",
    placementRate: "95%",
    companiesVisited: 85,
  },
  topRecruiters: [
    "Bosch", "Siemens", "ABB", "Schneider Electric", "Honeywell",
    "Hyundai", "Tata Elxsi", "L&T Technology", "Wipro", "TCS",
    "Infosys", "Cognizant", "HCL Technologies", "Caterpillar", "Ford",
  ],
  yearWise: [
    { year: "2025", placed: 110, total: 118, highest: "42 LPA", average: "6.8 LPA" },
    { year: "2024", placed: 105, total: 115, highest: "38 LPA", average: "6.2 LPA" },
    { year: "2023", placed: 98, total: 110, highest: "35 LPA", average: "5.8 LPA" },
    { year: "2022", placed: 92, total: 108, highest: "30 LPA", average: "5.5 LPA" },
  ],
}

export const clubs = [
  {
    name: "Robo Club SRM",
    description: "Premier robotics club building competition robots, drones, and autonomous vehicles. Regular workshops and hackathons.",
    members: 120,
    lead: "Arun Prasad (4th Year)",
  },
  {
    name: "IoT Innovation Hub",
    description: "Building smart IoT solutions for campus and community. Projects include smart agriculture, energy monitoring, and health systems.",
    members: 85,
    lead: "Priya Sharma (3rd Year)",
  },
  {
    name: "Design & CAD Club",
    description: "Mastering CAD/CAM tools, 3D printing, and product design. Participates in design competitions and industry challenges.",
    members: 60,
    lead: "Karthik Raj (3rd Year)",
  },
  {
    name: "AI & Machine Learning Club",
    description: "Exploring AI/ML applications in mechatronics - computer vision, predictive maintenance, and intelligent control systems.",
    members: 95,
    lead: "Sneha Reddy (4th Year)",
  },
]

export const projects = [
  {
    title: "Autonomous Indoor Delivery Robot",
    description: "A self-navigating robot using SLAM and ROS2 for indoor parcel delivery within the campus.",
    team: "Team Alpha",
    year: "2025",
    category: "Robotics",
  },
  {
    title: "Smart Prosthetic Hand with EMG Control",
    description: "An affordable myoelectric prosthetic hand with gesture recognition using EMG sensors and machine learning.",
    team: "BioMech Team",
    year: "2025",
    category: "Biomedical",
  },
  {
    title: "Solar-Powered Agricultural Drone",
    description: "Autonomous drone for crop monitoring, pesticide spraying, and precision agriculture using multispectral imaging.",
    team: "AgroDrone",
    year: "2024",
    category: "Agriculture",
  },
  {
    title: "Industry 4.0 Smart Factory Model",
    description: "Miniature smart factory demonstrating IoT-enabled production line with predictive maintenance and digital twin.",
    team: "Factory4.0",
    year: "2024",
    category: "Manufacturing",
  },
]

export const news = [
  {
    id: 1,
    title: "Department Secures Rs. 2 Crore DRDO Research Grant",
    date: "2026-02-10",
    excerpt: "The Department of Mechatronics has been awarded a prestigious DRDO grant for research in autonomous surveillance systems.",
  },
  {
    id: 2,
    title: "Students Win Gold at Robocon India 2025",
    date: "2026-01-28",
    excerpt: "Team MechaSRM brought home the gold medal at the ABU Asia-Pacific Robot Contest India edition.",
  },
  {
    id: 3,
    title: "MoU Signed with Siemens India for Lab Upgradation",
    date: "2026-01-15",
    excerpt: "A memorandum of understanding has been signed with Siemens India to upgrade the PLC/SCADA lab with industry-grade equipment.",
  },
  {
    id: 4,
    title: "New M.Tech Specialization in AI-Robotics Announced",
    date: "2025-12-20",
    excerpt: "Starting from the 2026-27 academic year, a new M.Tech specialization in AI-integrated Robotics will be offered.",
  },
]

export const downloads = [
  { name: "B.Tech Mechatronics Syllabus 2024-25", category: "Syllabus", size: "2.4 MB", href: "#" },
  { name: "M.Tech Mechatronics Syllabus 2024-25", category: "Syllabus", size: "1.8 MB", href: "#" },
  { name: "Academic Calendar 2025-26", category: "Calendar", size: "450 KB", href: "#" },
  { name: "Admission Application Form", category: "Forms", size: "320 KB", href: "#" },
  { name: "No Dues Form", category: "Forms", size: "120 KB", href: "#" },
  { name: "Internship Application Form", category: "Forms", size: "150 KB", href: "#" },
  { name: "Lab Manual - Robotics & Automation", category: "Lab Manual", size: "5.2 MB", href: "#" },
  { name: "Lab Manual - Embedded Systems", category: "Lab Manual", size: "3.8 MB", href: "#" },
  { name: "Previous Year Papers - Sem 5", category: "Papers", size: "8.5 MB", href: "#" },
  { name: "Previous Year Papers - Sem 6", category: "Papers", size: "7.2 MB", href: "#" },
  { name: "Student Handbook 2025-26", category: "Handbook", size: "1.2 MB", href: "#" },
  { name: "Department Brochure", category: "Brochure", size: "4.5 MB", href: "#" },
]

export const alumni = [
  { name: "Rahul Venkatesh", batch: "2020", company: "Bosch, Germany", role: "Robotics Engineer" },
  { name: "Ananya Iyer", batch: "2019", company: "Tesla, USA", role: "Automation Engineer" },
  { name: "Suresh Kumar", batch: "2021", company: "Tata Elxsi", role: "Embedded Systems Lead" },
  { name: "Divya Nair", batch: "2020", company: "Siemens India", role: "PLC Programmer" },
  { name: "Aditya Menon", batch: "2018", company: "ABB Robotics, Sweden", role: "Senior R&D Engineer" },
  { name: "Meera Krishnan", batch: "2021", company: "Startup (Co-founder)", role: "CEO - RoboKraft Technologies" },
]
