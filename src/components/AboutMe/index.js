
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function AboutMe() {
    return (

        <section className={styles.aboutMeSection}>
            <div className="container">
                <h2 className={styles.aboutMeTitle}>ABOUT</h2>
                <p className={styles.aboutMeText}>
                    Welcome to my personal website! I am a computer engineer, writer, and host of the upcoming <span className={styles.showName}>DEMBA SHOW</span>, where I will be sharing my thoughts and ideas with the world.
                    Also interviewing people from different backgrounds and cultures.
                    Wiki Wonder is a platform dedicated to connecting people from around the world and spreading ideas of love and kindness.
                    Explore my content, get to know me better, and join me in making the world a better place through love, kindness and communication.
                </p>
            </div>
        </section>
    );
  }
  