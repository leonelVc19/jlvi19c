import "@/pages";
import { skills } from "/public/data/Skills";
import Image from "next/image";
import styles from "@/styles/Skill.module.css";

import SkillComponent from "../components/SkillComponent";


function Skill() {

    return(
            <section className={styles.containerSkils}>
                <div className={styles.containerSkils_title}>
                    <h1>Mis Habilidades</h1>
                    <p>En este apartado podran ver las habilidades con las que cuento</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.content_text}>
                        <h1>Habilidades</h1>
                        <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
                    </div>
                    <div className={styles.contentSkills}>
                        {skills.map(skill =>  <>
                            <SkillComponent title={skill.title} image={skill.imagen} url={skill.url}/>
                        </> )}
                    </div>
                </div>
            </section>
    );
};

export default Skill;