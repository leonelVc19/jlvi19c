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
                        <h1>Proyectos en los que trabaje</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
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
