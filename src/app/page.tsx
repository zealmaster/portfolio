import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import About from './about/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'


export default function Home() {
  return (
    <main className={styles.main}>
     <About />
    <Portfolio />
    <Contact />
    </main>
  )
}
