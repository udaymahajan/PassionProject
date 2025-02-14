import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>News Hub - Latest Updates on Politics, Tech, and Discoveries</title>
        <meta name="description" content="Stay updated with the latest news in politics, technology, and scientific discoveries." />
      </Head>
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">News Hub</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/category/politics" className="hover:text-blue-500">Politics</Link></li>
            <li><Link href="/category/tech" className="hover:text-blue-500">Tech</Link></li>
            <li><Link href="/category/discoveries" className="hover:text-blue-500">Discoveries</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Example of a news post */}
          <article className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">New Tech Innovation Unveiled</h3>
            <p className="text-sm text-gray-600">The latest breakthrough in AI technology...</p>
            <Link href="/post/new-tech-innovation" className="text-blue-500 mt-2 inline-block">Read more</Link>
          </article>
        </div>
      </main>
      <footer className="bg-gray-900 text-white text-center p-4 mt-6">
        <p>&copy; {new Date().getFullYear()} News Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
