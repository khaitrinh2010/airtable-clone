"use client";

import { useRouter } from "next/navigation";

export default function TablePage() {
    const router = useRouter();

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <header className="bg-purple-700 text-white p-4 flex items-center justify-between">
                <h1 className="text-lg font-bold">Untitled Base</h1>
                <button
                    onClick={() => router.push("/dashboard")}
                    className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600"
                >
                    Go Back
                </button>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r">
                    <div className="p-4">
                        <h2 className="font-bold text-sm">Views</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="text-gray-700 font-medium">Grid View</li>
                            <li className="text-gray-500">Calendar</li>
                            <li className="text-gray-500">Gallery</li>
                            <li className="text-gray-500">Kanban</li>
                        </ul>
                    </div>
                    <div className="p-4 border-t">
                        <h2 className="font-bold text-sm">Create...</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="text-blue-500 hover:underline cursor-pointer">Grid</li>
                            <li className="text-blue-500 hover:underline cursor-pointer">Form</li>
                        </ul>
                    </div>
                </aside>

                {/* Table */}
                <main className="flex-1 bg-gray-100 p-4">
                    <div className="bg-white rounded shadow p-4">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Notes</th>
                                <th className="border border-gray-300 px-4 py-2">Assignee</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Task 1</td>
                                <td className="border border-gray-300 px-4 py-2">Details</td>
                                <td className="border border-gray-300 px-4 py-2">John</td>
                                <td className="border border-gray-300 px-4 py-2">Pending</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Task 2</td>
                                <td className="border border-gray-300 px-4 py-2">Details</td>
                                <td className="border border-gray-300 px-4 py-2">Doe</td>
                                <td className="border border-gray-300 px-4 py-2">Completed</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
