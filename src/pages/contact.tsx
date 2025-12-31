import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  VscMail,
  VscLocation,
  VscGithubInverted,
  VscAccount,
  VscSend,
  VscCheck,
  VscDeviceMobile,
  VscGlobe,
  VscLink,
} from 'react-icons/vsc';
import {
  PageWrapper,
  Section,
  SectionTitle,
  AnimatedCard,
} from '../components/shared';
import { Button } from '../components/ui/button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
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

  const socialLinks = [
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

  return (
    <PageWrapper>
      <div className="min-h-screen">
        <Section className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <AnimatedCard className="flex items-center gap-4 hover:border-primary/50 transition-colors">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">{info.title}</h3>
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </AnimatedCard>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))] hover:border-primary hover:text-primary transition-colors"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <AnimatedCard className="h-full">
                  <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 w-fit mx-auto mb-4">
                        <VscCheck className="text-4xl text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setSubmitStatus('idle')}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-[rgb(var(--muted))] border ${
                              errors.name ? 'border-red-500' : 'border-[rgb(var(--border))]'
                            } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-[rgb(var(--muted))] border ${
                              errors.email ? 'border-red-500' : 'border-[rgb(var(--border))]'
                            } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-[rgb(var(--muted))] border ${
                            errors.subject ? 'border-red-500' : 'border-[rgb(var(--border))]'
                          } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors`}
                        >
                          <option value="">Select a subject</option>
                          <option value="project">Project Inquiry</option>
                          <option value="collaboration">Collaboration</option>
                          <option value="freelance">Freelance Opportunity</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg bg-[rgb(var(--muted))] border ${
                            errors.message ? 'border-red-500' : 'border-[rgb(var(--border))]'
                          } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none`}
                          placeholder="Tell me about your project or inquiry..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <VscSend className="text-lg" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      {submitStatus === 'error' && (
                        <p className="text-center text-red-500 text-sm">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>
                  )}
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section className="pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <AnimatedCard className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Available for freelance work</h3>
                    <p className="text-sm text-muted-foreground">
                      Open to new opportunities and collaborations
                    </p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => window.location.href = '/portfolio'}>
                  View My Work
                </Button>
              </AnimatedCard>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

