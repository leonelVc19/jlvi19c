import * as React from 'react';
import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const MyProjects = () => {
    const  { query: {id}} = useRouter();
    let id_project = id;
    const proyecto = project?.projectByID ?? {};

    
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>
                <h2>Mis proyectos</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.main_content_text}>
                    <h5>{id_project}</h5>
                    <a href=''>
                        <h1>{proyecto.title}</h1>
                    </a>
                    <Image
                        className={styles.content_image}
                        src={proyecto.image}
                        style={{objectFit: "cover", borderRadius: 10}}	
                        width={350}
                        height={250}
                        alt={proyecto.title}
                        loading="lazy"
                    />
                    <div className={styles.main_content_text_p}>
                        <p>{proyecto.description}</p>
                    </div>
                </div>
                <article>
                    {
                        proyecto.skills ? proyecto.skills?.map((skill, index) => <>
                            <p key={index}>{skill.name}</p>
                        </>)
                        : 'Sin Imágenes'
                    } 
                </article>
                <div className={styles.main_content_img}>
                    {
                        proyecto.images ? proyecto.images?.map((img, index) => <>
                            <div  className={styles.img} key={index}>
                                <Image
                                    src={img.url}
                                    alt={img.name}
                                    width={400}
                                    height={150}
                                    className={styles.img_project}
                                    layout="cover"loading="lazy"
                                />
                                <p>{index+1}</p>
                            </div>
                        </>)
                        : 'Sin Imágenes'
                    } 
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
