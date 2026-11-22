import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

/** Rises out of the clay when scrolled into view. */
export default function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  const still = useReducedMotion();
  if (still) return <motion.div {...props} />;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
