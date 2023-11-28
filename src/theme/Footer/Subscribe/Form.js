import { useState } from 'react';
import { sanitize } from '../../../../utils/miscellaneous';
import Loading from '../../../components/Loading';
import styles from './styles.module.css';

const Form = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */

    const validateEmail = () => {
        // eslint-disable-next-line no-useless-escape
        const re = /\S+@\S+\.\S+/;
        return re.test( email );
    }

    const handleFormSubmit = () => {

        setError(null);

        if ( email === null ) {
        setError( 'Please enter your Email Adress!!!' );
        return null;
        }
        else if ( !validateEmail() ) {
            setError( 'Please enter a valid Email Adress!!!' );
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
    const handleInputKeyEvent = ( event ) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        handleFormSubmit();
        }
    }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
    const getMessage = (message) => {
        if ( !message ) {
        return null;
        }
        const result = message?.split('-') ?? null;
        if ( "0" !== result?.[0]?.trim() ) {
        return sanitize(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? sanitize( formattedMessage ) : null;
    }

    return (
        <div className={styles.subscribeSection}>
            <h3 className={styles.subscribeTitle}>Subscribe to Wiki Wonder</h3>
            <div className={styles.subscribeForm}>
                <div className={styles.subscribeEmailContainer}>
                <input
                    className={styles.subscribeInput}
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                    type="email"
                    placeholder="Your email"
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                />
                </div>
                <div className={styles.subscribeButtonContainer}>
                    <button className={styles.subscribeButton} onClick={handleFormSubmit}>
                        Subscribe
                    </button>
                </div>
            </div>
            <div className={styles.subscribeErrorSection}>
                { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass={styles.sendingMessage} hasVisibilityToggle={false}/> : null }
                {'error' === status || error ? (
                <div
                    className={styles.subscribeError}
                    dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
                />
                ) : null }
                {'success' === status && 'error' !== status && !error && (
                <div className={styles.successMessage} dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
                )}
            </div>
        </div>
    );
}

export default Form