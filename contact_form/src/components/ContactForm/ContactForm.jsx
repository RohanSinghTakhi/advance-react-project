import React from 'react'
import style from './Contact.module.css'
import Button from '../Buttons/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'



function ContactForm() {
  return (
    <section className={style.container}>
      <div className={style.contctForm}>
        
      
      <Button text={"VIA SUPPORT CHAT"} icon={<MdMessage fontSize={"24px"}/>}></Button>
      <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize={"24px"}/>}></Button>
      </div>
    <div className={style.contactImage}></div>
    </section>
  )
}

export default ContactForm