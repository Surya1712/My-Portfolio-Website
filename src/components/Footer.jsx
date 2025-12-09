import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground text-sm sm:text-base">Suraj Makwana</span>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 text-center">
            © {currentYear} • Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;