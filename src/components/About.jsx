import { GraduationCap, MapPin, Mail, Phone, User, Calendar, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Left aligned */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">About Me</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
              Know Who <span className="text-gradient">I Am</span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Bio Card - Spans 2 columns */}
            <div className="md:col-span-2 glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-base sm:text-lg">
                  I'm a motivated and detail-oriented <span className="text-foreground font-medium">Full Stack Developer</span> with hands-on internship experience building responsive web applications using the MERN stack.
                </p>
                <p>
                  Skilled in developing RESTful APIs, integrating front-end and back-end systems, and managing databases. Passionate about building scalable web apps and writing clean, maintainable code.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl row-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-secondary/50 rounded-xl">
                  <h4 className="font-bold text-foreground mb-1">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Samarth BCA College, Himatnagar
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>May 2022</span>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-gradient text-primary-foreground rounded-full">
                    SGPA: 8.0
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 text-sm">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Gujarati", "Hindi", "English"].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Cards Row */}
            <a href="mailto:surajmakwana1712@gmail.com" className="glass-card p-5 rounded-2xl hover:border-primary/50 transition-all group">
              <Mail className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground mb-1">Email</p>
              <p className="text-sm font-medium text-foreground truncate">surajmakwana1712@gmail.com</p>
            </a>

            <a href="tel:+917567024863" className="glass-card p-5 rounded-2xl hover:border-primary/50 transition-all group">
              <Phone className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="text-sm font-medium text-foreground">+91 75670 24863</p>
            </a>

            {/* Location Card */}
            <div className="md:col-span-2 lg:col-span-2 glass-card p-5 rounded-2xl">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-medium text-foreground">Gandhinagar, Gujarat, India</p>
                  <p className="text-sm text-muted-foreground mt-2">Open to remote work globally</p>
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