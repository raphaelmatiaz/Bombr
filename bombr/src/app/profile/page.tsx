"use client"

import Navbar from "@/components/Navbar/navbar"
import styles from './profile.module.css'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

function Profile() {

    const [postListType, setPostListType] = useState("received")
    const [barPosition, setBarPosition] = useState("0")
    const { data: session, status } = useSession();
    const router = useRouter();
    
    // Redirect user to /home-feed if they are authenticated
    useEffect(() => {
    if (status === "unauthenticated") {
        router.push('/login');
    }
    }, [status, router]);


    const ListSentPosts = () => {
        setPostListType("sent")
        setBarPosition("100%")     
    }

    const ListReceivedPosts = () => {
        setPostListType("received")
        setBarPosition("0")   
    }

    return (
        <div className={styles.componentWrapper}>
            <Navbar></Navbar>
            <main className={styles.mainContent}>
                
                <div className={styles.profileWrapper}>
                    <header className={styles.profileHeader}>
                        {session?.user?.image === null ? (
                            <div className={styles.profilePic} style={{backgroundImage: `url(/default-profile.png)`}}></div>
                        ) : (
                            <div className={styles.profilePic} style={{backgroundImage: `url(${session?.user?.image})`}}></div>
                        )}
                        <div className={styles.profileInfo}>
                            <div className={styles.nameInfoWrapper}>
                                {session?.user?.name && (
                                    <>
                                        <h1 className={styles.userNickname}>{session?.user?.name}</h1>
                                        <h2 className={styles.userFullName}>{session?.user?.name}</h2>
                                    </>
                                )}
                                {session?.user?.name && session?.user?.email && (
                                    <>
                                        <h1 className={styles.userNickname}>{session?.user?.name}</h1>
                                        <h2 className={styles.userFullName}>{session?.user?.email}</h2>
                                    </>
                                )}
                                {session?.user?.name === null && session?.user?.email === null && (
                                    <>
                                        <h1 className={styles.userNickname}>{session?.user?.name || "Unknown User"}</h1>
                                        <h2 className={styles.userFullName}>{session?.user?.email || "No Email Provided"}</h2>
                                    </>
                                )}
                                
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
                                    </div>
                                </span>
                            </div>
                            <article className={styles.userBio}>
                                User Bio. <br />
                                User Bio Lorem, ipsum dolor.
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
    )
}

export default Profile