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
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Folder className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">My Work</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed lg:text-right">
              Projects showcasing my skills in full-stack development and passion for creating user-centric applications.
            </p>
          </div>

          {/* Featured Project - Large Card */}
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute top-6 left-6 px-4 py-1.5 text-sm font-bold bg-gradient text-primary-foreground rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-sm text-primary font-semibold mb-3 uppercase tracking-wider">{project.category}</p>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature.label} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="lg" className="bg-gradient hover:opacity-90 shadow-soft text-primary-foreground" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
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