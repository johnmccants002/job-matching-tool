const mockResults = [
  {
    jobTitle: "Frontend Developer",
    company: "Example Inc.",
    location: "Remote",
    summary: "An innovative company looking for a talented Frontend Developer.",
  },
  {
    jobTitle: "Backend Engineer",
    company: "TechCorp",
    location: "Remote",
    summary: "Join our team to work on scalable backend systems.",
  },
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Matches</h1>
        {mockResults.map((result, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 mb-4 last:border-b-0"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {result.jobTitle}
            </h2>
            <p className="text-gray-600">
              <strong>Company:</strong> {result.company}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {result.location}
            </p>
            <p className="text-gray-600">{result.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
