import type { ReactNode } from "react";
import {
  SiPostgresql,
  SiDocker,
  SiApachekafka,
  SiGithubactions,
  SiGit,
  SiGin,
  SiPrometheus,
  SiGrafana,
  SiJavascript,
  SiReact,
  SiGoogle,
  SiServerless,
  SiJson,
  SiFlutter,
  SiAwslambda,
  SiDart,
  SiMake,
  SiGnubash,
  SiDebian,
  SiDotnet,
  SiServerfault,
  SiRedis,
  SiSpringboot,
  SiRedhat,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
  info: string;
}

export const allSkills: Skill[] = [
  { name: "Javascript", icon: <SiJavascript />, info: "Language" },
  { name: "Dart", icon: <SiDart />, info: "Language" },
  { name: "Java", icon: <SiRedhat />, info: "Language" },

  { name: "React", icon: <SiReact />, info: "Framework" },
  { name: "Flutter", icon: <SiFlutter />, info: "Framework" },
  { name: "Spring Boot", icon: <SiSpringboot />, info: "Framework" },

  { name: "RESTful", icon: <SiJson />, info: "API" },
  { name: "Kafka", icon: <SiApachekafka />, info: "Message Broker" },

  { name: "Monolithic", icon: <SiServerfault />, info: "Architecture" },
  { name: "Microservices", icon: <SiServerless />, info: "Architecture" },

  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Redis", icon: <SiRedis />, info: "Database" },

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
  { name: "Java", icon: <SiRedhat />, info: "Language" },
  { name: "Spring Boot", icon: <SiSpringboot />, info: "Framework" },
  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
  { name: "Bash", icon: <SiGnubash />, info: "Shell" },
  { name: "Linux/Debian", icon: <SiDebian />, info: "OS" },
];
