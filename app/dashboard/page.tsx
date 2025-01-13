"use client";

import ResumeUpload from "@/components/ResumeUpload";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Welcome! Here, you can view job matches and company research tailored
          for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Your Job Matches
            </h2>
            <p className="text-gray-600">No matches yet. Start exploring!</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Recent Company Research
            </h2>
            <p className="text-gray-600">No data available. Stay tuned!</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Upload Your Resume
          </h2>
          <ResumeUpload />
        </div>
      </div>
    </div>
  );
}
