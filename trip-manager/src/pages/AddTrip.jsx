import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm";
import dummyTrips from "../data/trips";

export default function AddTrip() {
    const [trips, setTrips] = useState(dummyTrips);
    const navigate = useNavigate();

    const handleAdd = (data) => {
        const newTrip = {
            ...data,
            id: trips.length ? Math.max(...trips.map(t => t.id)) + 1 : 1,
        };
        setTrips(prev => [...prev, newTrip]);
        navigate("/"); // redirect to dashboard
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Add New Trip</h2>
            <TripForm onSubmit={handleAdd} defaultValues={{}} />
        </div>
    );
}
