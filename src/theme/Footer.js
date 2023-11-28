import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function FooterLink({to, href, label, ...props}) {
  const link = to ? <Link to={to}>{label}</Link> : <a href={href}>{label}</a>;
  return (
    <li className={styles.footerItem} {...props}>
      {link}
    </li>
  );
}

function Footer() {
  const {siteConfig} = useDocusaurusContext();
  const {themeConfig} = siteConfig;
  const {footer} = themeConfig || {};

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container">
        {/* ... */}
        {/* Add your subscription form here */}
        <div>
          <h4>Subscribe</h4>
          <form>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        {/* ... */}
      </div>
    </footer>
  );
}

export default Footer;