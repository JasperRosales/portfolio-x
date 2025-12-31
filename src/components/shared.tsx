import { motion } from 'framer-motion';
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
};

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={`w-full min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${className}`}
    >
      {children}
    </motion.h2>
  );
}

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SkillBadge({ name, icon, className = '' }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--card))] border border-[rgb(var(--border))] text-sm font-medium ${className}`}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedCard({ children, className = '', onClick }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  isLast?: boolean;
}

export function TimelineItem({
  date,
  title,
  subtitle,
  description,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-[rgb(var(--border))]" />
      )}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm text-muted-foreground">{date}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-primary font-medium">{subtitle}</p>}
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
        {children}
      </motion.div>
    </div>
  );
}

