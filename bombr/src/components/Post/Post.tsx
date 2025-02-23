import styles from './post.module.css'

const Post = () => {
    return(
        <div className={styles.postWrapper}>
            <header className={styles.postHeader}>
                <div className={styles.userProfileWrapper}>
                    <div className={styles.userProfilePic}></div>
                    <p className={styles.userProfileUsername}>dew-johnostrills</p>
                </div>
                <p className={styles.bombedBy}>got bombed by...</p>
                <div className={styles.userProfileWrapper}>
                    <img className={styles.userProfilePic} src="" alt="" />
                    <p className={styles.userProfileUsername}>stonker6000K</p>
                </div>
            </header>
            <div className={styles.postContent}></div>
            <footer className={styles.postFooter}>
                <div className={styles.postText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia saepe assumenda soluta nisi veniam dolor impedit, sit corporis unde numquam?
                </div>
                <div className={styles.postButtonsWrapper}>
                    <img className={styles.postButtonIcon} src="/like.svg" alt="" />
                    <img className={styles.postButtonIcon} src="/comment.svg" alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Post