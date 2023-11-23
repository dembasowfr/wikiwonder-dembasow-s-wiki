
import React, { useEffect, useRef, useState } from "react";
import BrowserOnly from '@docusaurus/BrowserOnly';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styles from './styles.module.css';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


export default function Subscribe() {

    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");
    const captchaRef = useRef(null);

    const onSubmit = (event) => {
        event.preventDefault();
        captchaRef.current.execute();
    };

    const {siteConfig: {customFields},} = useDocusaurusContext();

    const hcaptcha_site_key = customFields.REACT_APP_HCAPTCHA_SITE_KEY;

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                var data = {
                    email: email,
                    captchaToken: token
                };
    
                // send message
                const response = await fetch("/api/email-signup", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
            }
        };
    
        fetchData();
    }, [token, email]);

    return ( 
        <section id="signup" className={styles.subscribeSection}>
            <div className="container">
                <h2 className={styles.subscribeTitle}>SUBSCRIPTION</h2>
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        if (token) {
                            // signup submitted
                            return <div>Thank you! You will receive the confirmation email shortly.</div>
                        } else if (window.location.href.endsWith('?signup-confirmed')) {
                            // signup confirmed
                            return <div><span style={{fontSize:'25px', marginRight:'10px'}}>🎉</span>Congratulations! You have successfully subscribed to Pglet newsletter.</div>
                        } else {
                            // signup form
                            return <form onSubmit={onSubmit}>
                                <h3>Subscribe to Wiki Wonder's daily email for more interesting contents!</h3>
                                
                                <div className={styles.subscribeForm}>
                                    <div className={styles.subscribeEmailContainer}>
                                        <input
                                            className={styles.subscribeInput}
                                            type="email"
                                            value={email}
                                            placeholder="Your email address"
                                            onChange={(evt) => setEmail(evt.target.value)}
                                        />
                                    </div>
                                    <div className={styles.subscribeButtonContainer}>
                                        <button 
                                            type="submit" 
                                            value="Submit" 
                                            className={styles.subscribeButton}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                <HCaptcha
                                    sitekey={hcaptcha_site_key}
                                    size="invisible"
                                    onVerify={setToken}
                                    ref={captchaRef}
                                />
                                
                            </form>
                        }
                    }}
                </BrowserOnly>
            </div>
        </section>
    );
  }
  