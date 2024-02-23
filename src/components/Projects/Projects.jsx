import React, {useState} from 'react'
import projects from "../../data/projects.json"
import ProjectCard from './ProjectCard'
import styles from "./Projects.module.css" 

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <section className={styles.container} id="projects">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Projects</h2>
      </div>
      <div className={styles.toggleGroup}>
        
          <div onClick={() => setToggle("all")} className={toggle == 'all' ? styles.toggleBtnActive : styles.toggleBtn} value='all'>ALL</div>
        
        <div className={styles.divider}></div>
        <div onClick={() => setToggle("web")} className={toggle == 'web' ? styles.toggleBtnActive : styles.toggleBtn} value='web'>WEB APP'S</div>
        <div className={styles.divider}></div>
        <div onClick={() => setToggle("android")} className={toggle == 'android' ? styles.toggleBtnActive : styles.toggleBtn} value='android'>ANDROID APP'S</div>
        <div className={styles.divider}></div>
        <div onClick={() => setToggle("ml")} className={toggle == 'ml' ? styles.toggleBtnActive : styles.toggleBtn} value='ml'>MACHINE LEARNING</div>
        
      </div>

      <div className={styles.cardContainer}>
      {toggle === 'all' && 
        projects.map((project) => <ProjectCard project={project}/>)}
        {projects
          .filter((item) => item.category === toggle)
          .map((project) => (
            <ProjectCard project={project}/>
          ))
        }
        
      </div>
    
  </section>
  );
};

export default Projects