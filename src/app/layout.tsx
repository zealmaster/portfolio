import './globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '../../navigation/navbar'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin']}, )

export const metadata = {
  title: "Kingsley onah's portfolio",
  description: 'Kingsley Ijuo Onah is a fullstack web developer. A savvy engineer with a perfect mix of creativity and high intellectual powers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Analytics />
        <div className={styles.main}>
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
      <p>&copy; 2023 Kingsley Ijuo Onah</p> 
      </div> 

        </div>
        </body>
    </html>
  )
}
