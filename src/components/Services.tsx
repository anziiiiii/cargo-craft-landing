import { Truck, Package, Globe, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Local Delivery",
    description: "Fast and reliable local delivery services for your cargo needs",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Global shipping solutions with tracking and insurance",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Secure storage facilities for your goods",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical delivery services for urgent shipments",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive logistics solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;