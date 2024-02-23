
import history from "../../data/history.json";
import styles from "./Education.module.css";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
  return <section className={styles.container} id="qualification">
    <h2  className={styles.title}>Education</h2>
    <div className={styles.content}>
        <ul className={styles.history}>
            {
                history.map((historyItem,id) => {
                    return <li key={id} className={styles.historyItem}>
                        <LuGraduationCap size={50}/>
                        <div className={styles.historyItemDetails}>
                            <h2>{historyItem.course}</h2>
                            <h3>{historyItem.organisation}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <p>{`CGPA - ${historyItem.cgpa}`}</p>
                            <ul>
                                {historyItem.achievements.map((experience,id) => {
                                    return <li key={id}>{experience}</li>
                                })}
                            </ul>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  </section>
}

export default Education