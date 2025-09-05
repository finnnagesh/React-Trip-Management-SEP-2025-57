export default function SummaryWidget({ trips }) {
    const totalTrips = trips.length;
    const avgPrice = totalTrips ? (trips.reduce((acc, t) => acc + t.price, 0) / totalTrips).toFixed(2) : 0;

    return (
        <div className="flex space-x-4 mb-4">
            <div className="p-4 bg-blue-100 rounded">Total Trips: {totalTrips}</div>
            <div className="p-4 bg-green-100 rounded">Average Price: ${avgPrice}</div>
        </div>
    );
}
