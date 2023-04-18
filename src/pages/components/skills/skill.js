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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
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