import * as React from 'react';
import "@/pages"
import styles from '@/styles/Project-Card.module.css';
import Image from "next/image"

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
                    { skills.length === 0 
                        ? 
                            <p style={{color:'#000'}}>No Skills</p> 
                        : 
                        skills.map((skill, index) => {
                            return ( 
                                <> 
                                    <span key={index} className={styles.skill}>{skill}</span> 
                                </>
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