
import experiences from "../../data/work-history.json";

import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
  } from "@mui/lab";


const Experience = () => {
  return <section className={styles.container} id="experience">
    <div className={styles.wrapper}>
        <h2  className={styles.title}>Experience</h2>
        <div className={styles.timelineSection}>
            <Timeline align="left" className={styles.timeline}>
                {experiences.map((experience,id) => (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="secondary"/>
                            {id!==experience.length-1 && <TimelineConnector/>}
                             
                        </TimelineSeparator>
                        <TimelineContent sx={{py: "12px", px:2}}>
                            <ExperienceCard experience={experience}/>
                        </TimelineContent >
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    </div>
  </section>
}

export default Experience