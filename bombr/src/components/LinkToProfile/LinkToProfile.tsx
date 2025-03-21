"use client"
import styles from './linkToProfile.module.css'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

const LinkToProfile = () => {

    const { data: session } = useSession()
    console.log(session?.user?.fullname)

    return(
        <Link className={styles.link} href="/profile">
            <div className={styles.wrapper}>
                <div className={styles.profileImage} style={{backgroundImage: `url(${session?.user?.image})`}}></div>
                <p className={styles.profileUsername}>{session?.user?.username || session?.user?.name}</p>
            </div>
            {/* <div>{session?.user?.}</div> */}
        </Link>
    )
}

export default LinkToProfile