"use client"
import axios from 'axios'
import styles from './page.module.css'
import { useState } from 'react'
import Modal from 'react-modal';
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
    return (
        <div id='contact' className={styles.section}>
            <div className={styles.sectionHeader}>Contact Me</div>
            <div>Send me a message by filling the form below</div>
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
                onRequestClose = {() => setModalOpen(false)}
            >
                <div className={styles.modal}>Message sent successfully</div>
            </Modal>
        </div>
    )
}

export default Contact;