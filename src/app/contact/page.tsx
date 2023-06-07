import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
const Contact = () => {
    return (
        <div id='contact' className={styles.section}>
            <div className={styles.sectionHeader}>Contact Me</div>
            <div>Send me a message by filling the form below</div>
        <div >
        <form>
            <div className={styles.form}>
        <label htmlFor='name'>Name </label> 
        <input type='text' name="senderName" id='name' required/> 
        <label htmlFor='phone'>Phone number</label> 
        <input type='tel' name="phone" id='phone' required/> 
        <label htmlFor='message'>Message</label>
        <textarea  name="message" rows={20} id='message' /> <br />
        <button type="submit">Message me</button>
        </div>
        </form>
        </div>
        </div>
    )
}

export default Contact;