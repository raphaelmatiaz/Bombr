import { useParams } from 'next/navigation'
import styles from './suggestedProfile.module.css'
import Link from 'next/link'

interface suggestedProfileProps {
    name?: string
    username?: string
    fullName?: string
    id?: string
}

const suggestedProfile = (props: suggestedProfileProps) => {

    // const { name } = useParams(); // Get the parameter from the URL
    // const decodedName = decodeURIComponent(name ?? "Unknown User");
    return(
        <div className={styles.componentWrapper}>
        {props.username ? (
            <div className={styles.suggestedProfileWrapper}>
                <div className={styles.suggestedProfile}>
                    <Link className={styles.link} href={`/profile/${props.username}`}>
                        <div className={styles.profileImage}></div>
                        <p className={styles.profileUsername}>{props.username}</p>
                    </Link>
                    <button className={styles.declareWarButton}>Declare War</button>
                </div>
            </div>
        ) : (
            <div className={styles.suggestedProfileWrapper}>
                <div className={styles.suggestedProfile}>
                    {/* // antes tava /profile/'{props.name}' aqui por baixo */}
                    <Link className={styles.link} href={`/profile/${props.id}`}> 
                        <div className={styles.profileImage}></div>
                        <p className={styles.profileUsername}>{(props.name ?? '').replace(/%20/g, ' ')}</p>
                    </Link>
                    <button className={styles.declareWarButton}>Declare War</button>
                </div>
            </div>
        )}
        </div>
    )
}

export default suggestedProfile