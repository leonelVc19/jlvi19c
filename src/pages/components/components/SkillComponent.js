import styles from "@/styles/Skill.module.css";
import Image from "next/image";

function SkillComponent({title, image, url}) {
    return (
        <div className={styles.container}>
            <a href={url} target="_blank">
                <div className={styles.contentS}>
                    <Image 
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                        className={styles.imagen}
                    />
                    <h5>{title}</h5>
                </div>
            </a>
        </div>
    )
};

export default SkillComponent;