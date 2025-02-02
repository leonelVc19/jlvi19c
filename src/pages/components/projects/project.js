import * as React from 'react';
import "@/pages"
import styles from '@/styles/Project.module.css';
import { projects } from "/public/data/myProjects";
import Card from '../components/Card';

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
                { projects.length === 0 ? 
                    <p>SIN PROYECTOS DE MOMENTO</p> : 
                    <article className={styles.container_card}> {
                        projects.map((project, index) => {
                            return (
                                <Card 
                                    key={index}
                                    title={project.title}
                                    image={project.image_principal}
                                    decripcion={project.decripcion}
                                    url={project.url_project}
                                    skills={project.skills}
                                />
                            );
                        }) }
                    </article>
                }
            </section>
        </section>
    );
};

export default Project;