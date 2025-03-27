"use client"
import styles from './linkToProfile.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const LinkToProfile = () => {

    const { data: session } = useSession()

    return (
        <>
        {session?.user?.name === "null" ? (
            <>
            <Link className={styles.link} href={`/profile/${session?.user?.name}`}>
                <div className={styles.wrapper}>
                    <div className={styles.profileImage} style={{backgroundImage: `url(${session?.user?.image})`}}></div>
                    <p className={styles.profileUsername}>{session?.user?.name}</p>
                </div>
                {/* <div>{session?.user?.}</div> */}
            </Link>
        </>
        ) : (
            <>
                <Link className={styles.link} href={`/profile/${session?.user?.username}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.profileImage} style={{backgroundImage: `url('/default-profile.png')`}}></div>
                        <p className={styles.profileUsername}>{session?.user?.username}</p>
                    </div>
                </Link>
            </>
        )}
        </>
    )
}

export default LinkToProfile