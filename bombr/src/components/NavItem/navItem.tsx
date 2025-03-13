import Link from 'next/link'
import styles from './navItem.module.css'

interface NavItemProps {
    linkHref?: string
    path: string
    imgAlt: string
    text: string
    onClickEvent?: () => void
}

const NavItem = (props: NavItemProps) => {
    return(
        <div className={styles.navItemWrapper}>
            <Link className={styles.navItem} href={props.linkHref || '#'} onClick={props.onClickEvent}>
                <img src={props.path} alt={props.imgAlt} />
                <p>{props.text}</p>
            </Link>
        </div>
    )
}

export default NavItem