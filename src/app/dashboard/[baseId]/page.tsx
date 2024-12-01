"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function BasePage() {
    const { baseId } = useParams();
    const [rows, setRows] = useState([{}, {}, {}]);

    const addRow = () => {
        setRows([...rows, {}]);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 h-full bg-purple-800 text-white flex flex-col">
                <div className="p-4 font-bold text-xl border-b border-purple-700">
                    Untitled Base
                </div>
                <nav className="flex-1 p-4 space-y-4">
                    <h3 className="text-sm uppercase text-gray-300 tracking-wider">
                        Views
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded bg-purple-700 hover:bg-purple-600"
                            >
                                Grid view
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 rounded hover:bg-purple-600"
                            >
                                Calendar
                            </a>
                        </li>
                    </ul>
                </nav>
                <footer className="p-4 border-t border-purple-700">
                    <h3 className="text-sm uppercase text-gray-300 mb-2">Create...</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="block text-sm text-white hover:text-gray-200"
                            >
                                Grid
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-sm text-white hover:text-gray-200"
                            >
                                Calendar
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-sm text-white hover:text-gray-200"
                            >
                                Gallery
                            </a>
                        </li>
                    </ul>
                </footer>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="flex items-center justify-between bg-purple-700 text-white px-6 py-3 shadow-md">
                    <h1 className="text-lg font-bold">{baseId || "Untitled Base"}</h1>
                    <div className="flex items-center space-x-4">
                        <button className="text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-500">
                            Data
                        </button>
                        <button className="text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-500">
                            Automations
                        </button>
                        <button className="text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-500">
                            Interfaces
                        </button>
                        <button className="text-sm bg-purple-600 px-4 py-2 rounded hover:bg-purple-500">
                            Forms
                        </button>
                    </div>
                </header>

                {/* Table Content */}
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="border rounded shadow bg-white">
                        <div className="border-b p-4 flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-700">Table 1</h2>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                                onClick={addRow}
                            >
                                + Add Row
                            </button>
                        </div>
                        <table className="w-full border-collapse">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-3 text-left font-medium text-gray-600">
                                    Name
                                </th>
                                <th className="border p-3 text-left font-medium text-gray-600">
                                    Notes
                                </th>
                                <th className="border p-3 text-left font-medium text-gray-600">
                                    Assignee
                                </th>
                                <th className="border p-3 text-left font-medium text-gray-600">
                                    Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows.map((_, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 even:bg-gray-50"
                                >
                                    <td className="border p-3">
                                        <input
                                            type="text"
                                            placeholder={`Name ${index + 1}`}
                                            className="w-full bg-transparent focus:outline-none"
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="text"
                                            placeholder={`Notes ${index + 1}`}
                                            className="w-full bg-transparent focus:outline-none"
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <input
                                            type="text"
                                            placeholder="Assignee"
                                            className="w-full bg-transparent focus:outline-none"
                                        />
                                    </td>
                                    <td className="border p-3">
                                        <select className="w-full bg-transparent focus:outline-none">
                                            <option>Incomplete</option>
                                            <option>Complete</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
