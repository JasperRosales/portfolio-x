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
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
}

export const allSkills: Skill[] = [
  { name: "Golang", icon: <SiGo /> },
  {name: "Javascript", icon: <SiJavascript /> },
  {name: "Dart", icon: <SiDart /> },

  { name: "Gin", icon: <SiGin /> },
  { name: "React", icon: <SiReact /> },
  {name: "Flutter", icon: <SiFlutter /> },

  { name: "RESTful APIs", icon: <SiJson /> },
  { name: "GRPC APIs", icon: <SiGoogle /> },

  { name: "Microservices", icon: <SiServerless /> },
  { name: "Kafka", icon: <SiApachekafka /> },

  { name: "PostgreSQL", icon: <SiPostgresql /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "Prometheus", icon: <SiPrometheus/> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "AWS", icon: <SiAwslambda /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Git", icon: <SiGit /> },
  {name: "Make", icon: <SiMake /> },

];

export const pins: Skill[] = [
  { name: "Golang", icon: <SiGo /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
];
