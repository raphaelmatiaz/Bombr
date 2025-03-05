import Logo from '../Logo/Logo.tsx'
import NavItem from '../NavItem/navItem.tsx'
import styles from './notification.module.css'
import Link from 'next/link'

const Notification = () => {
    return(
        <div className={styles.notificationWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.profileImage}></div>
                <p className={styles.notificationText}>Username has bomber your profile with a post!</p>
            </div>
            <main className={styles.main}>
                <div className={styles.postImage}></div>
                <button className={styles.retaliateButton}>Retaliate!</button>
            </main>
        </div>
    )
}

export default Notification