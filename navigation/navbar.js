"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navlink'
import * as AiOutlineClose from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navMenu = () => setOpen(!open)
    return (
        <>
        <div className={styles.navbar}>
            <div className={open ? styles.closeIcon : styles.hamburger} onClick={navMenu}>
            <div></div>
            <div ></div>
            <div ></div>
            <p><AiOutlineClose.AiOutlineClose/>Close</p>
            </div>
            {open  && <NavLink/>}
        </div>
        <div className={open ? styles.sideMenu : styles.hideSideMenu}>
        <div onClick={navMenu} >
        <Link href='/'>Home</Link>
        </div>
        <div onClick={navMenu}>
        <Link href='/about'>About me</Link>
        </div>
        <div onClick={navMenu}>
        <Link href='/portfolio'>Portfolio</Link>
        </div>
        <div onClick={navMenu}>
        <Link href='/contact'>Contact me</Link>
        </div>
        </div>
        </>
    )
}
export default Navbar;