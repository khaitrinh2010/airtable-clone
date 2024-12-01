"use client";
export default function Home() {
  return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-500 text-gray-800">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Airtable Clone
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg text-center">
          Organize your data seamlessly with a clean and intuitive interface.
          Create bases, tables, and customize your workspace with ease. Log in
          with Google to get started.
        </p>

        {/* Button Section */}
        <button
            onClick={() => {
              window.location.href = "/api/auth/signin";
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Sign In with Google
        </button>

        {/* Decorative Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Collaborate with Ease</h3>
            <p className="text-sm text-gray-600">
              Share your data and collaborate with your team.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Customizable Tables</h3>
            <p className="text-sm text-gray-600">
              Add columns and rows dynamically to fit your needs.
            </p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">Lightning Fast</h3>
            <p className="text-sm text-gray-600">
              Handle up to 15k rows without lag using advanced table virtualization.
            </p>
          </div>
        </div>
      </div>
  );
}
