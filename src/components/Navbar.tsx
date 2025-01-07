import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/marakkar-logo.png" alt="Marakkar Express Cargo" className="h-12 w-auto" />
            <div className="ml-3">
              <div className="font-bold text-[#ea384c] text-xl">MARAKKAR</div>
              <div className="text-sm text-gray-600">Express Cargo Service</div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("booking")} className="text-gray-600 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium">
                Booking
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-[#ea384c] px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#ea384c] hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ea384c] hover:bg-gray-50 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ea384c] hover:bg-gray-50 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ea384c] hover:bg-gray-50 w-full text-left"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ea384c] hover:bg-gray-50 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;