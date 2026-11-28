import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { contactInfo, socialLinks, type FormData, type FormErrors } from "@/data/contact";
import { Page, Rise, SectionTitle } from "@/components/casino/ui";
import LuxeCard from "@/components/casino/LuxeCard";

const CHIP_COLORS = ["#b3202a", "#1f4fa8", "#2f8f4e", "#141414"];

export default function ContactSection() {
  const still = useReducedMotion();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Add your name";
    if (!formData.email.trim()) next.email = "Add your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Enter a valid email address";
    if (!formData.subject.trim()) next.subject = "Add a subject";
    if (!formData.message.trim()) next.message = "Write a message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputCls = (bad: boolean) =>
    `w-full bg-white/70 border ${bad ? "border-[var(--card-red)]" : "border-[#cdbf9f]"} text-[var(--card-ink)] outline-none placeholder:text-[#8a7d66] focus-visible:border-[var(--card-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]`;

  const field = (name: keyof FormData, label: string, placeholder: string, type = "text") => (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-[var(--card-ink)] mb-2 pl-1">{label}</label>
      {name === "message" ? (
        <textarea id={name} name={name} rows={5} value={formData[name]} onChange={handleChange} placeholder={placeholder}
          aria-invalid={!!errors[name]} className={`${inputCls(!!errors[name])} rounded-2xl px-4 py-3.5 resize-none`} />
      ) : (
        <input id={name} name={name} type={type} value={formData[name]} onChange={handleChange} placeholder={placeholder}
          aria-invalid={!!errors[name]} className={`${inputCls(!!errors[name])} rounded-full px-5 py-3`} />
      )}
      {errors[name] && <p className="mt-1.5 pl-1 text-sm font-semibold text-[var(--card-red)]">{errors[name]}</p>}
    </div>
  );

  return (
    <Page>
      <SectionTitle
        rank="10"
        eyebrow="Ten of spades"
        title="Place your bet"
        lead="Tell me what you're building or what's slowing your team down. I usually reply within a day."
      />

      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 items-start">
        <div className="grid gap-4">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={still ? false : { opacity: 0, x: -50, rotate: -20 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.45 + i * 0.08 }}
              className="block"
            >
              <LuxeCard tone="noir" tilt={false} bodyClassName="px-6 py-5">
                <span className="flex items-center gap-4">
                  <span className="chip w-14 h-14 shrink-0 grid place-items-center transition-transform duration-500 group-hover:rotate-180" style={{ ["--chip" as string]: CHIP_COLORS[i % CHIP_COLORS.length] }}>
                    <span className="relative z-10 text-[var(--ivory)] [&>svg]:text-xl">{item.icon}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">{item.title}</span>
                    <span className="block mt-0.5 font-semibold text-[var(--text)] break-words">{item.value}</span>
                  </span>
                </span>
              </LuxeCard>
            </motion.a>
          ))}
          <div className="flex gap-3 pt-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                className="btn-line w-12 h-12">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <Rise delay={0.2}>
          <LuxeCard rank="10" suit="♠" label="Place your bet" tilt={false}>
          <form onSubmit={handleSubmit} noValidate className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {field("name", "Name", "Your name")}
              {field("email", "Email", "you@company.com", "email")}
            </div>
            {field("subject", "Subject", "What's this about?")}
            {field("message", "Message", "A few lines about the project")}
            <button type="submit" disabled={isSubmitting} className="btn-ink py-4 disabled:opacity-60">
              {isSubmitting ? "Sending..." : isSubmitted ? (<><Check size={18} /> Message sent</>) : (<><Send size={17} /> Send message</>)}
            </button>
          </form>
          </LuxeCard>
        </Rise>
      </div>
    </Page>
  );
}
