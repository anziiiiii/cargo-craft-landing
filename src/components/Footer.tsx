import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4">MARAKKAR</h3>
            <p className="text-sm">
              Express Cargo Service - Daily Service from Kozhikode to Wayanad, Kozhikode to Palakkad
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>7356182987, 7356072987</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>marakkarexpresscargo@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Perumanna, Kozhikode</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <ul className="space-y-1">
                  <li>Areekode</li>
                  <li>Mukkam</li>
                  <li>Lakkidi</li>
                  <li>Edavanna</li>
                  <li>Koodaranji</li>
                  <li>Vythiri</li>
                  <li>Nilambur</li>
                  <li>Thiruvambady</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>Kalpetta</li>
                  <li>Manjeri</li>
                  <li>Malappuram</li>
                  <li>Palakkad</li>
                  <li>Mananthavadi</li>
                  <li>Sulthan Bathery</li>
                  <li>Kondotty</li>
                  <li>Thamarassery</li>
                </ul>
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
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 Marakkar Express Cargo Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;