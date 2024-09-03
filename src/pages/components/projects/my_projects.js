import * as React from 'react';

import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const url_api = process.env.NEXT_PUBLIC_URL_API;
const MyProjects = () => {
    const  { query: {id}} = useRouter();
    let id_project = id;
    // const url_p = url === "_" ? '#' : url;
    // const url_target = url === "_" ? '' : '_blank';
    const [project, setProject] = React.useState();
    const proyecto = project?.projectByID ?? {};
    
    const getProjects = async () => {
            try {
                let id_p = id_project;
                const storedId = localStorage.getItem('id_project_p');
                if (!id_p && storedId) {
                    id_p = storedId;
                    console.log("ID desde el localStorage", id_p);
                }
                const response = await fetch(`${url_api}/project/${id_p}`);
                const findProjectById = await response.json();
                console.log(findProjectById);
                setProject(findProjectById);
            } catch (error) {
                console.log(error);
            }
        };
    React.useEffect(() => {
        let id_project = id;
        localStorage.setItem("id_project_p", String(id_project));
        getProjects();
    }, [id]);
    
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
