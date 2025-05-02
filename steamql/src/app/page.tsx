// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#171a21] text-gray-200">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#66c0f4]">Welcome to SteamQL</h1>
        <p className="text-lg text-gray-300">
          Query and search for different titles based off your desired criteria.
        </p>
        <Link href="/query" className="block">
          <button className="px-5 py-2.5 bg-[#1b2838] text-[#66c0f4] rounded hover:bg-[#2a475e] transition-colors duration-200">
            Search titles From Steam
          </button>
        </Link>
        <Link href="/account-query" className="block">
          <button className="px-5 py-3.5 bg-[#1b2838] text-[#66c0f4] rounded hover:bg-[#2a475e] transition-colors duration-200">
            Search titles from your Steam Account
          </button>
        </Link>
      </div>
    </main>
  );
}
