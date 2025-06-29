const participants = [
  { name: "AlgorithmMaster", rating: 2100, tag: "Master" },
  { name: "CodeNinja", rating: 1950, tag: "Expert" },
  { name: "ByteMaster", rating: 1875, tag: "Expert" },
  { name: "CodeWizard", rating: 1820, tag: "Expert" },
  { name: "DataStructureGuru", rating: 1750, tag: "Specialist" }
];

export default function TopParticipants() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow h-fit">
      <h2 className="text-lg font-semibold mb-4 text-purple-600">🏅 Top Participants</h2>
      <ul className="space-y-3">
        {participants.map((p, idx) => (
          <li key={idx} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Rating: {p.rating}</p>
            </div>
            <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">
              {p.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
