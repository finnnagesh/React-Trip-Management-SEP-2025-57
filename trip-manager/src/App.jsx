import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddTrip from "./pages/AddTrip";
import EditTrip from "./pages/EditTrip";

export default function App() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add" element={<AddTrip />} />
                    <Route path="/edit/:id" element={<EditTrip />} />
                </Routes>
            </div>
        </>
    );
}
