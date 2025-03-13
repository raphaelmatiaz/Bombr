"use client"
import LoginProviders from '../../../components/LoginProviders/LoginProviders.tsx'
import Logo from '../../../components/Logo/Logo.tsx'
import Link from 'next/link'
import styles from './login.module.css'
import Dashboard from '../../../components/Auth/Dashboard.tsx'
import ClickSpark from '../../../blocks/Animations/ClickSpark/ClickSpark.tsx'
import SplashCursor from '../../../blocks/Animations/SplashCursor/SplashCursor.tsx'
import Particles from '../../../blocks/Backgrounds/Particles/Particles.tsx';
function Login() {

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
                    <form className={styles.form} action="">
                        <input className={styles.input} type="email" placeholder='Phone number, username or email' />
                        <input className={styles.input} type="password" placeholder='Password' />
                        <a className={`${styles.forgotPassword} ${styles.anchor}`} href="">forgot password?</a>
                        <button className={styles.loginButton}>Login</button>
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