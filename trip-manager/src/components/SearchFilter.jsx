export default function SearchFilter({ search, setSearch, filter, setFilter }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 space-y-2 md:space-y-0">
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by destination"
                className="border p-2 rounded w-full md:w-1/2"
            />
            <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="border p-2 rounded w-full md:w-1/4"
            >
                <option value="ALL">All Status</option>
                <option value="PLANNED">Planned</option>
                <option value="ONGOING">Ongoing</option>
                <option value="COMPLETED">Completed</option>
            </select>
        </div>
    );
}
