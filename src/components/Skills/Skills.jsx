import React from 'react'
import styles from "./Skills.module.css"
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils'

const Skills = () => {
  return <section className={styles.container} id="skills">
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Skills</h1>
    <div className={styles.skillsContainer}>
        {skills.map((items,iid) => {
            return (
            <div key={iid} className={styles.skill}>
                <div  className={styles.skillTitle}>{items.area}</div>
                <div  className={styles.skillList}>
                    {items.skills.map((skill,id) => {
                        return (
                        <div key={id} className={styles.skillItem}>
                        <img className={styles.skillImageContainer} src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            {skill.title}
                        </div>
                        );
                    })}
                </div>
            </div>
            );
        })}
    </div>
    </div>
    
  </section>
}

export default Skills