import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export default function CodingContestUI() {
  return (
    <div className="p-6 space-y-6 ml-20 mr-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-2">Offline Coding Contest Begins Now!</h1>
        <p className="mb-4">Compete, solve, and climb the leaderboard without internet access</p>
        <div>
          <Button variant="secondary">Join Current Contest</Button>
        </div>
      </div>

      {/* Live Contest Section */}
      <Card className="relative border-l-8 border-red-200 bg-red-50 shadow-md">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame className="text-red-400" />
              <h2 className="text-xl font-semibold text-red-500">Live Contest: CodeLocal Round #1</h2>
            </div>
            <span className="text-xs font-semibold text-white bg-red-400 px-2 py-1 rounded-full shadow">LIVE</span>
          </div>
          <p className="text-gray-600 mb-4">Started: Jun 28, 2023 15:30 • Duration: 2 hours</p>
          <Button className="bg-red-400 hover:bg-red-600 text-white w-full">Register Now</Button>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="md:col-span-2">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-600">Upcoming Contests</h2>
            <div className="space-y-3">
              {[
                { name: 'Algorithm Challenge #42', date: 'Jul 01, 2023 10:00', length: '2 hours 30 minutes', status: 'Coming Soon' },
                { name: 'Speed Coding Sprint', date: 'Jul 05, 2023 16:00', length: '1 hour 30 minutes', status: 'Coming Soon' },
                { name: 'CodeLocal Educational Round', date: 'Jul 10, 2023 14:00', length: '2 hours', status: 'Not Yet Open' },
              ].map((contest, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center border-b pb-2 px-2 py-3 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <div>
                    <div className="font-medium text-gray-500">{contest.name}</div>
                    <div className="text-sm text-gray-400">{contest.date} • {contest.length}</div>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">{contest.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Participants */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-500">Top Participants</h2>
            <div className="space-y-3">
              {[
                { name: 'AlgorithmMaster', score: 2100, tag: 'Master', university: 'Stanford University' },
                { name: 'CodeNinja', score: 1950, tag: 'Expert', university: 'MIT' },
                { name: 'ByteMaster', score: 1875, tag: 'Expert', university: 'UC Berkeley' },
                { name: 'CodeWizard', score: 1820, tag: 'Expert', university: 'Carnegie Mellon' },
                { name: 'DataStructureGuru', score: 1750, tag: 'Specialist', university: 'CalTech' },
              ].map((p, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-2 py-3 rounded-md transition-all duration-200 cursor-pointer hover:bg-gray-100 text-gray-400 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <div>
                    <div className="font-medium">{i + 1}. {p.name} <span className="text-sm text-yellow-600">({p.tag})</span></div>
                    <div className="text-sm text-gray-500">{p.university}</div>
                  </div>
                  <span className="font-bold text-blue-600">{p.score}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

       <footer className="text-center text-sm text-gray-500 pt-10">
        Made with ❤️ by <span className="font-semibold text-blue-600">Qbit Tech Club</span>
      </footer>
    </div>
  );
}
