import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Booking {
  id: number;
  name: string;
  email: string;
  pickup: string;
  delivery: string;
  details: string;
  status: "pending" | "accepted" | "rejected";
  date: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  // Mock data - in a real app, this would come from a backend
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      pickup: "Kozhikode",
      delivery: "Wayanad",
      details: "2 boxes of electronics",
      status: "pending",
      date: "2024-02-20",
    },
    // Add more mock bookings as needed
  ]);

  const handleStatusChange = (id: number, newStatus: "accepted" | "rejected") => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
    toast({
      title: "Status Updated",
      description: `Booking #${id} has been ${newStatus}`,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Booking Management Dashboard</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Delivery</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.pickup}</TableCell>
                <TableCell>{booking.delivery}</TableCell>
                <TableCell>{booking.details}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      booking.status === "accepted"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell className="space-x-2">
                  {booking.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => handleStatusChange(booking.id, "accepted")}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleStatusChange(booking.id, "rejected")}
                        variant="destructive"
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;