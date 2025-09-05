import { useState } from "react";
import dummyTrips from "../data/trips";
import TripList from "../components/TripList";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";

export default function Dashboard() {
    const [trips, setTrips] = useState(dummyTrips);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("ALL");
    const [currentPage, setCurrentPage] = useState(1);
    const tripsPerPage = 5;

    const filteredTrips = trips
        .filter(trip => trip.destination.toLowerCase().includes(search.toLowerCase()))
        .filter(trip => (filter === "ALL" ? true : trip.status === filter));

    const indexOfLast = currentPage * tripsPerPage;
    const indexOfFirst = indexOfLast - tripsPerPage;
    const currentTrips = filteredTrips.slice(indexOfFirst, indexOfLast);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">
                            Trip Dashboard
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Manage and organize all your travel adventures in one beautiful place
                        </p>
                        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    {/* Search and Filter Section */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                                    Your Trips
                                </h2>
                                <p className="text-gray-600">
                                    {filteredTrips.length === trips.length
                                        ? `${trips.length} total trips`
                                        : `${filteredTrips.length} of ${trips.length} trips shown`
                                    }
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {filteredTrips.length} Results
                                </div>
                            </div>
                        </div>

                        <SearchFilter
                            search={search}
                            setSearch={setSearch}
                            filter={filter}
                            setFilter={setFilter}
                        />
                    </div>

                    {/* Trip List Section */}
                    <div className="px-8 py-6">
                        {currentTrips.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No trips found</h3>
                                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                    {search || filter !== "ALL"
                                        ? "Try adjusting your search criteria or filters to find what you're looking for"
                                        : "Start your journey by adding your first amazing trip"
                                    }
                                </p>
                                {!search && filter === "ALL" && (
                                    <a
                                        href="/add"
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                        Add Your First Trip
                                    </a>
                                )}
                            </div>
                        ) : (
                            <TripList trips={currentTrips} setTrips={setTrips} />
                        )}
                    </div>

                    {/* Pagination Section */}
                    {filteredTrips.length > tripsPerPage && (
                        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                            <Pagination
                                totalTrips={filteredTrips.length}
                                tripsPerPage={tripsPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
