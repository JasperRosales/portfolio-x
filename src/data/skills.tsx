import type { ReactNode } from "react";
import {
  SiGo,
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
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
  info: string;
}

export const allSkills: Skill[] = [
  { name: "Golang", icon: <SiGo />, info: "Language"},
  { name: "Javascript", icon: <SiJavascript />, info: "Language"  },
  { name: "Dart", icon: <SiDart />, info: "Language" },

  { name: "Gin", icon: <SiGin />, info: "Framework" },
  { name: "React", icon: <SiReact />, info: "Framework" },
  { name: "Flutter", icon: <SiFlutter />, info: "Framework" },

  { name: "RESTful", icon: <SiJson />, info: "API" },
  { name: "GRPC", icon: <SiGoogle />, info: "API" },

  { name: "Microservices", icon: <SiServerless />, info: "Architecture" },
  { name: "Kafka", icon: <SiApachekafka />, info: "Message Broker" },

  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },

  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
  { name: "Prometheus", icon: <SiPrometheus />, info: "Monitoring" },
  { name: "Grafana", icon: <SiGrafana />, info: "Monitoring" },
  { name: "AWS", icon: <SiAwslambda />, info: "Cloud Platform" },
  { name: "GitHub Actions", icon: <SiGithubactions />, info: "CI/CD" },
  { name: "Git", icon: <SiGit />, info: "Version Control" },
  { name: "Make", icon: <SiMake />, info: "Build Tool" },
  { name: "Bash", icon: <SiGnubash />, info: "Shell" },
];

export const pins: Skill[] = [
  { name: "Dart", icon: <SiDart />, info: "Language" },
  { name: "PostgreSQL", icon: <SiPostgresql />, info: "Database" },
  { name: "Docker", icon: <SiDocker />, info: "Containerization" },
  { name: "GitHub Actions", icon: <SiGithubactions />, info: "CI/CD" },
  { name: "Bash", icon: <SiGnubash />, info: "Shell" },
];
