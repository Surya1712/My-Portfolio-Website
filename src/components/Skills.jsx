import { Code2, Database, Wrench, Lightbulb, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Technologies",
    color: "from-violet-500 to-purple-600",
    skills: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-emerald-500 to-teal-600",
    skills: ["MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-orange-500 to-red-600",
    skills: ["VS Code", "Postman", "Git", "GitHub"],
  },
  {
    icon: Lightbulb,
    title: "Key Concepts",
    color: "from-pink-500 to-rose-600",
    skills: ["RESTful APIs", "JWT Authentication", "Responsive Design", "CRUD Operations", "MVC Architecture"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-card/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">My Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Proficient in modern web development technologies and best practices for building scalable applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl hover:border-primary/50 transition-all duration-500 group hover:shadow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-secondary/80 text-secondary-foreground rounded-lg font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
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