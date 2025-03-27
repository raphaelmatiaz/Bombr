"use client";

import { useEffect, useState } from "react";
import MainSection from "@/components/Main/main.tsx";
import ScrollRegion from "@/components/scrollRegion/scrollRegion.tsx";
import SuggestedProfile from "@/components/suggestedProfile/suggestedProfile";
import User from "@/types/user.ts";
import styles from "./search.module.css";

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");

        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError((err as Error).message);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.username?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  if (error) return <p>Error: {error}</p>;
  if (users.length === 0) return <p>Loading...</p>;

  return (
    <MainSection>
      <div className={styles.container}>
        <ScrollRegion>
            {/* Hardcoded search input */}
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <ul className={styles.ul}>
            {filteredUsers.length > 0 ? (
              
              filteredUsers.map((user) => (
                <span key={user.id}>
                  <SuggestedProfile
                    id={user.id}
                    name={user.name ?? ""}
                    username={user.username ?? ""}
                    fullName={user.fullName ?? ""}
                  />
                </span>
              ))
            ) : (
              <p>No users found</p>
            )}
          </ul>
        </ScrollRegion>
      </div>
    </MainSection>
  );
}

export default Home;
