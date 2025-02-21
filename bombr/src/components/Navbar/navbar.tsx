import Logo from '../Logo/Logo.tsx'
import NavItem from '../NavItem/navItem.tsx'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return(
        <nav className={styles.navBar}>
            <Link href="/home-feed">
                <Logo></Logo>
            </Link>
            <ul className={styles.ul}>
                <span>
                    <li><NavItem linkHref="/home-feed" path="/home.svg" imgAlt="Home icon" text="Home"></NavItem></li>
                    <li><NavItem linkHref="/search" path="/search.svg" imgAlt="Search icon" text="Search"></NavItem></li>
                    <li><NavItem linkHref="/404" path="/newBomb.svg" imgAlt="New Bomb icon" text="New Bomb"></NavItem></li>
                    <li><NavItem linkHref="/notifications" path="/notifications.svg" imgAlt="Notifications icon" text="Notifications"></NavItem></li>
                </span>
                <span className={styles.lastChild}>
                    <li><NavItem linkHref="/login" path="/logout.svg" imgAlt="Logout icon" text="Logout"></NavItem></li>
                </span>
            </ul>
        </nav>
    )
}

export default Navbar