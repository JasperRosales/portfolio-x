import { VscMail, VscLocation, VscGithubInverted, VscAccount, VscDeviceMobile, VscGlobe } from 'react-icons/vsc';
import type { ReactNode } from 'react';

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactInfoItem {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
}

export interface SocialLink {
  icon: ReactNode;
  label: string;
  href: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: <VscMail className="text-2xl" />,
    title: 'Email',
    value: 'jasperbrosales32@gmail.com',
    href: 'mailto:jasperbrosales32@gmail.com',
  },
  {
    icon: <VscDeviceMobile className="text-2xl" />,
    title: 'Phone',
    value: '+63 992 651 8599',
    href: 'tel:+639926518599',
  },
  {
    icon: <VscLocation className="text-2xl" />,
    title: 'Location',
    value: 'Balayan, Batangas, Philippines',
    href: 'https://maps.google.com/?q=Balayan,Batangas,Philippines',
  },
  {
    icon: <VscGithubInverted className="text-2xl" />,
    title: 'GitHub',
    value: 'github.com/JasperRosales',
    href: 'https://github.com/JasperRosales',
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: <VscGithubInverted className="text-xl" />,
    label: 'GitHub',
    href: 'https://github.com/JasperRosales',
  },
  {
    icon: <VscAccount className="text-xl" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/jasperrosales',
  },
  {
    icon: <VscGlobe className="text-xl" />,
    label: 'Website',
    href: '/',
  },
];

