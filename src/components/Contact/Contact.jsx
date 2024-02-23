import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
import HeroSocials from '../Hero/HeroSocials';

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!!</p>
        <HeroSocials/>
    </div>
    <div className={styles.footerBottom}>
      <hr />
      <div>
        <p>@{new Date().getFullYear()} SwatiAgawal. All Rights Reserved</p>
      </div>
    </div>
  </footer>;
}

export default Contact