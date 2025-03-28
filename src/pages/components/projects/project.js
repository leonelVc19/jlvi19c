import * as React from 'react';
import PropTypes from 'prop-types';
import "@/pages"
import styles from '@/styles/Project.module.css';
import { projects } from "/public/data/myProjects";
import Card from '../components/Card';
import Spinner from '../components/Spinner';
const Project = () => {
    const renderProjects = () => {
        if (!projects.length) {
            return <Spinner />;
        }

        return (
            <article className={styles.container_card}>
                {projects.map(project => (
                    <Card 
                        key={project.id}
                        title={project.title}
                        image={project.image_principal}
                        decripcion={project.decripcion}
                        url={project.url_project}
                        skills={project.skills}
                    />
                ))}
            </article>
        );
    };

    return (
        <section id="proyectos" className={styles.section}>
            <header className={styles.center_header}>
                <h1 className={styles.center_header_h1}>Proyectos</h1>
                <p className={styles.center_header_p}>
                    Proyectos en donde he trabajado y aplicado mis conocimientos sobre el desarrollo de software, para presentar webs funcionales y escalables, desarrolladas con herramientas modernas y eficientes para el desarrollo web. Participando en la parte Frontend como en la parte Backend, ya que son dos áreas en las que me gusta trabajar y desarrollar mucho.
                </p>
                <p className={styles.center_header_p}>
                    Para dudas, no dudes en contactarme. ¡Y si hay trabajo, yo estoy dentro!
                </p>
            </header>
            <section className={styles.container}>
                {renderProjects()}
            </section>
        </section>
    );
};

Project.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image_principal: PropTypes.string.isRequired,
        decripcion: PropTypes.string.isRequired,
        url_project: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired
    }))
};

export default Project;