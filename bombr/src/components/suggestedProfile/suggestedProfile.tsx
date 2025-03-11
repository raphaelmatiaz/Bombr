import styles from './suggestedProfile.module.css'
import Link from 'next/link'

const suggestedProfile = () => {
    return(
        <div className={styles.componentWrapper}>
            <Link className={styles.link} href="/user/suggestedUser">
                <div className={styles.suggestedProfile}>
                    <div className={styles.profileImage}></div>
                    <p className={styles.profileUsername}>Suggested_User</p>
                </div>
            </Link>
            <button className={styles.declareWarButton}>Declare War</button>
        </div>
    )
}

export default suggestedProfile