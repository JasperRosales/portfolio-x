import {
  VscCode,
  VscDatabase,
  VscCloud,
  VscOrganization,
} from "react-icons/vsc";
import type { ReactNode } from "react";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  description: string;
  icon: ReactNode;
  date?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "java-hackerrank",
    name: "Java (Basic)",
    issuer: "HackerRank",
    description:
      "Certified in Java programming fundamentals covering data types, control structures, object-oriented programming, and problem-solving exercises.",
    icon: <VscCode />,
  },
  {
    id: "go-hackerrank",
    name: "Go (Basic)",
    issuer: "HackerRank",
    description:
      "Certified in Go language fundamentals covering syntax, data structures, concurrency patterns, error handling, and standard library usage for practical applications.",
    icon: <VscCode />,
  },
  {
    id: "sql-hackerrank",
    name: "SQL (Basic)",
    issuer: "HackerRank",
    description:
      "Certified in SQL fundamentals covering query writing, data manipulation, table management, relational database concepts, and basic optimization techniques for database operations.",
    icon: <VscDatabase />,
  },
  {
    id: "c-essentials-cisco",
    name: "C Essentials I",
    issuer: "Cisco",
    description:
      "Certified in C programming fundamentals covering syntax, operators, control flow, functions, arrays, pointers, memory management, and problem-solving techniques.",
    icon: <VscCode />,
  },
  {
    id: "cpp-essentials-cisco",
    name: "C++ Essentials II",
    issuer: "Cisco",
    description:
      "Certified in advanced C++ programming covering classes, inheritance, polymorphism, templates, standard library usage, exception handling, and object-oriented design patterns.",
    icon: <VscCode />,
  },
  {
    id: "cs50-harvard",
    name: "CS50 Intro to Computer Science",
    issuer: "Harvard",
    description:
      "Completed Harvard's CS50 introduction covering computer science fundamentals including algorithms, data structures, programming paradigms, memory management, and software engineering principles.",
    icon: <VscOrganization />,
  },
  {
    id: "aws-s3-amazon",
    name: "AWS S3 Basics",
    issuer: "Amazon",
    description:
      "Completed certification covering Amazon S3 cloud storage fundamentals including buckets, objects, access policies, versioning, encryption, data lifecycle management, and secure file storage practices.",
    icon: <VscCloud />,
  },
  {
    id: "oracle-java-foundations",
    name: "Oracle Java Foundations",
    issuer: "Oracle",
    description:
      "Certified in Oracle Java Foundations covering core Java concepts including syntax, classes, inheritance, exception handling, object-oriented programming, and best coding practices for scalable applications.",
    icon: <VscCode />,
  },
  {
    id: "freecodecamp-core-certifications",
    name: "FreeCodeCamp Certifications",
    issuer: "FreeCodeCamp",
    description:
      "Completed 8 FreeCodeCamp certifications covering responsive web design, JavaScript algorithms and data structures, front-end libraries, data visualization, relational databases, back-end development, quality assurance, and information security.",
    icon: <VscCode />,
  },
];
