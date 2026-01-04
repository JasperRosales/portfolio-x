import { VscCode, VscDatabase, VscServer, VscTools, VscCoffee, VscTerminal, VscCheck } from 'react-icons/vsc';
import type { ReactNode } from 'react';

interface Skill {
  name: string;
  icon: ReactNode;
}

export const allSkills: Skill[] = [
  { name: 'Golang', icon: <VscCode /> },
  { name: 'Java', icon: <VscCoffee /> },
  { name: 'Rust', icon: <VscTerminal /> },
  { name: 'Spring Boot', icon: <VscLeaf /> },
  { name: 'RESTful APIs', icon: <VscApi /> },
  { name: 'GraphQL', icon: <VscGraph /> },
  { name: 'Microservices', icon: <VscServer /> },
  { name: 'RabbitMQ', icon: <VscRabbit /> },
  { name: 'Kafka', icon: <VscKafka /> },
  { name: 'PostgreSQL', icon: <VscDatabase /> },
  { name: 'MongoDB', icon: <VscMongodb /> },
  { name: 'Docker', icon: <VscDocker /> },
  { name: 'GitHub Actions', icon: <VscGithubAction /> },
  { name: 'Git', icon: <VscGitCustom /> },
  { name: 'Maven', icon: <VscTools /> },
  { name: 'Testing', icon: <VscCheck /> },
];

export const softSkills: string[] = [
  'Problem-solving',
  'Analytical Thinking',
  'Attention to Detail',
  'Effective Communication',
  'Team Collaboration',
  'Time Management',
  'Adaptability',
  'Critical Thinking',
];

export function VscLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

export function VscApi() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
    </svg>
  );
}

export function VscGraph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 11h2v6H7v-6zm4-4h2v10h-2V7zm4 3h2v7h-2v-7z" />
    </svg>
  );
}

export function VscRabbit() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
}

export function VscKafka() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  );
}

export function VscMongodb() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

export function VscDocker() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  );
}

export function VscGithubAction() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.68 9.68 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function VscGitCustom() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.41 16.09L12 15.45v-3.72l5.09 2.63c-.85.44-1.77.78-2.68.91zM6.41 6.35L12 9.09v3.75L7.24 12.5c.59-.34 1.27-.55 2-.61.11-.02.22-.03.33-.05v-3.36c-.56 0-1.1.14-1.58.37l-1.58-1.9zm10.23 4.64c-.03-.53-.15-1.04-.34-1.51l-1.43.86c.26.64.4 1.34.4 2.06v.43c0 .55-.45 1-1 1H14v-3.01c.24-.03.48-.06.72-.12.56-.14 1.09-.39 1.58-.61.08-.04.16-.08.24-.12v-.03z" />
    </svg>
  );
}

