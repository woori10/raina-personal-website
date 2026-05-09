import {
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
  Users,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

type StatType = {
  label: string;
  value: string;
};

export const highlights = [
  { icon: MapPin, text: "Bekasi, Indonesia" },
  { icon: Briefcase, text: "Open for Internship and Freelance" },
  { icon: Monitor, text: "5+ Web Projects" },
  { icon: Users, text: "10+ Organizations & Committees" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rainadw49@gmail.com",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+6281392133113",
    // href: "wa.me/6281392133113",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bekasi, Indonesia",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/woori10", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/rainadisa",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/raina_disa/",
    label: "Instagram",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Teaching Assistant",
    organization: "IPB University",
    period: "January 2026 - Present",
    description:
      "Assisted students in the Information Systems Project Management course by guiding project planning, documentation, and teamwork collaboration during practical sessions.",
  },
  {
    type: "organization",
    title: "General Treasurer I",
    organization: "Himavo Micro IT 2024/2025",
    period: "Nov 2024 - Nov 2025",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
  },
  {
    type: "organization",
    title: "Head of Event Division",
    organization: "Pemilihan Raya Himavo Micro IT 2024/2025",
    period: "Agustus - Oktober 2024",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "organization",
    title: "Volunteer Staff Event Division",
    organization: "POMN Himavo Micro IT 2024",
    period: "Juli - November 2024",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "organization",
    title: "Head of Documentation Division",
    organization: "IT Festival 2024",
    period: "April - September 2024",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
  {
    type: "organization",
    title: "Event Division Staff",
    organization: "PENDIKAR 2024",
    period: "April - Juni 2024",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Admin Management",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/project_1.jpeg",
    techStack: ["Laravel", "PHP", "Bootstrap", "phpMyAdmin"],
    githubUrl: "https://github.com/Kigamekun/FLORATRADE-MP",
  },
  {
    title: "Tools Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/project_2.jpeg",
    techStack: ["React", "JavaSCript", "Tailwind", "phpMyAdmin"],
    githubUrl: "https://github.com/woori10/project-simipanar",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/project_4.jpeg",
    techStack: ["Next.Js", "TypeScript", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/woori10/jadwal-tugas-smst6",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Supabase", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];
