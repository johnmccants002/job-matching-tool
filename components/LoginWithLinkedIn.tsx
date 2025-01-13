"use client";

import React from "react";

const LoginWithLinkedIn = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/auth/linkedin/login";
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      Login with LinkedIn
    </button>
  );
};

export default LoginWithLinkedIn;
