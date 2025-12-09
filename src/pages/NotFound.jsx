import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-display text-8xl sm:text-9xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Button size="lg" className="bg-gradient hover:opacity-90 text-primary-foreground" asChild>
          <a href="/">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;