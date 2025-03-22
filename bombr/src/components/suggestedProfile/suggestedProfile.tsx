import { useParams } from 'next/navigation'
import styles from './suggestedProfile.module.css'
import Link from 'next/link'

interface suggestedProfileProps {
    name?: string
    username?: string
    fullName?: string
}

const suggestedProfile = (props: suggestedProfileProps) => {

    // const { name } = useParams(); // Get the parameter from the URL
    // const decodedName = decodeURIComponent(name ?? "Unknown User");
    return(
        <div className={styles.componentWrapper}>
        {props.username ? (
            <>
                <Link className={styles.link} href={`/profile/${props.username}`}>
                    <div className={styles.suggestedProfile}>
                        <div className={styles.profileImage}></div>
                        <p className={styles.profileUsername}>{props.username}</p>
                    </div>
                </Link>
                <button className={styles.declareWarButton}>Declare War</button>
            </>
        ) : (
            <>
                <Link className={styles.link} href={`/profile/${props.name}`}>
                    <div className={styles.suggestedProfile}>
                        <div className={styles.profileImage}></div>
                        <p className={styles.profileUsername}>{(props.name ?? '').replace(/%20/g, ' ')}</p>
                    </div>
                </Link>
                <button className={styles.declareWarButton}>Declare War</button>
            </>
        )}
        </div>
    )
}

export default suggestedProfile