import { VscCode, VscOrganization, VscLightbulb, VscHeart, VscLightbulbAutofix } from 'react-icons/vsc';
import type { ReactNode } from 'react';

export interface KeyAchievement {
  icon: ReactNode;
  title: string;
  description: string;
}

export const keyAchievements: KeyAchievement[] = [
  {
    icon: <VscCode />,
    title: 'HackerRank Achiever',
    description: 'Earned Java, Go, Sql, R, Node, CSS, React, C#, Problem Solving certifications and badges through HackerRank competitive programming platform',
  },
  {
    icon: <VscOrganization />,
    title: '31st Founding Anniversary Organizer',
    description: 'Served as Technical Head for the 31st Founding Anniversary of BatStateU TNEU Balayan, overseeing all technical aspects and event coordination',
  },
  {
    icon: <VscOrganization />,
    title: '32nd Founding Anniversary Organizer',
    description: 'Served as Technical Head for the 32nd Founding Anniversary of BatStateU TNEU Balayan, overseeing all technical aspects, material preparation, and event coordination',
  },
  {
    icon: <VscLightbulb />,
    title: 'Maze Mastery Coding Champion',
    description: 'Won the Maze Mastery coding competition with my team, competing against students from freshman to senior year levels',
  },
  {
    icon: <VscOrganization />,
    title: 'CICS Github Community Founder',
    description: 'Founded the College of Informatics and Computing Sciences Balayan Github Community, managing merges and repositories for student collaboration',
  },
  {
    icon: <VscHeart />,
    title: '2x SSC Service Awardee',
    description: 'Recognized for completing 2 year of dedicated service to the Supreme Student Council on Balayan campus',
  },
  {
    icon: <VscLightbulbAutofix />,
    title: 'Rank 3 Student Leadership Awardee',
    description: 'Recognized for exemplary leadership and contributions to the student community, earning the Rank 3 in Gawad Salakot 2026: Student Leadership Award ',
  },
];

