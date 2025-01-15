"use client";

import { useState } from "react";

const ResultsPage = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const fetchJobs = async (file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("http://localhost:3001/api/jobs/match", {
        method: "POST",
        body: formData, // Send file as FormData
      });

      if (!response.ok) {
        throw new Error("Failed to fetch job matches.");
      }

      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setError("Please upload a resume file.");
      return;
    }
    setError("");
    await fetchJobs(resumeFile);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Upload Resume</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4 block w-full text-gray-800"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <h2 className="text-xl font-semibold mb-4">Job Matches</h2>
          {jobs.length === 0 ? (
            <p className="text-gray-600">No matches found.</p>
          ) : (
            <ul className="space-y-4">
              {jobs.map((job, index) => (
                <li
                  key={index}
                  className="p-4 border rounded-lg shadow-sm hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600">{job.company_name}</p>
                  <a
                    href={job.url}
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
    </div>
  );
};

export default ResultsPage;
