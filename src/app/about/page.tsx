import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

const About = () => {
    return (
        <div className={styles.heading}>
        <div className={styles.portfolio}><h1>Web Developer</h1></div>
          <div className={styles.nav}>
          <div> 
           Hi, <br />I am glad you made it here. You can call me Kingsley, or K.I., a <b>brilliant and creative Web Developer</b>.
           I love to handle challenging projects. I know that is why you are here because you have a challenge for me.
           </div>
            <h2></h2>
            <span>&#9660;</span>
           <div><Link href='#backend'>Backend projects</Link></div> 
           <div><Link href='#frontend'>Frontend projects</Link></div> 
           <div><Link href='#technology'>Skills</Link></div>
           <div><Link href='#contact'>Contact me</Link></div>
           <span>&#9650;</span>
           <div className={styles.resume}>
           <a href="/Kingsley_Onah_CV.pdf" download="Kingsley_Onah_CV.pdf">Resume</a>
           </div>
            </div>
        <div className={styles.profileCon}>
      <div className={styles.profile}>
        <div>
        <Image className={styles.profile_picture}
        src="/myPicture.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
        </div>
        <div className={styles.userName}><Link href='https://linkedin.com/in/kingsley-ijuo-onah' target='https://linkedin.com/in/kingsley-ijuo-onah'> 
        KINGSLEY IJUO ONAH</Link></div>
        <div><h3>Fullstack Developer</h3></div>
        <div className={styles.stacks}>JavaScript, NodeJs, NestJs, NextJs, MySQL</div>
        </div>
        </div>
        </div>
    )
}
export default About;