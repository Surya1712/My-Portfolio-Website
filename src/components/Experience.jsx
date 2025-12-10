import { Briefcase, Calendar, MapPin, Award, CheckCircle, Rocket } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "Tech Creature Solution",
    location: "Gandhinagar",
    period: "May 2025 – Present",
    current: true,
    responsibilities: [
      "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Developed responsive UIs and implemented RESTful APIs for dynamic data exchange",
      "Collaborated on scalable solutions and optimized backend performance",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Career</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                Work <span className="text-gradient">Experience</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed lg:text-right">
              Building real-world applications and gaining hands-on experience in full-stack development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Experience Card - Spans 2 columns */}
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="lg:col-span-2 glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient opacity-10 blur-3xl" />
                
                {/* Current Badge */}
                {exp.current && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 text-sm font-bold bg-gradient text-primary-foreground rounded-full flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      Current
                    </span>
                  </div>
                )}
                
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-16 h-16 bg-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.responsibilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Side Stats Cards */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <Rocket className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-display font-bold text-gradient mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Months of Experience</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl">
                <div className="text-3xl font-display font-bold text-gradient mb-2">MERN</div>
                <div className="text-sm text-muted-foreground">Stack Specialization</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["MongoDB", "Express", "React", "Node"].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-gradient text-primary-foreground">
                <div className="text-lg font-bold mb-2">Looking Forward</div>
                <p className="text-sm opacity-90">
                  Eager to learn new technologies and contribute to impactful projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;