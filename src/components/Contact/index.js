
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useState } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Client, Databases, ID } from "appwrite";

import ReCAPTCHA from "react-google-recaptcha";
import { useThemeConfig } from '@docusaurus/theme-common';

export default function Contact() {



    const [formData, setFormData] = useState({ name: "", surname:"", email:"", message: "", recaptcha: "" });
    const { colorMode } = useThemeConfig();

    const recaptchaTheme = colorMode === 'dark' ? 'dark' : 'light';

    // this is to check the color mode that is currently active
    // theres a color switcher in the footer of the website
    // so when the user clicks on the color switcher, the color mode changes
    // and the contact form should also change its color mode
    //console.log("Theme Config: ", useThemeConfig());
    

    //console.log("Color Mode: ", colorMode);

    
    const handleChange = (e) => {
      e.preventDefault();
      setFormData({ ...formData, 
        [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData();
    };

    

    // Variables
    const {siteConfig: {customFields},} = useDocusaurusContext();

    const project_id = customFields.REACT_APP_PROJECT_ID;
    const endpoint = customFields.REACT_APP_ENDPOINT;
    const database_id = customFields.REACT_APP_DATABASE_ID;
    const collection_id = customFields.REACT_APP_COLLECTION_ID;
    const recaptcha_site_key = customFields.REACT_APP_RECAPTCHA_SITE_KEY;

  


    
    const client = new Client();
    
    client
        .setEndpoint(endpoint) // Your API Endpoint
        .setProject(project_id) // Your project ID
    ;

    const databases = new Databases(client);

    const updateData = () => {

        const promise = databases.createDocument(
            database_id, 
            collection_id, 
            ID.unique(),
            {
                "name": formData.name,
                "surname": formData.surname,
                "email": formData.email,
                "message": formData.message,
                "recaptcha": formData.recaptcha,
            }
        );

        // if one of the fields is empty, and the user clicks on the submit button, show an alert message
        //saying that all the fields are required

        if (formData.name === "" || formData.surname === "" || formData.email === "" || formData.message === "") {
            alert("All the fields are required!!!");
        }

        promise.then(function (response) {
            console.log(response); // Success
            //show a success message on the screen as a notification
            alert("Your message has been sent successfully!!!");
            //clear the form
            setFormData({ name: "", surname:"", email:"", message: "" });
            
        }, function (error) {
            console.log("An Error Occured: ",error); // Failure
        });
    }


    //Google Captcha
    
    return (
        
        <section className={styles.contactSection}>
            <div className="container">
                <h2 className={styles.contactTitle}>CONTACT</h2>
                <h3 className={styles.contactSubtitle}>Do you have any suggestion? Want to say something? Please do share it with me</h3>
                <div className={styles.features}>
                    <form className={styles.contactForm}>
                        <div className={styles.formLabels}>
                            <div className={styles.formLabel}>
                                <label>Name</label>
                                <input type="text" name="name" value={formData.name} 
                                    placeholder='Your Lovely Name'
                                    onChange={handleChange}/>
                            </div>
                            <div className={styles.formLabel}>
                                <label>Surname</label>
                                <input type="text" name="surname" placeholder='Your Beloved Surname' value={formData.surname} 
                                    onChange={handleChange}/>
                            </div>
                            <div className={styles.formLabel}>
                                <label>Email</label>
                                <input type="email"  placeholder="martinlutherkingjr@gmail.com" name="email" value={formData.email} 
                                    onChange={handleChange}/>
                            </div>
                        
                            <div className={styles.formLabel}>
                                <label>Review</label>
                                <textarea className={styles.feedback} type="text" name="message"
                                    placeholder="Say Something Here..." value={formData.message}
                                    onChange={handleChange} />
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
                                    onClick={handleSubmit}
                                    disabled={formData.recaptchaValue === ""}
                                    >
                                        Send Feedback
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    
    );
  }
  