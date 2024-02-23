import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")}
        alt="Me sitting with a laptop" 
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}
                alt="Cursor Icon" 
                />
                <div className={styles.aboutItemText}>
                    <h3>Software Engineer</h3>
                    <p>I am a software engineer with an intership experience at Microsoft</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="Server Icon" 
                />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I am a frontend developer with various projects on HTML, CSS and React</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="Server Icon" 
                />
                <div className={styles.aboutItemText}>
                    <h3>Content Creator</h3>
                    <p>I am a technical content creator with 8k+ subscribers on youtube</p>
                </div>
            </li>
        </ul>
    </div>
  </section>
};

export default About