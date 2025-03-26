// "use client"

// import Navbar from "@/components/Navbar/navbar"
// import MainSection from "@/components/Main/main"
// import Aside from "@/components/Aside/Aside"
// import styles from './profile.module.css'
// import React, { useEffect, useState } from "react";
// // import { div } from "react";
// import ScrollRegion from "@/components/scrollRegion/scrollRegion"
// import { useRouter } from "next/navigation"
// import { useSession } from "next-auth/react"
// import { s } from "framer-motion/client"
// import { url } from "inspector"
// import { use } from "react";
// import prisma from "@/lib/prisma"
// import User from '@/types/user'

// // Aqui vais ter de passar a instancia de user inteira, 
// // em vez de apenas 'username', para poder dizer: 
// // 'user.username'. 'user.fullname', 'user.postsSent', 
// // 'user.postsReceived', 'user.bio', 'user.image', etc
// function Profile({ params }: { params: Promise<{ username: string; fullname: string }> }) {

//     const resolvedParams = use(params); // Unwrapping the promise

//     const [postListType, setPostListType] = useState("received")
//     const [barPosition, setBarPosition] = useState("0")
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     const [currentUser, setCurrentUser] = useState<User>({} as User);
    
//     // Redirect user to /home-feed if they are authenticated
//     useEffect(() => {
//     if (status === "unauthenticated") {
//         router.push('/login');
//     }
//     }, [status, router]);

   
//     const ListSentPosts = () => {
//         setPostListType("sent")
//         setBarPosition("100%")     
//     }

//     const ListReceivedPosts = () => {
//         setPostListType("received")
//         setBarPosition("0")   
//     }

//     return (
//         <div className={styles.componentWrapper}>
//             <Navbar></Navbar>
//             <main className={styles.mainContent}>
                
//                 <div className={styles.profileWrapper}>
//                     <header className={styles.profileHeader}>
                        
//                         <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                        
//                         <div className={styles.profileInfo}>
//                             <div className={styles.nameInfoWrapper}>

//                                 <h1 className={styles.userNickname}>{resolvedParams.username}</h1>
//                                 <h2 className={styles.userFullName}>{resolvedParams.username}</h2>
//                             </div>
//                             <div className={styles.globalStatsWrapper}>
//                                 <span className={styles.statRow}>
//                                     <div className={styles.userProfileStatWrapper}>
//                                         <h3>Bombs Received</h3>
//                                         <p>0</p>
//                                     </div>
//                                     <div className={styles.userProfileStatWrapper}>
//                                         <h3>Bombs Sent</h3>
//                                         <p>0</p>
//                                     </div>
//                                 </span>
//                                 <span className={styles.statRow}>
//                                     <div className={styles.userProfileStatWrapper}>
//                                         <h3>Bombers</h3>
//                                         <p>0</p>
//                                     </div>
//                                     <div className={styles.userProfileStatWrapper}>
//                                         <h3>Bombing</h3>
//                                         <p>0</p>
//                                     </div>
//                                 </span>
//                             </div>
//                             <article className={styles.userBio}>
//                                 User Bio. <br />
//                                 User Bio Lorem, ipsum dolor.
//                             </article>
//                         </div>
//                     </header>

//                     <hr />

//                     <nav className={styles.profileNavbar}>
//                         <div className={styles.navBarButtonsWrapper}>
//                             <button className={styles.postListButton} onClick={() => ListReceivedPosts()}>Bombs Received</button>
//                             <button className={styles.postListButton} onClick={() => ListSentPosts()}>Bombs Sent</button>
//                         </div>
//                         <div className={styles.movingBarWrapper} style={{ marginLeft: barPosition }}>
//                             <div id="movingBar" className={styles.movingBar}></div>
//                         </div>
//                     </nav>
//                     <main className={styles.profileContentWrapper}>
//                     <ul className={styles.contentList}>
//                         {postListType === "received" && (
//                             <>
//                             <img src="/image.png" alt="Description" />
//                             <img src="/image2.jpg" alt="Description" />
//                             <img src="/image3.jpg" alt="Description" />
//                             <img src="/image4.jpg" alt="Description" />
//                             <img src="/image5.jpg" alt="Description" />
//                             <img src="/image6.jpg" alt="Description" />
//                             <img src="/image7.jpg" alt="Description" />
//                             <img src="/image8.jpg" alt="Description" />
//                             <img src="/image9.jpg" alt="Description" />
//                             <img src="/image10.jpg" alt="Description" />
//                             <img src="/image11.jpg" alt="Description" />
//                             </>
//                         )}

