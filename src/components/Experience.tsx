import { Briefcase, Calendar, MapPin } from "lucide-react";

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
    <section id="experience" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            Career
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Building real-world applications and gaining hands-on experience in full-stack development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="relative bg-background p-8 rounded-2xl border border-border"
            >
              {exp.current && (
                <span className="absolute top-6 right-6 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Current
                </span>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
