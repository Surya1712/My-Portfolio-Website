import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "surajmakwana1712@gmail.com", href: "mailto:surajmakwana1712@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 75670 24863", href: "tel:+917567024863" },
  { icon: MapPin, label: "Location", value: "Gandhinagar, Gujarat, India", href: "#" },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/suraj-makwana1712", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-500" },
  { icon: Github, href: "https://github.com/Surya1712", label: "GitHub", color: "hover:bg-gray-500/20 hover:text-foreground" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Have a project in mind or looking to hire a developer? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Contact Information
            </h3>
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 glass-card rounded-xl sm:rounded-2xl group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-foreground font-medium text-sm sm:text-base truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            <h4 className="font-medium text-foreground mb-4 text-sm sm:text-base">Follow Me</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 sm:mt-10 aspect-video glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117494.16906851086!2d72.55455795!3d23.21553495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c6d6809%3A0xd9e5f0ec0e2c6e17!2sGandhinagar%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location - Gandhinagar, Gujarat"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient hover:opacity-90 shadow-soft text-primary-foreground text-base sm:text-lg py-5 sm:py-6">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;