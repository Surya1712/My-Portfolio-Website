import { GraduationCap, MapPin, Mail, Phone, User, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">About Me</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Who I <span className="text-gradient">Am</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            {/* Bio - 3 columns */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  <p className="text-base sm:text-lg">
                    I'm a motivated and detail-oriented <span className="text-foreground font-medium">Full Stack Developer</span> with hands-on internship experience building responsive web applications using the MERN stack.
                  </p>
                  <p>
                    Skilled in developing RESTful APIs, integrating front-end and back-end systems, and managing databases. I'm passionate about building scalable web apps and writing clean, maintainable code.
                  </p>
                  <p>
                    When I'm not coding, you'll find me <span className="text-primary">listening to music</span>, <span className="text-accent">traveling</span> to new places, or gaming.
                  </p>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <a href="mailto:surajmakwana1712@gmail.com" className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:border-primary/50 transition-all group">
                  <Mail className="w-5 h-5 text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground truncate">surajmakwana1712@gmail.com</p>
                </a>
                <a href="tel:+917567024863" className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:border-primary/50 transition-all group">
                  <Phone className="w-5 h-5 text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">+91 75670 24863</p>
                </a>
                <div className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl">
                  <MapPin className="w-5 h-5 text-primary mb-2 sm:mb-3" />
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">Gandhinagar, India</p>
                </div>
              </div>
            </div>

            {/* Education - 2 columns */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="p-4 sm:p-5 bg-secondary/50 rounded-xl sm:rounded-2xl">
                    <h4 className="font-bold text-foreground text-base sm:text-lg mb-1 sm:mb-2">
                      Bachelor of Computer Applications
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-3">
                      Samarth BCA College, Himatnagar
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm text-muted-foreground">May 2022</span>
                      <span className="px-3 py-1 text-xs font-bold bg-gradient text-primary-foreground rounded-full">
                        SGPA: 8.0
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Gujarati", "Hindi", "English"].map((lang) => (
                        <span
                          key={lang}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-lg sm:rounded-xl font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;