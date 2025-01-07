import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const bookingData = {
      id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      pickup: formData.get("pickup"),
      delivery: formData.get("delivery"),
      details: formData.get("details"),
      status: "pending",
      date: new Date().toISOString().split("T")[0],
    };

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    
    // Add new booking
    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, bookingData])
    );
    
    toast({
      title: "Booking Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });
    
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Shipment
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you with a quote
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Address
              </label>
              <Input
                id="pickup"
                name="pickup"
                required
                placeholder="Enter pickup address"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="delivery" className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <Input
                id="delivery"
                name="delivery"
                required
                placeholder="Enter delivery address"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                Cargo Details
              </label>
              <Textarea
                id="details"
                name="details"
                required
                placeholder="Please provide details about your cargo (type, weight, dimensions, etc.)"
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Booking Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;