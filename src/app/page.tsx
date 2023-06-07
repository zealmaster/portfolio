import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import About from './about/page'
import Portfolio from './portfolio/page'

export default function Home() {
  return (
    <main className={styles.main}>
     <About />
    <Portfolio />
    
       <div className={styles.beforeFooter}></div>
      <div className={styles.footer}> 
      <div className={styles.icon}>
        <Link href="https://www.linkedin.com/in/kingsley-ijuo-onah" target="linkedin.com/in/kingsley-ijuo-onah">
        <Image src="/linkedin.png" width={15} height={15} alt='LinkedIn logo'/>
        </Link>
        </div>
      <div className={styles.icon}>
        <Link href="https://github.com/zealmaster" target="https://github.com/zealmaster">
          <Image src="/github-142.svg" width={15} height={15} alt='github logo'/>
          </Link>
          </div>
      <div className={styles.icon}>
        <Link href="mailto:onahkingsleyijuo@gmail.com" target="mailto:onahkingsleyijuo@gmail.com">
          <Image src="/gmail-icon-logo-svgrepo-com.svg" width={15} height={15} alt='gmail logo'/>
          </Link></div>
      <p>&copy; 2023 Kingsley. All rights reserved.</p> 
      </div> 

    </main>
  )
}
