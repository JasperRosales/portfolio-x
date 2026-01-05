import { VscCode, VscDatabase, VscCloud, VscOrganization } from 'react-icons/vsc';
import type { ReactNode } from 'react';

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
    id: 'java-hackerrank',
    name: 'Java (Basic)',
    issuer: 'HackerRank',
    description: 'Demonstrates proficiency in Java programming fundamentals including data types, control structures, and object-oriented programming concepts.',
    icon: <VscCode />,
  },
  {
    id: 'go-hackerrank',
    name: 'Go (Basic)',
    issuer: 'HackerRank',
    description: 'Validates knowledge of Go programming language basics including syntax, data structures, and concurrency patterns.',
    icon: <VscCode />,
  },
  {
    id: 'sql-hackerrank',
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    description: 'Certified in SQL fundamentals including query writing, data manipulation, and database operations.',
    icon: <VscDatabase />,
  },
  {
    id: 'c-essentials-cisco',
    name: 'C Essentials I',
    issuer: 'Cisco',
    description: 'Programming fundamentals and problem-solving using C language.',
    icon: <VscCode />,
  },
  {
    id: 'cpp-essentials-cisco',
    name: 'C++ Essentials II',
    issuer: 'Cisco',
    description: 'Advanced programming concepts using C++ language.',
    icon: <VscCode />,
  },
  {
    id: 'cs50-harvard',
    name: 'CS50 Intro to Computer Science',
    issuer: 'Harvard',
    description: 'Comprehensive computer science foundation covering algorithms, data structures, and programming paradigms.',
    icon: <VscOrganization />,
  },
  {
    id: 'aws-s3-amazon',
    name: 'AWS S3 Basics',
    issuer: 'Amazon',
    description: 'Cloud storage fundamentals using Amazon S3 service.',
    icon: <VscCloud />,
  },
  {
    id: 'oracle-java-foundations',
    name: 'Oracle Java Foundations',
    issuer: 'Oracle',
    description: 'Java programming certification covering core Java concepts and best practices.',
    icon: <VscCode />,
  },
];