//                         {postListType === "sent" && (
//                             <>
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             <img src="/chillguy.jpg" alt="Description" />
//                             </>
//                         )}
//                         </ul>
                        
//                     </main>
                    
//                 </div>
                
//             </main>
//         </div>
//     )
// }

// export default Profile




// // function FollowButton({ currentUserId, targetUserId }) {
// //   const [isFollowing, setIsFollowing] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleFollow = async () => {
// //     if (!currentUserId || !targetUserId) return;

// //     setLoading(true);

// //     try {
// //       const response = await fetch("/api/follow", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ followerId: currentUserId, followingId: targetUserId }),
// //       });

// //       if (response.ok) {
// //         setIsFollowing(true);
// //       } else {
// //         const data = await response.json();
// //         alert(data.message || "Follow failed");
// //       }
// //     } catch (error) {
// //       console.error("Follow error:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <button onClick={handleFollow} disabled={loading || isFollowing}>
// //       {isFollowing ? "Following" : "Follow"}
// //     </button>
// //   );
// // }

'use client'

import Navbar from "@/components/Navbar/navbar"
import MainSection from "@/components/Main/main"
import Aside from "@/components/Aside/Aside"
import styles from './profile.module.css'
import React, { useEffect, useState } from "react";
import ScrollRegion from "@/components/scrollRegion/scrollRegion"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { use } from "react";
import User from '@/types/user'
import prisma from '@/lib/prisma'

// Aqui vais ter de passar a instancia de user inteira, 
// em vez de apenas 'username', para poder dizer: 
// 'user.username'. 'user.fullname', 'user.postsSent', 
// 'user.postsReceived', 'user.bio', 'user.image', etc

