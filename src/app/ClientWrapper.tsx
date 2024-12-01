"use client"; // This marks it as a Client Component

import { SessionProvider } from "next-auth/react";
import { TRPCReactProvider } from "~/trpc/react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
        </SessionProvider>
    );
}
