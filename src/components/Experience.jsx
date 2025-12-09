import { Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

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
    <section id="experience" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Career</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Building real-world applications and gaining hands-on experience in full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl hover:border-primary/50 transition-all duration-500"
            >
              {/* Current Badge */}
              {exp.current && (
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <span className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold bg-gradient text-primary-foreground rounded-full flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Current
                  </span>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold text-base sm:text-lg lg:text-xl">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{exp.location}</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {exp.responsibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;