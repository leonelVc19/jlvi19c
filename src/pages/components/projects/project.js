import * as React from 'react';
import "@/pages"
import styles from '@/styles/Project.module.css';
import { projects } from '../../../../public/data/myProjects';
import Link from "next/link";
import Image from "next/image"
const url_api = process.env.NEXT_PUBLIC_URL_API;

function Project  () {
    
    const [projectsApi, setProjectsApi] = React.useState([]);
    const get_projects = async () => {
        try {
            const response = await fetch(`${url_api}/projects`);
           
            const  response_projects = await response.json();
            
            setProjectsApi(response_projects);
        } catch (error) {
            // console.error(error);
            setProjectsApi([])
        }
    }
    React.useEffect( () => {
        get_projects();
    }, []);

    return (
        <section className={styles.section}>
            <header className={styles.center_header}>
                <h1 className={styles.center_header_h1}>Proyectos</h1>
                <p className={styles.center_header_p}>
                    En este apartado podrás ver los proyectos en los que he trabajado durante mi educación en la universidad, así como el trabajo realizado en la estadía técnica
                </p>
            </header>
            <section  className={styles.container}>
                { 
                projectsApi.length === 0 ? 
                    <p>SIN PROYECTOS DE MOMENTO</p> :
                    projectsApi.map((project, index) => {
                        const url_p = project.url === "" ? null : project.url;
                        const url_target = project.url === "" ? null : '_blank';
                        return (
                            <article className={styles.card} key={index}>
                                <div className={styles.content}>
                                    <a href={url_p} target={url_target}>
                                        <Image
                                            className={styles.content_image}
                                            src={project.image}
                                            style={{objectFit: "cover"}}	
                                            width={280}
                                            height={200}
                                            alt={project.title}
                                            loading="lazy"
                                        />
                                    </a>
                                    <footer className={styles.content_footer}>
                                        <pre>{project.id}</pre>
                                        <h3>{project.title}</h3>
                                        <Link className={styles.content_footer_a} href={{
                                            pathname: '/components/projects/my_projects',
                                            query: { 
                                                id: project.id,
                                            }
                                        }}>
                                            Más Información
                                        </Link>
                                    </footer>
                                </div>
                            </article>
                        );
                    })
                }
            </section>
        </section>
    );
};

export default Project;