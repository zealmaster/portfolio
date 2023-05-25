import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
      <div className={styles.portfolio}><h1>Web Developer</h1></div>
        <div className={styles.nav}>
        <div> 
         Hi! I am glad you made it here. You can call me Kingsley, or K.I., a <b>brilliant and creative Web Developer</b>.
         I love to handle challenging projects. I know that is why you are here because you have a challenge for me.
         </div>
          <h1>Completed jobs</h1>
          <span>&#9660;</span>
         <div><Link href='#backend'>Backend projects</Link></div> 
         <div><Link href='#frontend'>Frontend projects</Link></div> 
         <div><Link href='#technology'>Skills</Link></div>
          </div>
    <div className={styles.profile}>
      <div>
      <Image className={styles.profile_picture}
      src="/profile_picture.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
      <div className={styles.userName}><Link href='https://linkedin.com/in/kingsley-ijuo-onah' target='https://linkedin.com/in/kingsley-ijuo-onah'> 
      KINGSLEY IJUO ONAH</Link></div>
      <div><h3>Fullstack Developer</h3></div>
      <div>JavaScript, NodeJs, NestJs, NextJs, MySQL</div>
      </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader} id='backend'> Backend Projects</div>
        <section className={styles.sectionBody}>
          <ul>
            <li><Link href='https://github.com/zealmaster/school' target='https://github.com/zealmaster/school'>School</Link></li>
            <li><Link href='https://github.com/zealmaster/Check-Acronym-NodeJs-App' target='https://github.com/zealmaster/Check-Acronym-NodeJs-App'>Check Acronym</Link></li>
            <li><Link href='https://github.com/zealmaster/checkacronym' target='https://github.com/zealmaster/checkacronym'>Acronym in python</Link></li>
          </ul>
        </section>
        </div>
      <div className={styles.section}>
      <div className={styles.sectionHeader} id='frontend'>Frontend Projects</div>
      <section className={styles.sectionBody}>
          <ul>
            <li><Link href=' https://zealmaster.github.io/election-mata-naija/' target=' https://zealmaster.github.io/election-mata-naija/'>Election Mata Naija</Link></li>
            <li><Link href='https://ki-post-zealmaster.vercel.app/' target='https://ki-post-zealmaster.vercel.app/'>KI Post</Link></li>
            <li><Link href=' https://zealmaster.github.io/Text-To-Speech/' target=' https://zealmaster.github.io/Text-To-Speech/'>Text to Speech</Link></li>
            <li><Link href=' hhttps://kingsley-onah.vercel.app/' target='https://kingsley-onah.vercel.app/'>Kingsley Onah portfolio</Link></li>
          </ul>
        </section>
      </div>
      <div className={styles.section}>
      <div className={styles.sectionHeader} id='technology'>Technology Stack</div>
      <section className={styles.sectionBody}>
        <h3>Backend</h3>
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Nest.js</li>
            <li>Express.js</li>
            <li>Flask Python</li>
            <li>TypesScript</li>
          </ul>
        <h3>Frontend</h3>
          <ul>
            <li>Next.js</li>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        <h3>Database</h3>
          <ul>
            <li>SQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        <h3>CI/CD</h3>
          <ul>
            <li>Docker</li>
          </ul>
        </section>
      </div>
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
