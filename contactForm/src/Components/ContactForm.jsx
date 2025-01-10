import React from 'react'
import Buttons from '../Components/Buttons'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { useState } from "react"

function ContactForm() {
    const [name, setName] = useState("akash")
    const [email, setEmail] = useState("akash@gmail.com")
    const [text, setText] = useState("test text")

    const submit = (e) => {
        e.preventDefault()
        setName(e.target[0].value)
        setEmail(e.target[1].value)
        setText(e.target[2].value)
    }

    const call = () => {
        alert('calling')
        window.location.href = 'tel: +916392033466'
    }


    return (
    <>
       <section className='container'>
            <div className="contact-form">
                <div className="top-btn">
                    <Buttons text="VIA CHAT SUPPORT" icon={ <MdMessage fontSize="24px" /> }/>
                    <Buttons text="VIA CALL" icon={ <FaPhoneAlt fontSize="24px"/> }
                    onClick = {call}/>
                </div>
                <Buttons isOutline={true} text="VIA EMAIL FORM" icon={ <HiMail fontSize="24px"/> }/>

                <form action="" onSubmit={submit}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <textarea name='text' />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }}>
                    <Buttons text="SUBMIT"/>
                    </div>
                </form>
                <div>
                    Entered name: {name} <br />
                    Entered email: {email} <br />
                    Entered text: {text}
                </div>
            </div> 
            <div className="contact-image">
                <img src="/images/247Service.png" alt="" />
            </div>
        </section>    
    </>
  )
}

export default ContactForm