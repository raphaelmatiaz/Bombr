"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession()

    return (
        <>
            {session ? (
                <>
                    <img src={session.user?.image as string} alt="" />
                    <h1>Welcome Back, {session.user?.name}</h1>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            ): (
                <>
                    <h1>You're not logged in</h1>
                    <button onClick={() => signIn("google")}>Sign In with Google</button>
                    <button onClick={() => signIn("github")}>Sign In with Github</button>
                </>
            )}
        </>
    )
}

export default Dashboard