"use client";

import { signOut } from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r">
                <div className="flex flex-col h-full">
                    {/* Logo and Navigation */}
                    <div className="p-4 border-b">
                        <div className="font-bold text-xl text-blue-600">Airtable Clone</div>
                    </div>
                    <nav className="flex-1 p-4 space-y-4">
                        <div>
                            <h3 className="text-gray-500 text-sm uppercase">Home</h3>
                            <p className="text-gray-500 text-sm">
                                Your starred bases, interfaces, and workspaces will appear here.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-sm uppercase">All Workspaces</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline text-sm flex items-center space-x-2"
                                    >
                                        <span>+</span>
                                        <button
                                            onClick={() => router.push("/dashboard/2")}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Create Workspace
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Footer Links */}
                    <div className="p-4 space-y-3 border-t">
                        <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                            Templates and Apps
                        </a>
                        <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                            Marketplace
                        </a>
                        <a href="#" className="block text-gray-500 hover:text-gray-800 text-sm">
                            Import
                        </a>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Header */}
                <header className="flex items-center justify-between bg-white p-4 rounded shadow mb-6">
                    <h1 className="text-xl font-bold text-gray-700">Home</h1>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-64 border border-gray-300 px-3 py-2 rounded"
                        />
                        <button
                            onClick={async () => {
                                try {
                                    await signOut({ callbackUrl: "/api/auth/signin" });
                                } catch (err) {
                                    console.error("Error during sign out:", err);
                                }
                            }}
                            className="text-gray-700 hover:text-blue-500 text-sm"
                        >
                            Sign Out
                        </button>
                    </div>
                </header>

                {/* Promotional Section */}
                <div className="mb-6 bg-gray-100 p-4 rounded shadow">
                    <h3 className="font-bold text-gray-700">Upgrade to the Team plan</h3>
                    <p className="text-gray-500 text-sm">
                        Keep the power you need to manage complex workflows, design interfaces, and more.
                    </p>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upgrade</button>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">Start with AI</h3>
                        <p className="text-gray-500 text-sm">
                            Turn your process into an app with data and interfaces using AI.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">Start with Templates</h3>
                        <p className="text-gray-500 text-sm">
                            Select a template to get started and customize as you go.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">Quickly Upload</h3>
                        <p className="text-gray-500 text-sm">
                            Easily migrate your existing projects in just a few minutes.
                        </p>
                    </div>
                    <div className="p-4 bg-white shadow rounded">
                        <h3 className="font-bold">Start from Scratch</h3>
                        <p className="text-gray-500 text-sm">
                            Create a new blank base with custom tables, fields, and views.
                        </p>
                    </div>
                </div>

                {/* Recently Opened */}
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-700">Opened by you</h3>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        <div className="p-4 bg-white shadow rounded text-center">
                            <div className="text-2xl font-bold text-purple-500">Un</div>
                            <p className="text-sm text-gray-500">Untitled Base</p>
                        </div>
                        <div className="p-4 bg-white shadow rounded text-center">
                            <div className="text-2xl font-bold text-purple-500">Un</div>
                            <p className="text-sm text-gray-500">Untitled Base</p>
                        </div>
                        <div className="p-4 bg-white shadow rounded text-center">
                            <div className="text-2xl font-bold text-purple-500">PM</div>
                            <p className="text-sm text-gray-500">Project Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
