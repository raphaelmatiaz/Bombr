
import styles from './linkToProfile.module.css'
import Link from 'next/link'

const LinkToProfile = () => {
    return(
        <Link className={styles.link} href="/profile">
            <div className={styles.wrapper}>
                <div className={styles.profileImage}></div>
                <p className={styles.profileUsername}>Profile_Username</p>
            </div>
        </Link>
    )
}

export default LinkToProfile