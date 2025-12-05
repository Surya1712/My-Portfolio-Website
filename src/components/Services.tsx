import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native-like experiences on iOS and Android.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description: "Complete online store setups with secure payments, inventory management, and analytics.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with secure APIs, database design, and cloud infrastructure.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing applications with performance audits and optimization strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Services I Offer
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From concept to deployment, I provide end-to-end solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
