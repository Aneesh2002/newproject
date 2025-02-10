import React from 'react'
import '../AboutUs/about.css'
import Navbar from '@/components/Navbar'

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="container d-flex justify-content-between">
        <div className='img mt-5'>
            <img src="/images/6222190-removebg-preview.png" alt=""/>
        </div>
        <div>
            <p className="p-5 mt-5">Welcome to <span style={{color: '#cf3ef3',fontSize: 'large'}}>𝐿𝐼𝒩𝒦𝐵𝒪𝒪𝒦,</span> your trusted digital 
                address book designed
                 to keep all your important contacts organized and easily accessible. 
                We are dedicated to providing a seamless and intuitive 
                platform that simplifies how you store, manage, and 
                retrieve contact information.
                Our mission is to help you stay connected with the people and organizations 
                that matter most—whether it’s for personal or
                professional purposes.
                 With a focus on simplicity, security, and reliability, our Contact Book
                 ensures your information is always at your fingertips.
                Whether you're looking to save time, stay organized, or build stronger
                 connections, <span style={{color: '#cf3ef3', fontSize: 'large'}}>𝐿𝐼𝒩𝒦𝐵𝒪𝒪𝒦,</span> is here to support your journey.
                Join us today and experience 
                a smarter way to manage your contacts!</p>
        </div>
    </div>
    
    </>
  )
}

export default AboutUs