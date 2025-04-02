"use client"; // Required if using client-side hooks

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        if (data.success) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <header>
        <Image src="/logo.png" alt="Strata Management Logo" width={180} height={38} priority />
        <h1>Welcome to Strata Management Services</h1>
        <nav>
          <ul>
            <li><Link href="/strata-fees">Strata Fees</Link></li>
            <li><Link href="/notifications">Notifications</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Recent Contact Form Submissions</h2>
          {posts.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <strong>{post.name}</strong> ({post.email}) said: {post.message} <em>at {new Date(post.timestamp).toLocaleString()}</em>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}
