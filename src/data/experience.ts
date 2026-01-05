
export interface WorkExperience {
  date: string;
  title: string;
  subtitle: string;
  location: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
  achievements?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    date: 'May 2025 - Present',
    title: 'Vice President',
    subtitle: 'College of Informatics and Computing Sciences - SC Balayan',
    location: 'Batangas State University, Balayan, Batangas',
    achievements: [
      'Manage the organization to be functional and efficient during events and outside activities',
      'Maintain efficiency and morale of the CICS organization',
      'Lead cross-functional collaboration and public communication in hybrid environments',
      'Oversee high-impact activities and foster organizational efficiency',
    ],
    techStack: ['Leadership', 'Event Management', 'Team Management'],
  },
  {
    date: 'April 2024 - Present',
    title: 'Freelance Developer',
    subtitle: 'Self-Employed',
    location: 'Balayan, Batangas, Philippines',
    achievements: [
      'Delivered scalable, client-focused software solutions by combining strong problem-solving and analytical skills',
      'Improved system performance and project outcomes for multiple clients',
      'Communicated technical concepts clearly with non-technical stakeholders, enabling faster decision-making',
      'Reduced revisions and delivery timelines through effective communication',
      'Managed projects independently with strong time management and adaptability',
      'Consistently meeting deadlines while maintaining high-quality standards',
    ],
    techStack: ['Golang', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'Java', 'Rust'],
  },
  {
    date: 'Sep 2024 - Present',
    title: 'Committee Chairperson on Digital Graphics',
    subtitle: 'Supreme Student Council Alangilan - Balayan',
    location: 'Balayan, Batangas',
    achievements: [
      'Designed various publication/posting materials of the Supreme Student Council',
      'Designed the highlight of the school event during the 31st foundation day 2025',
      'Made announcements for the school with suitable and informative designs',
      'Managed time effectively to meet design deadlines',
    ],
    techStack: ['Digital Graphics', 'Adobe Creative Suite', 'Design', 'Time Management'],
  },
  {
    date: 'Aug 2024 - May 2025',
    title: 'Second Class Officer',
    subtitle: 'BatStateU TNEU - Balayan ROTC Unit',
    location: 'Balayan, Batangas',
    achievements: [
      'Finished the ROTC Course and became an officer',
      'First to be promoted to a position fitted for technical skills',
      'Managed events regarding the ROTC and the Page of the Unit itself',
      'Volunteered in donations and crisis activities to help people in need',
    ],
    techStack: ['Team Leadership', 'Event Management', 'Volunteer Management'],
  },
  {
    date: 'Aug 2024 - May 2025',
    title: 'Business Manager',
    subtitle: 'College of Informatics and Computing Sciences - SC Balayan',
    location: 'Batangas State University, Balayan, Batangas',
    achievements: [
      'Audited excel spreadsheets and reports for the financial status and activities',
      'Managed the receipt of each activity',
      'Maintained accurate financial reporting for the organization',
    ],
    techStack: ['Microsoft Excel', 'Financial Reporting', 'Accounting'],
  },
];

export const education: Education[] = [
  {
    institution: 'Batangas State University',
    degree: 'Bachelor of Science in Information Technology',
    period: 'August 2023 - Present',
    location: 'Batangas, Philippines',
    coursework: [
      'Business Analytics',
      'Web Development',
      'Mobile Development',
      'AI Integration',
      'Data Structures and Algorithms',
      'System Design and Architecture',
    ],
    achievements: [
      'Maintained academic excellence while balancing leadership roles in multiple student organizations',
      'Founded CICS Github Community to foster student collaboration and open-source contribution',
      'Competed and won in Maze Mastery coding competition against students of all year levels',
      'Recognized for dedicated service through SSC Service Award',
    ],
  },
];

