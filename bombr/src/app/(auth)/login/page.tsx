import LoginProviders from '../../../components/LoginProviders/LoginProviders.tsx'
import Logo from '../../../components/Logo/Logo.tsx'

import styles from './login.module.css'

function Login() {
    return(
        <div className={styles.loginWrapper}>

            <aside className={styles.asideArt}  style={{backgroundImage: "./login.png"}}></aside>
            
            <main className={styles.formWrapper}>
                <Logo></Logo>
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
                <p className={styles.p}>Don't have an account? <a className={styles.anchor} href="">Sign up</a></p>
            </main>
        </div>
    )
}

export default Login