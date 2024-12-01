"use client";
import { useSession } from "next-auth/react";

export default function DebugSession() {
    const { data: session, status } = useSession();

    console.log("Session:", session, "Status:", status);

    return (
        <div>
            <p>Status: {status}</p>
            {session ? <p>Logged in</p> : <p>You are logged out</p>}
        </div>
    );
}
