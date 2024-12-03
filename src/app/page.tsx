import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
      <HydrateClient>
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-blue-500 to-blue-300 text-white">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center text-center py-16 px-8">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to Airtable Clone
            </h1>
            <p className="text-lg mb-6 max-w-2xl">
              Organize your data seamlessly with a clean and intuitive interface.
              Create bases, tables, and customize your workspace with ease. Log in
              with Discord to get started.
            </p>
            <Link
                href="/api/auth/signin?callbackUrl=/dashboard"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition"
            >
              Sign In with Discord
            </Link>

          </section>

          {/* Features Section */}
          <section className="flex flex-wrap justify-center gap-6 px-8 py-16">
            <div className="w-80 p-6 bg-white text-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Collaborate with Ease</h3>
              <p className="mt-2 text-gray-600">
                Share your data and collaborate with your team.
              </p>
            </div>
            <div className="w-80 p-6 bg-white text-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Customizable Tables</h3>
              <p className="mt-2 text-gray-600">
                Add columns and rows dynamically to fit your needs.
              </p>
            </div>
            <div className="w-80 p-6 bg-white text-black rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="mt-2 text-gray-600">
                Handle up to 15k rows without lag using advanced table
                virtualization.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex justify-center items-center h-16 bg-blue-600 text-white">
            <p>© 2024 Airtable Clone. All rights reserved.</p>
          </footer>
        </main>
      </HydrateClient>
  );
}
