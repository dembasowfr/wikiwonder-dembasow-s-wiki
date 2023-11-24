
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import ReCAPTCHA from "react-google-recaptcha";
import { useThemeConfig } from '@docusaurus/theme-common';


// Toast Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {



    
    const { colorMode } = useThemeConfig();
    //console.log("Color Mode: ", colorMode);

    const recaptchaTheme = colorMode === 'dark' ? 'dark' : 'light';

    const [formData, setFormData] = useState({ from_name: "", from_surname:"", from_email:"", message: "", recaptcha: ""  });
  
    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    

    // Variables
    const {siteConfig: {customFields},} = useDocusaurusContext();

    

    const recaptcha_site_key = customFields.REACT_APP_RECAPTCHA_SITE_KEY;
    const emailjs_service_id = customFields.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjs_template_id = customFields.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjs_public_key = customFields.REACT_APP_EMAILJS_PUBLIC_KEY;


   

  

    const form = useRef();
    const [showRecaptcha, setShowRecaptcha] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(emailjs_service_id, emailjs_template_id, form.current, emailjs_public_key)
        .then((result) => {
            console.log(result.text);
           

            setFormData({ from_name: "", from_surname:"", from_email:"", message: "", recaptcha: "" });
           

            toast.success('Message Sent Successfully!!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,

            });
            // Show the reCAPTCHA after the form is submitted
            setShowRecaptcha(true);
            
        }, (error) => {
            console.log(error.text);
        });
    };

    
    
    
    return (
        
        <section className={styles.contactSection}>
            <ToastContainer />
            <div className="container">
                <h2 className={styles.contactTitle}>CONTACT</h2>
                <h3 className={styles.contactSubtitle}>Do you have any suggestion? Want to say something? Please do share it with me</h3>
                <div className={styles.features}>
                    <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                        <div className={styles.formLabels}>
                            <div className={styles.formLabel}>
                                <label>Name</label>
                                <input type="text" name="from_name" value={formData.from_name} 
                                    placeholder='Your Lovely Name'
                                    onChange={handleChange}/>
                                <div className={styles.errorMessage}>Your name is required!!!</div>
                            </div>
                            <div className={styles.formLabel}>
                                <label>Surname</label>
                                <input type="text" name="from_surname" placeholder='Your Beloved Surname' value={formData.from_surname} 
                                    onChange={handleChange}/>
                                <div className={styles.errorMessage}> Your surname is required!!!</div>
                            </div>
                            <div className={styles.formLabel}>
                                <label>Email</label>
                                <input type="email" name="from_email" placeholder="martinlutherking@gmail.com" value={formData.from_email} 
                                    onChange={handleChange}/>
                                <div className={styles.errorMessage}> Please enter your email address!!!</div>
                            </div>
                        
                            <div className={styles.formLabel}>
                                <label>Review</label>
                                <textarea className={styles.feedback} type="text" name="message"
                                    placeholder="Say Something Here..." value={formData.message}
                                    onChange={handleChange} />
                                <div className={styles.errorMessage}>Message can not be empty!!!</div>
                            </div>
                            <div className={styles.formLabel}>
                                <div className={styles.recaptcha}>
                                    <ReCAPTCHA 
                                       name = "recaptcha"
                                       sitekey={recaptcha_site_key} 
                                       onChange={(value) => setFormData({ ...formData, recaptcha: value })}
                                       theme={recaptchaTheme}
                                    />
                                </div>
                            </div>

                            <div className={styles.submitButton}>
                                <button
                                    type="submit"
                                    className={styles.submit}
                                    disabled={formData.recaptchaValue === ""}
                                    >
                                       Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    
    );
  }
  