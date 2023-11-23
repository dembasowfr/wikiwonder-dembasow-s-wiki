import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutMe from '@site/src/components/AboutMe';
import Contact from '@site/src/components/Contact';
import DailyQuote from '@site/src/components/DailyQuote';
import Subscribe from '@site/src/components/Subscribe';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
       
        <div className={styles.homePage}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Who I am ? - 2min ⏱️
          </Link> */}

          <div className={styles.avatarImage}>
            <img src="img/graduation.jpg" alt="demba sow" />
          </div>
          <div className="avatar-text">
            <h1 className={styles.title}>WIKI WONDER </h1>
            <h2 className={styles.slogan}>Make the world a better place by spreading Love🫰 wisdom☮️ and kindness🫂</h2>
            <p className={styles.author}>by DEMBA SOW</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      >
      <HomepageHeader />
      <main>
        <AboutMe />
        <DailyQuote />
        <HomepageFeatures />
        <Contact />
        {/* <Subscribe /> */}
      </main>
    </Layout>
  );
}
