
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

import { useForm } from 'react-hook-form';

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

    const { register  ,setValue,  formState:{errors} ,  handleSubmit} = useForm(
        {mode: "all"}
    );

    console.log("Form Errors: ",errors);

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
                    <form 
                        className={styles.contactForm} 
                        ref={form} 
                        onSubmit={
                            handleSubmit(
                                (data) => console.log(data)
                            )
                        }
                    >
                        <div className={styles.formLabels}>
                            <div className={styles.formLabel}>
                                <label>Name</label>
                                <input 
                                    {
                                        ...register(
                                            "from_name",  
                                            {required:"Name is required!!!"},
                                            {minLength: {value: 3, message: "Name must be at least 3 characters long!!!"}}
                                        )
                                    } 
                                    type="text" name="from_name" value={formData.from_name} 
                                    placeholder='Your Lovely Name'
                                    onChange={handleChange}
                                />
                                {errors.from_name && <p className={styles.errorMessage}>{errors.from_name.message}</p>}
                               
                            </div>
                            <div className={styles.formLabel}>
                                <label>Surname</label>
                                <input 
                                    {...register("from_surname", 
                                        {required:"Surname is required!!!"},
                                        {minLength: {value: 3, message: "Surname must be at least 3 characters long!!!"}}
                                    )} type="text" name="from_surname" placeholder='Your Beloved Surname' value={formData.from_surname} 
                                    onChange={handleChange}
                                />
                                {errors.from_surname && <p className={styles.errorMessage}>{errors.from_surname.message}</p>}
                            </div>
                            <div className={styles.formLabel}>
                                <label>Email</label>
                                <input {...register("from_email", 
                                    {required:"Email address is required!!!"},
                                    {pattern: {value: /^\S+@\S+$/i, message: "Invalid email address!!!"}}
                                    )} type="email" name="from_email" placeholder="martinlutherking@gmail.com" value={formData.from_email} 
                                    onChange={handleChange}
                                />
                                {errors.from_email && <p className={styles.errorMessage}>{errors.from_email.message}</p>}
                            </div>
                        
                            <div className={styles.formLabel}>
                                <label>Review</label>
                                <textarea {...register("message", {required:"Message can not be empty!!!"},
                                    {minLength: {value: 10, message: "Message must be at least 10 characters long!!!"}}
                                    )} className={styles.feedback} type="text" name="message"
                                    placeholder="Say Something Here..." value={formData.message}
                                    onChange={handleChange} 
                                />
                                {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
                            </div>
                            <div className={styles.formLabel}>
                                <div className={styles.recaptcha}>
                                    <ReCAPTCHA 
                                        {...register("recaptcha", 
                                            {required:"Please verify you are a human!!!"})
                                        }
                                       name = "recaptcha"
                                       sitekey={recaptcha_site_key} 
                                       onChange={(value) => setValue("recaptcha", value, { shouldValidate: true })}
                                       theme={recaptchaTheme}
                                    />
                                    {errors.recaptcha && <p className={styles.errorMessage}>{errors.recaptcha.message}</p>}
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
  