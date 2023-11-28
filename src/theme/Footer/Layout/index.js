import React from 'react';
import clsx from 'clsx';
import Subscribe from '../Subscribe/SubscriptionForm';



export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
        <Subscribe />
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {/* Horizontal line here*/}
            <hr className="footer__horizontal-line" />
            {copyright}
          </div>
        )}
      </div> 
     
    </footer>
  );
}

