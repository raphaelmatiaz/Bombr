"use client"

import Navbar from "@/components/Navbar/navbar"
import MainSection from "@/components/Main/main"
import Aside from "@/components/Aside/Aside"
import styles from './profile.module.css'
import React, { useState } from "react";

function Profile() {

    const [postListType, setPostListType] = useState("received")
    const [barPosition, setBarPosition] = useState("0")

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
                        <div className={styles.profilePic}></div>
                        <div className={styles.profileInfo}>
                            <div className={styles.nameInfoWrapper}>
                                <h1 className={styles.userNickname}>Profile_Username</h1>
                                <h2 className={styles.userFullName}>Full Name</h2>
                            </div>
                            <div className={styles.globalStatsWrapper}>
                                <div className={styles.userProfileStatWrapper}>
                                    <h3>Bombed</h3>
                                    <p>0</p>
                                </div>
                                <div className={styles.userProfileStatWrapper}>
                                    <h3>Bombers</h3>
                                    <p>0</p>
                                </div>
                                <div className={styles.userProfileStatWrapper}>
                                    <h3>Bombing</h3>
                                    <p>0</p>
                                </div>
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
                    <main>
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