// import googleIcon from '../../../public/googleIcon.png'
// import facebookIcon from '../../../public/facebookIcon.png'
// import githubIcon from '../../../public/githubIcon.png'
"use client"
import { signIn } from 'next-auth/react';
import styles from './LoginProviders.module.css';

const LoginProviders = () => {

    return (
        <div className={styles.LoginProviders}>
            <button onClick={() => signIn("google", { callbackUrl: "/home-feed" })} className={styles.loginProviderButton}>
                <p>Login with Google</p>
                <div className={`${styles.googleIcon} ${styles.icon}`}></div>
            </button>
            <button onClick={() => signIn("discord", { callbackUrl: "/home-feed" })} className={styles.loginProviderButton}>
                <p>Login with Discord</p>
                <div className={`${styles.facebookIcon} ${styles.icon}`}></div>
            </button>
            <button onClick={() => signIn("github", { callbackUrl: "/home-feed" })} className={styles.loginProviderButton}>
                <p>Login with Github</p>
                <div className={`${styles.githubIcon} ${styles.icon}`}></div>
            </button>
            
        </div>
    );
}

export default LoginProviders;