function Profile({ params }: { params: Promise<{ username: string; fullname: string }> }) {

    const resolvedParams = use(params); // Unwrapping the promise

    const [postListType, setPostListType] = useState("received")
    const [barPosition, setBarPosition] = useState("0")
    const { data: session, status } = useSession();
    const router = useRouter();

    // Fetching the User from db
    const [currentUser, setCurrentUser] = useState<User>({} as User);
    const [error, setError] = useState<string | null>(null);

    const [loading, setLoading] = useState(true); // Track loading state

    // Redirect user to /home-feed if they are authenticated
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login');
        }
    }, [status, router]);

    // Fetch user data from the API when username is available
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             // Fetching the user from the backend API
    //             const usernameOrId = resolvedParams.username;
    //             const response = await fetch(`/api/user/${usernameOrId}`);
                
    //             if (response.ok) {
    //                 const userData = await response.json();
    //                 setCurrentUser(userData);
    //             } else {
    //                 console.error("User not found");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching user:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (resolvedParams.username) {
    //         fetchUser();
    //     }
    // }, [resolvedParams.username]);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //       const user = await prisma.user.findUnique({
    //         where: { 
    //             username: resolvedParams.username 
    //         },
    //         // include: {
    //         //   sentPosts: true,  // Include sentPosts
    //         //   receivedPosts: true,  // Include receivedPosts
    //         //   followers: true,  // Include followers
    //         //   following: true  // Include following
    //         // }
    //       });
    
    //       if (user) {
    //         setCurrentUser(user);
    //         console.log("User data:", user);
    //       }
    //     };
    
    //     fetchUser();
    //   }, [resolvedParams.username]);

    useEffect(() => {
        const fetchUser = async () => {
            console.log("useEffect Triggered")
          try {
            console.log("Try entered")
            const res = await fetch(`/api/user/${resolvedParams.username}`);
            
            if (!res.ok) {
              throw new Error("Failed to fetch user");
              console.log("If NOT OK entered")
            }
    
            const data: User = await res.json();
            setCurrentUser(data);
          } catch (err) {
            setError((err as Error).message);
          } finally {
            setLoading(false);
          }
        };
    
        if (resolvedParams.username) {
          fetchUser();
        }
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
      if (!currentUser) return <p>User not found</p>;

    const ListSentPosts = () => {
        setPostListType("sent")
        setBarPosition("100%")     
    }

    const ListReceivedPosts = () => {
        setPostListType("received")
        setBarPosition("0")   
    }

    // if (loading) {
    //     return <div>Loading...</div>; // Show loading while fetching data
    // }

    return (
        <div className={styles.componentWrapper}>
            <Navbar></Navbar>
            <main className={styles.mainContent}>
               
                <div className={styles.profileWrapper}>
                    <header className={styles.profileHeader}>
                        
                        <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                        
                        <div className={styles.profileInfo}>
                            <div className={styles.nameInfoWrapper}>
                                <h1 className={styles.userNickname}>{currentUser.username || resolvedParams.username}</h1>
                                <h2 className={styles.userFullName}>{currentUser.fullName || "Unknown User"}</h2>
                            </div>
                            <div className={styles.globalStatsWrapper}>
                                <span className={styles.statRow}>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombs Received</h3>
                                        <p>0</p>
                                    </div>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombs Sent</h3>
                                        <p>0</p>
                                    </div>
                                </span>
                                <span className={styles.statRow}>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombers</h3>
                                        <p>0</p>
                                    </div>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombing</h3>
                                        <p>0</p>
                                        {/* {currentUser.following.length || 0} */}
                                    </div>
                                </span>
                            </div>
                            <article className={styles.userBio}>
                            {currentUser ? (
                    <>
                        <p>CurrentUser: {currentUser.username}</p>
                        <p>CurrentUser: {currentUser.fullName}</p>
                        <p>CurrentUser: {currentUser.name}</p>
                        <p>CurrentUser: {currentUser.profileId}</p>
                        <p>CurrentUser: {currentUser.email}</p>
                        <p>CurrentUser: {currentUser.image}</p>
                        
                    </>
                ) : null}
                            </article>
                        </div>
                    </header>

                    <hr />

                    <nav className={styles.profileNavbar}>
                        <div className={styles.navBarButtonsWrapper}>
                            <button className={styles.postListButton} onClick={() => ListReceivedPosts()}>Bombs Received</button>
                            <button className={styles.postListButton} onClick={() => ListSentPosts()}>Bombs Sent</button>
                        </div>
                        <div className={styles.movingBarWrapper} style={{ marginLeft: barPosition }}>
                            <div id="movingBar" className={styles.movingBar}></div>
                        </div>
                    </nav>
                    <main className={styles.profileContentWrapper}>
                        <ul className={styles.contentList}>
                            {postListType === "received" && (
                                <>
                                
                                <img src="/image.png" alt="Description" />
                                <img src="/image2.jpg" alt="Description" />
                                <img src="/image3.jpg" alt="Description" />
                                <img src="/image4.jpg" alt="Description" />
                                <img src="/image5.jpg" alt="Description" />
                                <img src="/image6.jpg" alt="Description" />
                                <img src="/image7.jpg" alt="Description" />
                                <img src="/image8.jpg" alt="Description" />
                                <img src="/image9.jpg" alt="Description" />
                                <img src="/image10.jpg" alt="Description" />
                                <img src="/image11.jpg" alt="Description" />
                                </>
                            )}

                            {postListType === "sent" && (
                                <>
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                <img src="/chillguy.jpg" alt="Description" />
                                </>
                            )}
                        </ul>
                    </main>
                </div>
            </main>
        </div>
    );
}

export default Profile;
