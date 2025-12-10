import { ExternalLink, Github, Play, Heart, MessageSquare, Users, Folder, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "VideoTubes",
    category: "Full Stack Application",
    description: "A full-stack YouTube-like video platform with user authentication, video uploads, comments, likes, subscriptions, and playlists.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=500&fit=crop",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    features: [
      { icon: Play, label: "Video Upload" },
      { icon: Heart, label: "Likes" },
      { icon: MessageSquare, label: "Comments" },
      { icon: Users, label: "Subscriptions" },
    ],
    github: "https://github.com/Surya1712/VideoTubes",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6 animate-fade-up">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">My Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg px-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Projects that showcase my skills in full-stack development and passion for creating user-centric applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Gradient Border Container */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan-500 to-emerald-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative glass-card rounded-2xl sm:rounded-3xl overflow-hidden bg-background/95 backdrop-blur-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/20 lg:to-background" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-full shadow-lg shadow-primary/25">
                        ✨ Featured
                      </span>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <p className="text-xs sm:text-sm text-primary font-semibold mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <div 
                          key={feature.label} 
                          className="flex items-center gap-2 p-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group/feature"
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-muted-foreground">{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-secondary-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                          style={{ animationDelay: `${tagIndex * 0.05}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 shadow-lg shadow-primary/25 text-primary-foreground group/btn transition-all duration-300" 
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Code
                          <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
