import styles from "@/styles/Skill.module.css";
import Image from "next/image";

function SkillComponent({title, image, url = ''}) {
    return (
        <section className={styles.container}>
            <a href={url} target="_blank">
                <article className={styles.contentS}>
                    <Image 
                        src={image != '' ? image : '/JLVI19C.svg'}
                        alt={title}
                        width={35}
                        height={35}
                        className={styles.imagen}
                        layout="cover"loading="lazy"
                    />
                    <h6>{title}</h6>
                </article>
            </a>
        </section>
    )
};

export default SkillComponent;