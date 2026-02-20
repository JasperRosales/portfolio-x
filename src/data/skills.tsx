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
  SiTypescript,
  SiJavascript,
  SiReact,
  SiElectron,
  SiTauri,
  SiGoogle,
  SiServerless,
  SiJson,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
}

export const allSkills: Skill[] = [
  { name: "Golang", icon: <SiGo /> },
  {name: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", icon: <SiTypescript /> },

  { name: "Gin", icon: <SiGin /> },
  { name: "React", icon: <SiReact /> },
  {name: "React Native", icon: <SiReact /> },
  {name: "Electron", icon: <SiElectron /> },
  {name: "Tauri", icon: <SiTauri /> },


  { name: "RESTful APIs", icon: <SiJson /> },
  { name: "GRPC APIs", icon: <SiGoogle /> },

  { name: "Microservices", icon: <SiServerless /> },
  { name: "Kafka", icon: <SiApachekafka /> },

  { name: "PostgreSQL", icon: <SiPostgresql /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "Prometheus", icon: <SiPrometheus/> },
  { name: "Grafana", icon: <SiGrafana /> },


  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Git", icon: <SiGit /> },

];

export const pins: Skill[] = [
  { name: "Golang", icon: <SiGo /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
];
