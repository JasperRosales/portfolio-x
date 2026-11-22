import { useState } from "react";
import { Send, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { contactInfo, type FormData, type FormErrors } from "@/data/contact";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Add your name";
    if (!formData.email.trim()) {
      newErrors.email = "Add your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Add a subject";
    if (!formData.message.trim()) newErrors.message = "Write a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const field = (name: keyof FormData, label: string, placeholder: string, type = "text") => (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-black mb-2 pl-2">{label}</label>
      {name === "message" ? (
        <textarea id={name} name={name} rows={5} value={formData[name]} onChange={handleChange} placeholder={placeholder}
          aria-invalid={!!errors[name]}
          className={`nm-in w-full rounded-3xl px-5 py-4 resize-none outline-none placeholder:text-[var(--ink-3)]/70 focus-visible:outline-2 focus-visible:outline-black ${errors[name] ? "outline-2 outline-black" : ""}`} />
      ) : (
        <input id={name} name={name} type={type} value={formData[name]} onChange={handleChange} placeholder={placeholder}
          aria-invalid={!!errors[name]}
          className={`nm-in w-full rounded-full px-5 py-3.5 outline-none placeholder:text-[var(--ink-3)]/70 focus-visible:outline-2 focus-visible:outline-black ${errors[name] ? "outline-2 outline-black" : ""}`} />
      )}
      {errors[name] && <p className="mt-2 pl-2 text-sm font-semibold text-black">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 scroll-mt-20">
      <SectionHeading title="Let's talk" lead="Tell me what you're building or what's slowing your team down. I usually reply within a day." />

      <div className="grid lg:grid-cols-[1fr_1.35fr] gap-8 items-start">
        <div className="grid gap-5">
          {contactInfo.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
              className="nm-btn rounded-[26px] p-4 flex items-center gap-4">
              <span className="nm-in-sm w-12 h-12 rounded-full grid place-items-center text-black shrink-0 [&>svg]:text-xl">{item.icon}</span>
              <span className="min-w-0">
                <span className="block text-sm text-[var(--ink-3)]">{item.title}</span>
                <span className="block font-semibold text-black break-words">{item.value}</span>
              </span>
            </a>
          ))}
        </div>

        <Reveal><form onSubmit={handleSubmit} noValidate className="nm-lg rounded-[36px] p-6 sm:p-9 grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {field("name", "Name", "Your name")}
            {field("email", "Email", "you@company.com", "email")}
          </div>
          {field("subject", "Subject", "What's this about?")}
          {field("message", "Message", "A few lines about the project")}
          <button type="submit" disabled={isSubmitting}
            className="nm-ink rounded-full py-4 font-semibold flex items-center justify-center gap-2.5 disabled:opacity-60">
            {isSubmitting ? "Sending..." : isSubmitted ? (<><Check size={18} /> Message sent</>) : (<><Send size={17} /> Send message</>)}
          </button>
        </form></Reveal>
      </div>
    </section>
  );
}
