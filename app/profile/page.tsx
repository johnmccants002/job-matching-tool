const mockProfile = {
  firstName: "Jane",
  lastName: "Doe",
  headline: "Software Engineer at Example Inc.",
  email: "jane.doe@example.com",
  profilePicture: "https://via.placeholder.com/150",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-6">
          <img
            src={mockProfile.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {mockProfile.firstName} {mockProfile.lastName}
            </h1>
            <p className="text-gray-600">{mockProfile.headline}</p>
          </div>
        </div>
        <p className="text-gray-600">
          <strong>Email:</strong> {mockProfile.email}
        </p>
      </div>
    </div>
  );
}
