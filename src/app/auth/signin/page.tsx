"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-500 text-gray-800">
            {/* Header Section */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Sign In to Airtable Clone
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-md text-center">
                Access your data anytime, anywhere. Sign in with your Google account to
                get started!
            </p>

            {/* Google Sign-In Button */}
            <button
                onClick={() => signIn("github")}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-transform duration-200"
            >
                <span className="font-medium text-gray-700">Sign in with Github</span>
            </button>

            {/* Footer Section */}
            <div className="mt-12 text-center text-sm text-gray-600">
                <p>
                    By signing in, you agree to our{" "}
                    <a href="/terms" className="text-blue-500 hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-blue-500 hover:underline">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </div>
    );
}
