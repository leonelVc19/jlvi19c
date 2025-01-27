import * as React from 'react';
import "@/pages"
import styles from '@/styles/Project.module.css';
import Link from "next/link";
import Image from "next/image"
const url_api = process.env.NEXT_PUBLIC_URL_API;

function Project  () {
    return (
        <section className={styles.section}>
            <header className={styles.center_header}>
                <h1 className={styles.center_header_h1}>Proyectos</h1>
                <p className={styles.center_header_p}>
                    En este apartado podrás ver los proyectos en los que he trabajado durante mi educación en la universidad, así como el trabajo realizado en la estadía técnica
                </p>
            </header>
            <section  className={styles.container}>
                <article className={styles.card}>
                    <Image
                        src='https://jlvi-iglesias.s3.us-west-1.amazonaws.com/inicio_candy.jpeg'
                        alt='Candy App'
                        width={300}
                        height={300}
                        className={styles.card_img}
                    ></Image>
                    <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Candy App</h2>
                        <p className={styles.card_description}>Aplicacion movil para un comercion, desarrollador para la gestion de mercancia en la sucursal.</p>
                        <div className={styles.content_skills}>
                            <span className={styles.skill}>ReactNative</span>
                            <span className={styles.skill}>JS</span>
                            <span className={styles.skill}>Expo</span>
                            <span className={styles.skill}>Firebase</span>
                            <span className={styles.skill}>Scrum</span>
                            <span className={styles.skill}>Lider de proyecto</span>
                        </div>
                        <br></br>
                        <a href="#" className={styles.card_link}>App movil</a>
                    </div>
                </article>
                {/* { 
                projectsApi.length === 0 ? 
                    <p>SIN PROYECTOS DE MOMENTO</p> :
                    projectsApi.map((project, index) => {
                        return (
                        );
                    })
                } */}
            </section>
        </section>
    );
};

export default Project;