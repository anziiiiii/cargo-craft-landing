import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative bg-gradient-to-br from-primary to-secondary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fast & Reliable Cargo Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Your trusted partner in global logistics. We deliver your cargo safely and on time,
            whether it's across the city or across the world.
          </p>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-colors group"
          >
            Book Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;