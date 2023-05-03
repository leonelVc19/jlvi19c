import "@/pages";
import { skills } from "/public/data/Skills";
import Image from "next/image";
import styles from "@/styles/Skill.module.css";

import SkillComponent from "../components/SkillComponent";


function Skill() {

    return(
            <section className={styles.containerSkils}>
                <div className={styles.center}>
                    <div className={styles.containerSkils_title}>
                        <h1>Mis Habilidades</h1>
                        <p>En este apartado podras ver las habilidades con las que cuento</p>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.content_text}>
                            <h1>Habilidades</h1>
                            <p>Mostrando las tecnologías, que conozco y que aún sigo trabajado, durante mi educación en la universidad, así mismo como trabajos en otros lugares. Para el desarrollo Frontend y Backend. También para el desarrollo móvil .</p>
                        </div>
                        <div className={styles.contentSkills}>
                            {skills.map(skill =>  <>
                                <SkillComponent title={skill.title} image={skill.imagen} url={skill.url}/>
                            </> )}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Skill;