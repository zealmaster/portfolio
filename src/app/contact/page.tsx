"use client"
import axios from 'axios'
import styles from './page.module.css'
import { useState } from 'react'
import Modal from 'react-modal';
import Link from 'next/link';
import Image from 'next/image';
function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [modalOpen, setModalOpen] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()    
        try {
            const res = await axios.post('/api/contact', {
              email,
              name,
              message
            });
            // Handle the response
            if (res.status === 200) setModalOpen(true)
          } catch (error) {
            // Handle any error that occurs
            console.log(error)
          }
        
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false);
        window.location.reload();
    }
    return (
        <div id='contact' className={styles.section}>
            <div className={styles.sectionHeader}>Contact Me</div>
        
        <div className={styles.socialMedia}>
            <div >
        <Link href="https://www.linkedin.com/in/kingsley-ijuo-onah" target="linkedin.com/in/kingsley-ijuo-onah">
        <Image src="/linkedin.png" width={15} height={15} alt='LinkedIn logo'/> <span>LinkedIn</span>
        </Link>
            </div>
            <div >
        <Link href="https://github.com/zealmaster" target="https://github.com/zealmaster">
          <Image src="/github-142.svg" width={15} height={15} alt='github logo'/> <span>Github</span>
          </Link>
          </div>
         <div >
        <Link href="mailto:onahkingsleyijuo@gmail.com" target="mailto:onahkingsleyijuo@gmail.com">
          <Image src="/gmail-icon-logo-svgrepo-com.svg" width={15} height={15} alt='gmail logo'/> <span>Email</span>
          </Link></div>
            </div>

            <div>For question, chat or further enquiry kindly send me a message using the form below.</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form}>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text' 
                            name="senderName" 
                            id='name' 
                            placeholder='Your full name'
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />

                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            name="email" 
                            id='email' 
                            placeholder='Your email'
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />

                        <label htmlFor='message'>Message</label>
                        <textarea 
                            name="message" 
                            rows={20} 
                            id='message' 
                            placeholder='Type your message here...'
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        /> 
                        <br />
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
            <Modal
                isOpen = {modalOpen}
                onRequestClose = {() => closeModal()}
                className={styles.modal_container}
            >
                <div className={styles.modal}>Message sent successfully</div>
            </Modal>
        </div>
    )
}

export default Contact;