"use client"
import axios from 'axios'
import styles from './page.module.css'
import { useState } from 'react'
function Contact() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // const res = await fetch('https://kingsley-onah.vercel.app/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json', 
        //     },
        //     body: JSON.stringify({ email, name, message })
        // })
        try {
            const res = await axios.post('/api/contact', {
              email,
              name,
              message
            });
            // Handle the response
            console.log(await res.status)
          } catch (error) {
            // Handle any error that occurs
          }
    }
    return (
        <div id='contact' className={styles.section}>
            <div className={styles.sectionHeader}>Contact Me</div>
            <div>Send me a message by filling the form below</div>
            <div>
                <form>
                    <div className={styles.form}>
                        <label htmlFor='name'>Name </label>
                        <input type='text' name="senderName" id='name' placeholder='Your full name'
                            onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor='email'>Email</label>
                        <input type='email' name="email" id='email' placeholder='Your email'
                            onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor='message'>Message</label>
                        <textarea name="message" rows={20} id='message' placeholder='Type your message here...'
                            onChange={(e) => setMessage(e.target.value)} required /> <br />
                        <button type="submit" onClick={handleSubmit}>Message me</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;