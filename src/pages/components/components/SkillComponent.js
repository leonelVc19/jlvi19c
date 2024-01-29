import styles from "@/styles/Skill.module.css";
import Image from "next/image";

function SkillComponent({title, image, url}) {
    return (
        <section className={styles.container}>
            <a href={url} target="_blank">
                <article className={styles.contentS}>
                    <Image 
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                        className={styles.imagen}
                    />
                    <h6>{title}</h6>
                </article>
            </a>
        </section>
    )
};

export default SkillComponent;