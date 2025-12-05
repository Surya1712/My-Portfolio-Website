const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "10+", label: "Awards Won" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-card rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="John Doe - Developer and Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Turning Ideas Into
              <br />
              Reality
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                Hello! I'm John Doe, a full-stack developer and UI/UX designer with over 5 years of experience creating digital solutions that make an impact.
              </p>
              <p>
                I specialize in building responsive websites, web applications, and mobile apps using modern technologies like React, Node.js, and TypeScript. My approach combines clean code with thoughtful design to deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying a cup of coffee while sketching new ideas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-display text-3xl font-semibold text-foreground">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
