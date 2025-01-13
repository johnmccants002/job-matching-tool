import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Job Matching Tool",
  description: "Find remote jobs and research companies effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white py-4">
          <div className="max-w-4xl mx-auto flex justify-between px-4">
            <Link href="/dashboard" className="font-semibold hover:underline">
              Dashboard
            </Link>
            <Link href="/results" className="font-semibold hover:underline">
              Results
            </Link>
            <Link href="/profile" className="font-semibold hover:underline">
              Profile
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
