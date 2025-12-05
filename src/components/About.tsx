import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 text-center">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12 text-center">
            Who I Am
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a motivated and detail-oriented Full Stack Developer with hands-on internship experience building responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </p>
                <p>
                  Skilled in developing RESTful APIs, integrating front-end and back-end systems, and managing databases. I'm passionate about building scalable web apps and writing clean, maintainable code.
                </p>
                <p>
                  When I'm not coding, you'll find me listening to music, traveling to new places, or gaming.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Gandhinagar, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:surajmakwana1712@gmail.com" className="hover:text-primary transition-colors">
                    surajmakwana1712@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+917567024863" className="hover:text-primary transition-colors">
                    +91 75670 24863
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-muted-foreground">
                  Samarth BCA College, Himatnagar
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-muted-foreground">May 2022</span>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    SGPA: 8.0
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Gujarati", "Hindi", "English"].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
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
    </section>
  );
};

export default About;
