import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Form from './Form';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Subscribe = () => {

  const {siteConfig: {customFields},} = useDocusaurusContext();

  const MAILCHIMP_URL = customFields.REACT_APP_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL }
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <Form
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default Subscribe;