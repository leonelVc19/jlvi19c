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
                    Proyectos en donde he trabajado y aplicado mis conocimientos sobre el desarrollo de software, para presentar webs funcionales y escalables, desarrolladas con herramientas modernas y eficientes para el desarrollo web. Participando en la parte Frontend como en la parte Backend, ya que son dos áreas en las que me gusta trabajar y desarrollar mucho.
                </p>
                <p className={styles.center_header_p}>
                    Para dudas, no dudes en contactarme. ¡Y si hay trabajo, yo estoy dentro!
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