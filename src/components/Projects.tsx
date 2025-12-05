import { ExternalLink, Github, Play, Heart, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "VideoTubes",
    category: "Full Stack Application",
    description: "A full-stack YouTube-like video platform with user authentication, video uploads, comments, likes, subscriptions, and playlists.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
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
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Projects that showcase my skills in full-stack development and passion for creating user-centric applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-sm text-primary font-medium">{project.category}</p>
                  {project.featured && (
                    <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <feature.icon className="w-4 h-4 text-primary" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
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
