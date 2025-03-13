import LoginProviders from '../../../components/LoginProviders/LoginProviders.tsx'
import Logo from '../../../components/Logo/Logo.tsx'

import styles from './register.module.css'
import Link from 'next/link'

function Login() {
    return(
        <div className={styles.loginWrapper}>

            <aside className={styles.asideArt}  style={{backgroundImage: "./login.png"}}></aside>
            
            <main className={styles.formWrapper}>
                <div className={styles.logo}></div>
                <form className={styles.form} action="">
                    <span className={styles.inputWrapper}>
                        <input className={styles.input} type="email" placeholder='Email' />
                        <input className={styles.input} type="text" placeholder='Full name' />
                    </span>
                    <input className={styles.input} type="text" placeholder='Username' maxLength={15} pattern="[A-Za-z0-9._]+" title="Username can only contain letters, numbers, periods, and underscores" />
                    <input className={styles.input} type="password" placeholder='Password' />
                    <a className={`${styles.forgotPassword} ${styles.anchor}`} href="">forgot password?</a>
                    <button className={styles.loginButton}>Register</button>
                </form>
                <p className={styles.or}>Or</p>
                <hr className={styles.horizontalRow} />
                <LoginProviders></LoginProviders>
                <hr className={styles.horizontalRow} />
                <p className={styles.p}>Already have an account? <Link className={styles.anchor} href="/login">Log in</Link></p>
            </main>
        </div>
    )
}

export default Login