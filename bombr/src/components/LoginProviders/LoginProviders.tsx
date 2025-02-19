// import googleIcon from '../../../public/googleIcon.png'
// import facebookIcon from '../../../public/facebookIcon.png'
// import githubIcon from '../../../public/githubIcon.png'
import styles from './LoginProviders.module.css';

const LoginProviders = () => {
    return (
        <div className={styles.LoginProviders}>
            <button className={styles.loginProviderButton}>
                <p>Login with Google</p>
                <div className={`${styles.googleIcon} ${styles.icon}`}></div>
            </button>
            <button className={styles.loginProviderButton}>
                <p>Login with Facebook</p>
                <div className={`${styles.facebookIcon} ${styles.icon}`}></div>
            </button>
            <button className={styles.loginProviderButton}>
                <p>Login with Github</p>
                <div className={`${styles.githubIcon} ${styles.icon}`}></div>
            </button>
            
        </div>
    );
}

export default LoginProviders;