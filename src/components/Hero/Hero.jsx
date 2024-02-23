
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';
import resume from "../../../assets/hero/SwatiResume.pdf";
import HeroSocials from './HeroSocials';
import  Typewriter  from 'typewriter-effect';
export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Swati</h1>
        
        <h2 className={styles.description}>I am a <span>
          <Typewriter
            options={{
              strings: [' Programmer', ' Software Engineer', ' Content Creator'],
              autoStart: true,
              loop: true,
            }}
          />
        </span> 
        </h2>
        <p className={styles.description}>Reach out if you would like to learn more!</p>
        <a className={styles.Btn} href={resume}>Resume</a>
        <HeroSocials />
    </div>
    
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt='Hero Image'/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    
  </section>
};

