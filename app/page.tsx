"use client";

export default function LoginPage() {
  const handleLogin = () => {
    // Redirect to the LinkedIn login route
    window.location.href = "http://localhost:5000/auth/linkedin/login";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Job Matching Tool
        </h1>
        <p className="text-gray-600 mb-6">
          Log in to find your next remote job and connect with potential
          employers.
        </p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login with LinkedIn
        </button>
      </div>
    </div>
  );
}
