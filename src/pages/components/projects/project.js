import "@/pages"
import styles from '@/styles/Project.module.css';
import { projects } from '../../../../public/data/myProjects';
import Link from "next/link";

function Project  () {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.center}>
                    <div  className={styles.text}>
                        <h1>Proyectos en los que he trabajado</h1>
                        <p>
                        En este apartado podrás ver los proyectos en los que he trabajado durante mi educación en la universidad, así como el trabajo realizado en la estadía técnica
                        </p>

                    </div>
                    <div  className={styles.container}>
                        {
                            projects.map((project, index) => 
                            <>
                                <div className={styles.card} key={index}>
                                    <div className={styles.box}>
                                        <div className={styles.content}>
                                            <h2>{project.id}</h2>
                                            <h3>{project.title}</h3>
                                            <p>{project.text}</p>
                                            <Link  href={{
                                                pathname: '/components/projects/my_projects',
                                                query: { 
                                                    id: project.id,
                                                    title: project.title,
                                                    text: project.text,
                                                    img: project.images
                                                },
                                            }}>
                                            Más Información
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </> 
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};


export default Project;
