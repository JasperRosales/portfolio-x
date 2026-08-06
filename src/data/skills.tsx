import type { ReactNode } from "react";
import {
  SiPostgresql,
  SiDocker,
  SiApachekafka,
  SiGithubactions,
  SiGit,
  SiPrometheus,
  SiGrafana,
  SiJavascript,
  SiReact,
  SiServerless,
  SiJson,
  SiExpress,
  SiAwslambda,
  SiMake,
  SiGnubash,
  SiDebian,
  SiServerfault,
  SiRedis,
  SiSupabase,
  SiGo,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
  info: string;
}

export const allSkills: Skill[] = [
  { name: "Javascript", icon: <SiJavascript />, info: "Language" },
  { name: "TypeScript", icon: <SiTypescript />, info: "Language" },
  { name: "Golang", icon: <SiGo />, info: "Language" },

  { name: "Node.js", icon: <SiNodedotjs />, info: "Runtime" },
  { name: "Next.js", icon: <SiNextdotjs />, info: "Framework" },
  { name: "React.js", icon: <SiReact />, info: "Framework" },
  { name: "Express.js", icon: <SiExpress />, info: "Framework" },

  { name: "RESTful", icon: <SiJson />, info: "API" },
  { name: "Kafka", icon: <SiApachekafka />, info: "Message Broker" },

  { name: "Monolithic", icon: <SiServerfault />, info: "Architecture" },
  { name: "Microservices", icon: <SiServerless />, info: "Architecture" },

  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Redis", icon: <SiRedis />, info: "Database" },
  { name: "Supabase", icon: <SiSupabase />, info: "Database" },

  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
  { name: "Prometheus", icon: <SiPrometheus />, info: "Monitoring" },
  { name: "Grafana", icon: <SiGrafana />, info: "Monitoring" },
  { name: "AWS", icon: <SiAwslambda />, info: "Cloud Platform" },
  { name: "GitHub Actions", icon: <SiGithubactions />, info: "CI/CD" },
  { name: "Git", icon: <SiGit />, info: "Version Control" },
  { name: "Make", icon: <SiMake />, info: "Build Tool" },
  { name: "Bash", icon: <SiGnubash />, info: "Shell" },
  { name: "Linux/Debian", icon: <SiDebian />, info: "OS" },
];

export const pins: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs />, info: "Runtime" },
  { name: "Next.js", icon: <SiNextdotjs />, info: "Framework" },
  { name: "React.js", icon: <SiReact />, info: "Framework" },
  { name: "TypeScript", icon: <SiTypescript />, info: "Language" },
  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
];
