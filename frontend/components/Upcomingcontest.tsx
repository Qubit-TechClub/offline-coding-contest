const upcoming = [
  { name: "Algorithm Challenge #42", time: "Jul 01, 2025 10:00", length: "2h 30m", status: "Coming Soon" },
  { name: "Speed Coding Sprint", time: "Jul 05, 2025 16:00", length: "1h 30m", status: "Coming Soon" }
];

export default function UpcomingContests() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 text-blue-600">📅 Upcoming Contests</h2>
      <ul className="space-y-4">
        {upcoming.map((contest, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">{contest.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contest.time} • {contest.length}
              </p>
            </div>
            <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">
              {contest.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
