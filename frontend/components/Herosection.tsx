export default function HeroSection() {
  return (
    <section className="text-center bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl py-12 px-4 shadow-lg mb-10">
      <h1 className="text-4xl font-bold mb-4">Offline Coding Contest Begins Now!</h1>
      <p className="text-lg mb-6">
        Compete, solve, and climb the leaderboard without internet access
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 shadow">
          Join Current Contest
        </button>
        <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-blue-700">
          View Problems
        </button>
      </div>
    </section>
  );
}