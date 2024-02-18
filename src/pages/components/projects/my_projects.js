import * as React from 'react';

import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
const url_api = process.env.NEXT_PUBLIC_URL_API;


const MyProjects = () => {
  
    const  { query: {id}} = useRouter();

    let id_project = id

console.log("Proecto id",id_project);
    // const url_p = url === "_" ? '#' : url;
    // const url_target = url === "_" ? '' : '_blank';
    const [project, setProject] = React.useState();
    console.log(project?.projectByID);
    const proyecto = project?.projectByID ?? {};
    
const getProjects = async () => {
            try {
                let id_p = id_project;
                const storedId = localStorage.getItem('id_project');
                if (!id_p && storedId) {
                    id_p = storedId;
                    console.log("ID desde el localStorage", id_p);
                }
    
                const response = await fetch(`${url_api}/project/${id_p}`);
                const projectByIdResponse = await response.json();
                setProject(projectByIdResponse);
            } catch (error) {
                console.log(error);
            }
        };
    React.useEffect(() => {
        let id_project = id;
        console.log("Proyecto ID", id_project);
        localStorage.setItem("id_project", String(id_project));
    
        getProjects();
    }, [id]); // Ejecutar useEffect cuando id cambie
    
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
                        width={280}
                        height={200}
                        alt={proyecto.title}
                        loading="lazy"
                    />
                    <div className={styles.main_content_text_p}>
                        <p>sjsjs</p>
                    </div>
                    <hr></hr>
                    <p><strong>!Hola, soy Juan Iglesias!</strong> Espero te gusten mis proyectos!</p>
                </div>
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
                <article>
                    {
                        proyecto.skills ? proyecto.skills?.map((skill, index) => <>
                      
                               
                                <p key={index}>{skill.name}</p>
                        </>)
                        : 'Sin Imágenes'
                    } 
                </article>
            </div>
        </div>
    );
}

export default MyProjects;
