
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import styles from "./HeroSocials.module.css";

const HeroSocials = () => {
  return (
    <div className={styles.header__socials}>
        <a href='mailto:swati24813@gmail.com'><GoMail size={30}/></a>
        <a href='https://github.com/swati57'><FaGithub size={30}/></a>
        <a href='https://www.linkedin.com/in/swati-agarwal-717b921b3/'><FaLinkedin size={30}/></a>
    </div>
  );
}

export default HeroSocials