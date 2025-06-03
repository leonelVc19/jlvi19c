import * as React from 'react';
import "@/pages"
import styles from '@/styles/Project-Card.module.css';
import Image from "next/image"
import { skills as skillsImages } from "/public/data/Skills.js";


function Card ({ title, image, skills = [], decripcion, url }) {
    return (
        <article className={styles.card}>
            <Image
                src={image != '' ? image : '/offices.webp'}
                alt={title}
                width={300}
                height={300}
                className={styles.card_img}
            ></Image>
            <div className={styles.card_content}>
                <h2 className={styles.card_title}>{title}</h2>
                <p className={styles.card_description}>{decripcion}</p>
                <div className={styles.content_skills}>
                    {
                        skills.map((skill, index) => {
                            const skillData = skillsImages.find(item => item.title.toLowerCase() === skill.toLowerCase());
                            if (!skillData) return null; 
                            return ( 
                                <span key={index } className={styles.skill}>
                                    <Image 
                                        src={skillData.imagen === '' ? '/JLVI19C.svg' : skillData.imagen } 
                                        alt={skillData.title} 
                                        width={55} 
                                        height={55}
                                        className={styles.image}
                                    />
                                </span>
                            )
                        })
                    }
                </div>
                <a href={url} target='_black' className={ url != '' ? styles.card_link_url : styles.card_link}>
                    <p className={styles.card_link_p}>{ url != '' ? 'Ver proyecto' : 'JLVI'}</p>
                </a>
            </div>
        </article>
    );
};

export default Card;