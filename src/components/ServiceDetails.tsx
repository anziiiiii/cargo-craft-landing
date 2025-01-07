import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#ea384c] mb-4">Service Coverage</h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">KOZHIKODE TO WAYANAD, KOZHIKODE TO PALAKKAD</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#ea384c]" />
                <span className="text-gray-700">7356182987, 7356072987</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#ea384c]" />
                <span className="text-gray-700">marakkarexpresscargo@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <MapPin className="h-5 w-5 text-[#ea384c]" />
              <span className="text-gray-700">PERUMANNA, KOZHIKODE</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="h-5 w-5 text-[#ea384c]" />
              <span className="text-gray-700 font-semibold">DAILY SERVICE</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Service Locations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-[#ea384c]/10 transition-colors"
                >
                  <MapPin className="h-4 w-4 text-[#ea384c]" />
                  <span className="text-gray-700">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;