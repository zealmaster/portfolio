import Link from "next/link"
import styles from './page.module.css'

const NavLink = () => {
    return (
    <div className={styles.navLink}>
    <Link href='/'>Home</Link>
    <Link href='/about'>About me</Link>
    <Link href='/portfolio'>Portfolio</Link>
    <Link href='/contact'>Contact me</Link>
    </div>)
}
export default NavLink;