// app/account-query/page.tsx
'use client';

import BackButton from "@/components/backbutton";

export default function AccountQueryPage() {
    return (
        <main className="min-h-screen bg-[#171a21] text-gray-200 px-6 py-8">
            <BackButton onClick={() => window.history.back()}>Back</BackButton>
            <h1 className="text-4xl font-bold text-[#66c0f4] text-center mb-8">Account Search</h1>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-2 text-gray-800">
                <h2 className="text-2xl font-semibold mb-2 text-center">How to Search</h2>
                <p className="text-center">
                Based on the criteria below, we will provide the best possible results from your steam account
                </p>
            </div>
        </main>
    )
}