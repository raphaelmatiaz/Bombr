"use client"
import LoginProviders from '../../../components/LoginProviders/LoginProviders.tsx'
import Link from 'next/link'
import styles from './login.module.css'
import Dashboard from '../../../components/Auth/Dashboard.tsx'
import ClickSpark from '../../../blocks/Animations/ClickSpark/ClickSpark.tsx'
import SplashCursor from '../../../blocks/Animations/SplashCursor/SplashCursor.tsx'
import Particles from '../../../blocks/Backgrounds/Particles/Particles.tsx';
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { data: session, status } = useSession();
    const router = useRouter();
    
    // Redirect user to /home-feed if they are authenticated
    useEffect(() => {
    if (status === "authenticated") {
        router.push('/home-feed');
    }
    }, [status, router]);

  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (result?.error) {
        console.error("Login failed:", result.error);
        redirect("/login");
      } else {
        redirect("/home-feed");
      }
    };
  

    return(
        <ClickSpark
                sparkColor='#7A00F4'
                sparkSize={10}
                sparkRadius={35}
                sparkCount={8}
                duration={400}
                >
            <div className={styles.loginWrapper}>
                {/* <Dashboard></Dashboard> */}
                
                    {/* Your content here */}
                    

                <aside className={styles.asideArt}  style={{backgroundImage: "./login.png"}}>
                    <Particles
                        particleColors={['#7A00F4', '#FE2C3A', '#F31C96', '#C3B1E8', '#2B1B44']}
                        particleCount={200}
                        particleSpread={13}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                    {/* <SplashCursor /> */}
                </aside>
                
                <main className={styles.formWrapper}>
                    <div className={styles.logo}></div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                        <input className={styles.input} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <a className={`${styles.forgotPassword} ${styles.anchor}`} href="">forgot password?</a>
                        <button className={styles.loginButton} type='submit'>Login</button>
                    </form>
                    <p className={styles.or}>Or</p>
                    <hr className={styles.horizontalRow} />
                    <LoginProviders></LoginProviders>
                    <hr className={styles.horizontalRow} />
                    <p className={styles.p}>Don't have an account? <Link className={styles.anchor} href="/register">Sign up</Link></p>
                </main>
            </div>

        </ClickSpark>
    )
}

export default Login