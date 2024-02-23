import React from 'react'
import styles from './ExperienceCard.module.css';
import { getImageUrl } from '../../utils'

const ExperienceCard = ({experience}) => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
        <img  className={styles.logo} src={getImageUrl(experience.imageSrc)}/>
            <div className={styles.body}>
                <div className={styles.role}>
                    {experience.role}
                </div>
                <div className={styles.company}>
                    {experience.company}
                </div>
                <div className={styles.date}>
                    {`${experience.startDate} - ${experience.endDate}`}
                </div>
            </div>
        </div>
        <ul className={styles.desc}>
            {experience.experiences.map((ex,id) => {
                return <li key={id}>{ex}</li>
            })}
        </ul>
        <ul className={styles.skills}>
            <h4>Skills:</h4> 
            {experience.skills.map((skill,id) => {
                return <li key={id}>{skill}</li>
            })}
        </ul>

    </div>
  )
}

export default ExperienceCard