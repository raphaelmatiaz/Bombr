import styles from './suggestedProfile.module.css'

const suggestedProfile = () => {
    return(
        <div className={styles.suggestedProfile}>
            <div className={styles.profileImage}></div>
            <p className={styles.profileUsername}>Username</p>
        </div>
    )
}

export default suggestedProfile