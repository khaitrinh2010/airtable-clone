"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const [bases, setBases] = useState([]);
    const [isCreating, setIsCreating] = useState(false);

    // Redirect unauthenticated users
    useEffect(() => {
        if (status === "unauthenticated") {
            window.location.href = "/auth/signin";
        }
    }, [status]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    // Handler to create a new base
    const handleCreateBase = () => {
        setIsCreating(true);

        const nextBaseNumber = bases.length + 1;
        const newBase = {
            id: nextBaseNumber,
            name: `Untitled ${nextBaseNumber}`,
        };

        setBases((prevBases) => [...prevBases, newBase]);
        setIsCreating(false);
        window.location.href = `/dashboard/${newBase.id}`
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 h-full bg-white border-r flex flex-col justify-between">
                <div>
                    <div className="p-4 font-bold text-xl text-gray-700">Airtable</div>
                    <nav className="p-4 space-y-4">
                        <a href="#" className="block text-gray-700 hover:text-blue-500">
                            Home
                        </a>
                        <div>
                            <h3 className="text-gray-500 text-sm uppercase">All workspaces</h3>
                            <a href="#" className="block mt-1 text-gray-700 hover:text-blue-500">
                                +
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="p-4 space-y-4">
                    <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                        Templates and apps
                    </a>
                    <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                        Marketplace
                    </a>
                    <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                        Import
                    </a>
                    <button
                        onClick={handleCreateBase}
                        className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg"
                        disabled={isCreating}
                    >
                        {isCreating ? "Creating..." : "+ Create"}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-white px-4 py-2 border-b">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-1/3 border border-gray-300 px-2 py-1 rounded"
                    />
                    <button
                        onClick={async () => {
                            try {
                                await signOut({ callbackUrl: "/auth/signin" });
                            } catch (err) {
                                console.error("Error during sign out:", err);
                            }
                        }}
                        className="text-gray-700 hover:text-blue-500 text-sm"
                    >
                        Sign Out
                    </button>
                </header>

                {/* Main Content Area */}
                <main className="p-4">
                    <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
                    <p className="text-sm text-gray-600 my-4">
                        Opened by you <span className="text-blue-500 cursor-pointer">Show all types</span>
                    </p>

                    {/* Bases List */}
                    <div className="grid grid-cols-1 gap-4">
                        {bases.map((base) => (
                            <div
                                key={base.id}
                                className="bg-white border rounded-lg p-4 flex items-center space-x-4"
                            >
                                <div className="w-12 h-12 bg-red-400 text-white flex items-center justify-center rounded">
                                    {base.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{base.name}</h3>
                                    <p className="text-sm text-gray-600">Base</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
