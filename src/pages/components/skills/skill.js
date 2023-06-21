import "@/pages";
import { skills } from "/public/data/Skills";
import styles from "@/styles/Skill.module.css";

import SkillComponent from "../components/SkillComponent";


function Skill() {

    return(
        <section className={styles.containerSkills}>
            <div className={styles.center}>
                <div className={styles.containerSkills_title}>
                    <h1>Skills</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_text}>
                        <h1>Mis Skills</h1>
                        <p>En esta sección podrás conocer mis skills, para el desarrollo de apliciones web, en Frontend y Backend. A continuación, te mostraré las tecnologías que conozco y en las que he trabajado durante mi educación universitaria y en trabajos anteriores.</p>
                    </div>
                    <div className={styles.contentSkills}>
                        {skills.map((skill, index) =>  
                            <SkillComponent 
                                key={index} 
                                title={skill.title} 
                                image={skill.imagen} 
                                url={skill.url}
                            /> )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;