import styles from './targetProfile.module.css'
import Link from 'next/link'

const targetProfile = () => {
    return(
        <div className={styles.componentWrapper}>
            <Link className={styles.link} href="/user/suggestedUser">
                <div className={styles.suggestedProfile}>
                    <div className={styles.targetProfileImageNameWrapper}>
                        <div className={styles.profileImage}></div>
                        <p className={styles.profileUsername}>Suggested_User</p>
                    </div>
                    <div className={styles.targetIcon}></div>
                </div>
            </Link>
        </div>
    )
}

export default targetProfile