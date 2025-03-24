import Link from 'next/link'
import styles from './post.module.css'

const Post = () => {
    return(
        <div className={styles.postWrapper}>
            <header className={styles.postHeader}>
                <Link href={`/profile/dew-johnostrills`}>
                    <div className={styles.userProfileWrapper}>
                        <div className={styles.userProfilePic}></div>
                        <p className={styles.userProfileUsername}>dew-johnostrills</p>
                    </div>
                </Link>
                <p className={styles.bombedBy}>got bombed by...</p>
                <Link href={`/profile/stonker6000K`}>
                    <div className={styles.userProfileWrapper}>
                        <div className={styles.userProfilePic}></div>
                        <p className={styles.userProfileUsername}>stonker6000K</p>
                    </div>
                </Link>
            </header>
            <div className={styles.postContent}></div>
            <footer className={styles.postFooter}>
                <div className={styles.postText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia saepe assumenda soluta nisi veniam dolor impedit, sit corporis unde numquam?
                </div>
                <div className={styles.postButtonsWrapper}>
                    <img className={styles.postButtonIcon} src="/like.svg" alt="Like Icon" />
                    <img className={styles.postButtonIcon} src="/comment.svg" alt="Comment Icon" />
                </div>
            </footer>
        </div>
    )
}

export default Post