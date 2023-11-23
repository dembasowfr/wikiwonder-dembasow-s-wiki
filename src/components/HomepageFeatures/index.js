import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'I love to write',
    Png: require('@site/static/img/writer.png').default,
    description: (
      <>
        I share my ideas with the world, but I also love to hear people's thoughts and opinions.
        I am a writer, and I love to write about my experiences and my thoughts. Here I will be sharing
        different type of content, from my personal life to my professional life. I hope you enjoy it!
      </>
    ),
  },
  {
    title: 'I am a Computer Engineer',
    Png: require('@site/static/img/web-developer.png').default,
    description: (
      <>
       As a computer Engineer, I don't only talk with people, in fact, I talk with computers too.
       I am a web developer, and I love to create websites and web applications. I am also an AI enthusiast,
        and I love to create softwares and algorithms that can make people's life easier. 
      </>
    ),
  },
  {
    title: 'I run DEMBA SHOW',
    Png: require('@site/static/img/youtuber.png').default,
    description: (
      <>
        I have always been passionate about communication and speech. I love to talk with people and share ideas.
        I am the host of the upcoming DEMBA SHOW, a YouTube channel where I share my thoughts and ideas with the world.
        I also interview people from different backgrounds and cultures.
      </>
    ),
  },
];

function Feature({Png, title, description}) {
  return (
    <div className={styles.featureCard}>
      <div className="text--center">
        <img className={styles.featurePng} src={Png} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.featuresTitle}>FEATURES</h2>
        <h3 className={styles.featuresSubtitle}>What I do? Who I am? Take a look</h3>
        <div className={styles.featuresList}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

      
    </section>
  );
}
