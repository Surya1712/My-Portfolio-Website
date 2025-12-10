import { ArrowDown, Github, Linkedin, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const titles = ["Full Stack Developer", "MERN Stack Expert", "React Enthusiast", "Problem Solver"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < title.length) {
          setDisplayText(title.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(title.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-500/20 via-accent/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:80px_80px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 sm:mb-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">Available for Opportunities</span>
            </div>
          </div>

          {/* Main Content with Avatar */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Avatar Section */}
            <div className="relative animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-primary to-emerald-400 animate-spin-slow opacity-75 blur-sm" style={{ animationDuration: "8s" }} />
                <div className="absolute inset-1 rounded-full bg-background" />
                {/* Avatar Container */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center overflow-hidden border-2 border-cyan-500/30">
                  {/* Placeholder Avatar with Initials */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-cyan-400 via-primary to-emerald-400 bg-clip-text text-transparent">
                      SM
                    </span>
                  </div>
                </div>
                {/* Floating Decorations */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-primary rounded-full animate-bounce shadow-[0_0_20px_rgba(6,182,212,0.5)]" style={{ animationDelay: "0.5s" }} />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-bounce shadow-[0_0_15px_rgba(52,211,153,0.5)]" style={{ animationDelay: "1s" }} />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Typing Animation Greeting */}
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  <span className="text-muted-foreground">Hello, I'm a</span>
                  <span className="text-cyan-400 font-semibold min-w-[200px] sm:min-w-[280px] text-left">
                    {displayText}
                    <span className="animate-pulse text-primary">|</span>
                  </span>
                </div>
              </div>

              {/* Name with Creative Layout */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none">
                  <span className="text-foreground">Suraj</span>
                  <br />
                  <span className="inline-block mt-2 bg-gradient-to-r from-cyan-400 via-primary to-emerald-400 bg-clip-text text-transparent">Makwana</span>
                </h1>
              </div>

              {/* Animated Tagline */}
              <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-muted-foreground">
                  <span>I build</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500 to-primary text-white rounded-full font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    beautiful
                  </span>
                  <span>&</span>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold text-sm sm:text-base">
                    scalable
                  </span>
                  <span>web apps</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up px-4 lg:px-0" style={{ animationDelay: "0.4s" }}>
                Specializing in MERN stack development, creating responsive and user-friendly applications with clean, maintainable code.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-up pt-4" style={{ animationDelay: "0.5s" }}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-primary hover:opacity-90 shadow-[0_0_30px_rgba(6,182,212,0.3)] text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]" asChild>
                  <a href="#projects">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View My Work
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-emerald-400/50 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-400/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-6 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <a
                  href="https://github.com/Surya1712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/suraj-makwana1712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-2xl flex items-center justify-center text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <a 
            href="#about" 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-cyan-400 transition-colors group"
          >
            <span className="text-xs mb-2 opacity-60">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
