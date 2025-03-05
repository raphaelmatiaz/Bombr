import styles from './suggestedProfile.module.css'
import Link from 'next/link'

const suggestedProfile = () => {
    return(
        <Link className={styles.link} href="/user/suggestedUser">
            <div className={styles.suggestedProfile}>
                <div className={styles.profileImage}></div>
                <p className={styles.profileUsername}>Suggested_User</p>
            </div>
        </Link>
    )
}

export default suggestedProfile