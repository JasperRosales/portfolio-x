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
  SiFlutter,
  SiAwslambda,
  SiDart,
  SiMake,
  SiGnubash,
  SiDebian,
  SiServerfault,
  SiRedis,
  SiSpringboot,
  SiRedhat,
  SiGo,
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
  { name: "Golang", icon: <SiGo />, info: "Language" },

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
  { name: "Flutter", icon: <SiFlutter />, info: "Framework" },
  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
  { name: "Bash", icon: <SiGnubash />, info: "Shell" },
  { name: "Linux/Debian", icon: <SiDebian />, info: "OS" },
];
