import styles from './targetProfile.module.css'
import Link from 'next/link'

interface TargetProfileProps {
    name: string;
    username: string;
    fullName: string;
}

const targetProfile: React.FC<TargetProfileProps> = ({ name, username, fullName }) => {
    return(
        <div className={styles.componentWrapper}>
           <div className={styles.suggestedProfile}>
               <div className={styles.targetProfileImageNameWrapper}>
                   <div className={styles.profileImage}></div>

                    {username ? (
                        <p className={styles.profileUsername}>{username}</p>
                    ) : (
                        <p className={styles.profileUsername}>{name}</p>
                    )}
                </div>
                <div className={styles.targetIcon}></div>
            </div>
        </div>
    )
}

export default targetProfile