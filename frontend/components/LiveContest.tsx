export default function LiveContest() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-4 text-red-600">🔥 Live Contest</h2>
      <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-300 dark:border-red-700">
        <h3 className="text-xl font-semibold">CodeLocal Round #1</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Started at: Jun 28, 2025 15:30</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Duration: 2 hours</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go to Contest
        </button>
      </div>
    </div>
  );
}
