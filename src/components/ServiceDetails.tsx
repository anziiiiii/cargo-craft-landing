import { MapPin, Phone, Mail, Clock, Truck, Package, Shield, ArrowRight } from "lucide-react";

const ServiceDetails = () => {
  const locations = [
    "AREEKODE", "MUKKAM", "LAKKIDI", "EDAVANNA", "KOODARANH", "VYTHIRI",
    "NILAMBUR", "THIRUVAMBADY", "CHUNDEL", "KONDOTTY", "RODANCHERY",
    "KALPETTA", "MANJERY", "KODUVALLY", "MUTTIL", "MALAPPURAM",
    "THAMARASSERY", "MEPPADI", "PERINTHALMANNA", "ESTATEMUKKU",
    "BANGAPUZHA", "MANANTHAVADI", "CHERPULASSERY", "MEENANGADI",
    "MANNARAKKAD", "KAITHAPOYIL", "SULTHAN BATHERY", "MUNDOOR",
    "ADIVARAM", "KONGAD", "PALAKKAD"
  ];

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery for local areas"
    },
    {
      icon: Package,
      title: "Safe Handling",
      description: "Professional care for your packages"
    },
    {
      icon: Shield,
      title: "Secure Service",
      description: "Full safety guarantee for shipments"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-[#ea384c] mb-6">
              Your Trusted Cargo Partner
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">
              KOZHIKODE TO WAYANAD, KOZHIKODE TO PALAKKAD
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#ea384c]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-[#ea384c]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <Phone className="h-6 w-6 text-[#ea384c]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="text-gray-700 font-medium">7356182987, 7356072987</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <Mail className="h-6 w-6 text-[#ea384c]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="text-gray-700 font-medium">marakkarexpresscargo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <MapPin className="h-6 w-6 text-[#ea384c]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700 font-medium">PERUMANNA, KOZHIKODE</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <Clock className="h-6 w-6 text-[#ea384c]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Service Hours</p>
                    <p className="text-gray-700 font-medium">DAILY SERVICE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Service Locations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-[#ea384c]/10 transition-all duration-300 group cursor-pointer"
                  >
                    <MapPin className="h-5 w-5 text-[#ea384c] group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{location}</span>
                    <ArrowRight className="h-4 w-4 text-[#ea384c] opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;