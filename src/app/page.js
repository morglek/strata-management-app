"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch submissions from the contact API on component mount
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
    <div className="container" style={{ padding: "1rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Image
          src="/logo.png" // Ensure you have a logo image in your public folder; otherwise, update the filename accordingly.
          alt="Strata Management Logo"
          width={180}
          height={38}
          priority
        />
        <h1>Welcome to Strata Management Services</h1>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "1rem" }}>
            <li>
              <Link href="/index">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/notifications">
                <a>Notifications</a>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/committee">
                <a>Committee Info</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Recent Contact Form Submissions</h2>
          {posts.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <strong>{post.name}</strong> ({post.email}) said: {post.message}{" "}
                  <em>at {new Date(post.timestamp).toLocaleString()}</em>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "1rem", backgroundColor: "#2d3e50", color: "#fff" }}>
        <p>&copy; 2025 Strata Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

