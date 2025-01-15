"use client";

import { useEffect, useState } from "react";

const ResultsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/jobs/match", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ skills: ["JavaScript", "React", "Node.js"] }), // Replace with real data if available
        });

        if (!response.ok) {
          throw new Error("Failed to fetch job matches.");
        }

        const data = await response.json();
        setJobs(data.jobs || []);
      } catch (err) {
        setError(err.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Matches</h1>
        {jobs.length === 0 ? (
          <p className="text-gray-600">No matches found.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-sm hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.company_name}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Job
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
