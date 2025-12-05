import { Code, Database, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Technologies",
    skills: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Postman", "Git", "GitHub"],
  },
  {
    icon: Lightbulb,
    title: "Key Concepts",
    skills: ["RESTful APIs", "JWT Authentication", "Responsive Design", "CRUD Operations", "MVC Architecture"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            My Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Technical Skills
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Proficient in modern web development technologies and best practices for building scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
