import { ArrowDown, Github, Linkedin, Code2, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Badge */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">Available for Opportunities</span>
              </div>
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl font-medium block mb-3">Hello, I'm</span>
                <span className="text-foreground">Suraj</span>
                <br />
                <span className="text-gradient">Makwana</span>
              </h1>
            </div>

            {/* Role */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Full Stack Developer</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Specializing in <span className="text-primary font-medium">MERN stack</span> development. Building responsive, user-friendly applications with clean, maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-gradient hover:opacity-90 shadow-hover text-primary-foreground" asChild>
                <a href="#projects">
                  <Sparkles className="w-4 h-4 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-border hover:border-primary hover:bg-primary/10" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="h-px flex-1 max-w-[60px] bg-border" />
              <a
                href="https://github.com/Surya1712"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/suraj-makwana1712"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Bento Cards - 5 columns */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Stats Card */}
              <div className="glass-card p-6 rounded-2xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl font-display font-bold text-gradient mb-2">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              {/* Projects Card */}
              <div className="glass-card p-6 rounded-2xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl font-display font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              
              {/* Tech Stack Card - Full Width */}
              <div className="col-span-2 glass-card p-6 rounded-2xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="text-sm text-muted-foreground mb-4">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-sm bg-secondary/80 text-secondary-foreground rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Card */}
              <div className="col-span-2 glass-card p-6 rounded-2xl animate-fade-up relative overflow-hidden" style={{ animationDelay: "0.6s" }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient opacity-20 blur-2xl" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Open to Work</div>
                    <div className="text-sm text-muted-foreground">Full-time / Freelance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs mb-2 opacity-60">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;