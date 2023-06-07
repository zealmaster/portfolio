import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export const backend = [
   {title: "School",
    link: "https://github.com/zealmaster/school",
    description: ""},
   {title: "Check Akronym",
    link: "https://github.com/zealmaster/Check-Acronym-NodeJs-App",
    description: ""},
   {title: "Acronym in python",
    link: "https://github.com/zealmaster/checkacronym",
    description: ""},
]
export const frontend = [
   {title: 'Election Mata Naija',
    github: 'https://github.com/zealmaster/election-mata-naija',
    demo: 'https://zealmaster.github.io/election-mata-naija/',
    description: ""},
   {title: 'KI Post',
    github: 'https://ki-post-zealmaster.vercel.app/',
    demo: 'https://github.com/zealmaster/ki-post',
    description: "This project, KI Post is to demostrate the use of Next.js framework for frontend Reactjs applications."},
   {title: 'Text to Speech',
    github: 'https://zealmaster.github.io/Text-To-Speech/',
    demo: '',
    description: "This is an application that converts text to speech. It also has the feature to upload text file and read out the content of the file."},
   {title: 'My Portfolio Site',
    github: 'https://kingsley-onah.vercel.app/',
    demo: 'https://github.com/zealmaster/portfolio',
    description: "This is an application that converts text to speech. It also has the feature to upload text file and read out the content of the file."},
]

const Portfolio = () => {
    return (
        <><div className={styles.section}>
            <div className={styles.sectionHeader} id='backend'> Backend Projects</div>
            <section className={styles.sectionBody}>
            <ul>
            {backend.map((project) => (
                <li key={project.title}>
                <Link href={project.link} target="_blank">{project.title}</Link>
                </li>
            ))}
            </ul>
</section>
        </div><div className={styles.section}>
                <div className={styles.sectionHeader} id='frontend'>Frontend Projects</div>
                <section className={styles.sectionBody}>
                <ul>
            {frontend.map((project) => (
                <li key={project.title}>
                    {project.title}
                    <div className={styles.projectLink}>
                <div>
                <Link href={project.demo} target="_blank">
                    <Image src="/demo-icon.jpg" width={30} height={30} alt='demon-icon' /> Demo</Link>
                </div>
                <div>
                <Link href={project.github} target="_blank">
                    <Image src="/github-142.svg" width={30} height={30} alt='github-icon' /> Github</Link>
                </div>
                </div>
                </li>
            ))}
            </ul>
                </section>
            </div><div className={styles.section}>
                <div className={styles.sectionHeader} id='technology'>Technology Stack</div>
                <section className={styles.sectionBody}>
                    <div className={styles.skillSection}>
                       <Image src='/backend.png' width={200} height={200} alt='backend section' className={styles.image}/> 
                    <div className={styles.skillList}>
                       <h3>Backend</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Nest.js</li>
                            <li>Express.js</li>
                            <li>Flask Python</li>
                            <li>TypesScript</li>
                        </ul>
                        </div>
                    </div>

                    <div className={styles.skillSection}>
                    <Image src='/frontend.png' width={200} height={200} alt='frontend section' className={styles.image}/>
                    <div className={styles.skillList}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>Next.js</li>
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        </div>
                    </div>

                    <div className={styles.skillSection}>
                        <h3>Database</h3>
                        <ul>
                            <li>SQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    <div className={styles.skillSection}>
                        <h3>Others</h3>
                        <ul>
                            <li>Git/Github</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </section>
            </div></>
    )
}
export default Portfolio;
