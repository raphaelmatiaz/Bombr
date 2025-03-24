// "use client"
// import Navbar from '@/components/Navbar/navbar.tsx'
// import MainSection from '@/components/Main/main.tsx';
// import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx';
// import SearchBar from  '@/components/SearchBar/searchBar.tsx'
// import Aside from '@/components/Aside/Aside.tsx';
// import SuggestedProfile from '@/components/suggestedProfile/suggestedProfile';
// import User from '@/types/user.ts';
// import { useEffect, useState } from 'react';
// import prisma from '@/lib/prisma';
// function Home() {

//   // const [users, setUsers] = useState<User[]>([]);

//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     const users = await prisma.user.findMany();
//   //     return users
//   //   }
//   //   fetchUsers().then(fetchedUsers => setUsers(fetchedUsers));
//   // });

//     const [users, setUsers] = useState<User[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//             async function fetchUsers() {
//               try {
//                 const response = await fetch("/api/users");
//                 if (!response.ok) throw new Error("Failed to fetch users");

//                 const data: User[] = await response.json();
//                 setUsers(data);
//               } catch (err) {
//                 setError((err as Error).message);
//               }
//             }

//             fetchUsers();
//           }, []);

//       if (error) return <p>Error: {error}</p>;
//       console.log(users)

//       if (users.length === 0) return <p>Loading...</p>;

//   return (
//     <div>
//       <MainSection>
//         <span>
//           <ScrollRegion>
//             {/* external Component */}
//           <SearchBar></SearchBar>

//           {/* or use this one that is hard coded, if it means simpler implementation */}
//           <input className={styles.searchBar} type="text" placeholder='Search' />
          
//           <ul>
//             {users.length > 0 ? users.map((user) => (
//                 <span key={user.id}>
//                   <SuggestedProfile name={user.name ?? ''} username={user.username ?? ''} fullName={user.fullName ?? ''}></SuggestedProfile>
//                 </span>
//             )) : <p>Loading...</p>}
//             </ul>
//           </ScrollRegion>
//         </span>
//       </MainSection>
//     </div>
//   );
// }

// export default Home

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar.tsx";
import MainSection from "@/components/Main/main.tsx";
import ScrollRegion from "@/components/scrollRegion/scrollRegion.tsx";
import SearchBar from "@/components/SearchBar/searchBar.tsx";
import Aside from "@/components/Aside/Aside.tsx";
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
