import type { ReactNode } from "react";
import {
  SiGo,
  SiRust,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiApachekafka,
  SiRabbitmq,
  SiGraphql,
  SiGithubactions,
  SiGit,
  SiApachemaven,
} from "react-icons/si";
import { FaServer, FaCheckCircle } from "react-icons/fa";

interface Skill {
  name: string;
  icon: ReactNode;
}

export const allSkills: Skill[] = [
  { name: "Golang", icon: <SiGo /> },
  { name: "Rust", icon: <SiRust /> },

  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "RESTful APIs", icon: <FaServer /> },
  { name: "GraphQL", icon: <SiGraphql /> },

  { name: "Microservices", icon: <FaServer /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "Kafka", icon: <SiApachekafka /> },

  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Maven", icon: <SiApachemaven /> },

  { name: "Testing", icon: <FaCheckCircle /> },
];


export const softSkills: string[] = [
  "Problem-solving",
  "Analytical Thinking",
  "Attention to Detail",
  "Effective Communication",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
];
