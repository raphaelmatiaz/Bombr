import Link from 'next/link'
import styles from './navItem.module.css'

const NavItem = (props: any) => {
    return(
        <div className={styles.navItemWrapper}>
            <Link className={styles.navItem} href={props.linkHref}>
                <img src={props.path} alt={props.imgAlt} />
                <p>{props.text}</p>
            </Link>
        </div>
    )
}

export default NavItem