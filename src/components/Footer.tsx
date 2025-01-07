import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4">CargoSwift</h3>
            <p className="text-sm">
              Your trusted partner in global logistics. Delivering excellence since 2024.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@cargoswift.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Logistics Ave, CA 90210</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book Now
                </a>
              </li>
              <li>
                <a href="/admin" className="hover:text-white transition-colors">
                  Admin Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 CargoSwift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;