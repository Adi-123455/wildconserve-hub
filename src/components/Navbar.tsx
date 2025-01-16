import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-forest hover:text-forest-light transition-colors">
            WildTrack
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/species" 
              className={`text-forest hover:text-forest-light transition-colors ${
                location.pathname === "/species" ? "font-semibold" : ""
              }`}
            >
              Species
            </Link>
            <Link 
              to="/projects" 
              className={`text-forest hover:text-forest-light transition-colors ${
                location.pathname === "/projects" ? "font-semibold" : ""
              }`}
            >
              Projects
            </Link>
            <a href="#guidelines" className="text-forest hover:text-forest-light transition-colors">
              Guidelines
            </a>
            <Button className="bg-forest hover:bg-forest-light text-white">
              Support Us
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;