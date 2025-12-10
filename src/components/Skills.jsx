import { Code2, Database, Wrench, Lightbulb, Zap, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    gradient: "from-violet-500 to-purple-600",
    skills: ["JavaScript (ES6+)", "React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    title: "Backend",
    gradient: "from-cyan-500 to-blue-600",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    icon: Database,
    title: "Database",
    gradient: "from-emerald-500 to-teal-600",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    gradient: "from-orange-500 to-red-600",
    skills: ["VS Code", "Postman", "Git", "GitHub"],
  },
  {
    icon: Lightbulb,
    title: "Concepts",
    gradient: "from-pink-500 to-rose-600",
    skills: ["JWT Auth", "MVC Pattern", "CRUD", "Responsive Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">My Expertise</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                Technical <span className="text-gradient">Skills</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed lg:text-right">
              Proficient in modern web development technologies and best practices for building scalable applications.
            </p>
          </div>

          {/* Skills Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:border-primary/50 transition-all duration-500 group hover:shadow-hover ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary/80 text-secondary-foreground rounded-lg font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;