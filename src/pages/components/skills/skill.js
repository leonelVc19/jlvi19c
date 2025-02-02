import "@/pages";
import Image from 'next/image';
import { skills } from "/public/data/Skills";
import styles from "@/styles/Skill.module.css";
import SkillComponent from "../components/SkillComponent";

function Skill() {

    return(
        <section className={styles.containerSkills}>
            <section className={styles.center}>
                <header className={styles.containerSkills_title}>
                    <h1 className={styles.containerSkills_title_h1}>Skills</h1>
                </header>
                <section className={styles.content}>
                    <article className={styles.content_text}>
                        <h1 className={styles.content_text_h1}>Mis Skills</h1>
                        <p>En esta sección podrás conocer mis skills, para el desarrollo de apliciones web, en Frontend y Backend. A continuación, te mostraré las tecnologías que conozco y en las que he trabajado durante mi educación universitaria y en trabajos anteriores.</p>
                    </article>
                    <article className={styles.contentSkills}>
                        {skills.map((skill, index) =>  
                            <SkillComponent 
                                key={index} 
                                title={skill.title} 
                                image={skill.imagen} 
                                url={skill.url}
                            /> )}
                    </article>
                </section>
            </section>
        </section>
    );
};

export default Skill;