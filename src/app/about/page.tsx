import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

const About = () => {
    return (
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
    )
}
export default About;