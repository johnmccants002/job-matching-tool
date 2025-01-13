import React, { useState } from "react";
import axios from "axios";

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setUploadStatus("");
      } else {
        setUploadStatus(
          "Invalid file type. Please upload a PDF or Word document."
        );
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setUploadStatus("Uploading...");
      const response = await axios.post(
        "http://localhost:3001/api/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("Upload successful!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading resume:", error);
      setUploadStatus("Failed to upload resume. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {file && <p className="mt-2 text-gray-600">Selected file: {file.name}</p>}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {uploadStatus && (
        <p className="mt-4 text-sm text-red-500">{uploadStatus}</p>
      )}
    </div>
  );
};

export default ResumeUpload;
