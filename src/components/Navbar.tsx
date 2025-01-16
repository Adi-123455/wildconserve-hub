import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-montserrat font-bold text-forest">
            WildTrack
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#wildlife" className="text-forest hover:text-forest-light transition-colors">
              Wildlife
            </a>
            <a href="#guidelines" className="text-forest hover:text-forest-light transition-colors">
              Guidelines
            </a>
            <a href="#map" className="text-forest hover:text-forest-light transition-colors">
              Map
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