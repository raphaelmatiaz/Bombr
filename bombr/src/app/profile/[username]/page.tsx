'use client'

import Navbar from "@/components/Navbar/navbar"
import styles from './profile.module.css'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { use } from "react";
import User from '@/types/user.ts';
import Post from '@/types/post.ts'

function Profile({ params }: { params: Promise<{ username: string; fullname: string }> }) {

    const resolvedParams = use(params); // Unwrapping the promise
    const [postListType, setPostListType] = useState("received")
    const [barPosition, setBarPosition] = useState("0")
    const { data: status } = useSession();
    const router = useRouter();

    // Fetching the User from db
    const [currentUser, setCurrentUser] = useState<User>({} as User);
    const [error, setError] = useState<string | null>(null);

    // Fetching the user's sent and received posts from db
    // const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true); // Track loading state

    // Redirect user to /home-feed if they are authenticated
    useEffect(() => {
        if (!status) {
            router.push('/login');
        }
    }, [status, router]);


    // Get user
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
    }, [resolvedParams.username]);

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
        <div className={styles.componentWrapper} suppressHydrationWarning>
            <Navbar></Navbar>
            <main className={styles.mainContent}>

                <div className={styles.profileWrapper}>
                    <header className={styles.profileHeader}>

                        <div className={styles.profilePic} style={{ backgroundImage: `url(/default-profile.png)` }}></div>

                        <div className={styles.profileInfo}>
                            <div className={styles.nameInfoWrapper}>
                                <h1 className={styles.userNickname}>{currentUser.username || resolvedParams.username}</h1>
                                <h2 className={styles.userFullName}>{currentUser.fullName || "Unknown User"}</h2>
                            </div>
                            <div className={styles.globalStatsWrapper}>
                                <span className={styles.statRow}>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombs Received</h3>
                                        <p>{currentUser.receivedPosts?.length || 0}</p>
                                    </div>
                                    <div className={styles.userProfileStatWrapper}>
                                        <h3>Bombs Sent</h3>
                                        <p>{currentUser.sentPosts?.length || 0}</p>
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
                        {/* Nota: Aqui não consegui atribuir o type 'Post' ao meu post sem haaver problemas, por isso usei 'any', e não cosegui usar 'Image' em vez de 'img' porque causava problemas com o 'src' attribute */}
                            {postListType === "received" && (
                                <div>
                                    {currentUser.receivedPosts.map((post: Post) => (
                                        <img key={post.id} src={post.content} alt="Post image" />
                                    ))}
                                </div>
                            )}

                            {postListType === "sent" && (
                                <>
                                    {currentUser.sentPosts.map((post: Post) => (
                                        <img key={post.id} src={post.content} alt="Post image" />
                                    ))}
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
