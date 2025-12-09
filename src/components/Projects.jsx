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
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6">
            <Folder className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">My Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg px-4">
            Projects that showcase my skills in full-stack development and passion for creating user-centric applications.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-hover"
            >
              {/* Image */}
              <div className="relative aspect-video sm:aspect-[2/1] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold bg-gradient text-primary-foreground rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 lg:p-10">
                <p className="text-xs sm:text-sm text-primary font-semibold mb-2 sm:mb-3 uppercase tracking-wider">{project.category}</p>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                  {project.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center">
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground rounded-lg sm:rounded-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="bg-gradient hover:opacity-90 shadow-soft text-primary-foreground" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      View on GitHub
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
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