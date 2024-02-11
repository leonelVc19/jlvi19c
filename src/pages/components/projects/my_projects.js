import * as React from 'react';

import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
const url_api = process.env.NEXT_PUBLIC_URL_API;


const MyProjects = () => {
    const  { query: {id}} = useRouter();
    // const url_p = url === "_" ? '#' : url;
    // const url_target = url === "_" ? '' : '_blank';
     
    const [projectId, setProjectId] = React.useState([]);
    console.log(projectId);
    const get_projects = async () => {
        const response = await fetch(`${url_api}/project/${id}`);
        const  projects = await response.json();
        setProjectId(projects);
    }
    React.useEffect( () => {
        get_projects();
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>
                <h2>Mis proyectos</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.main_content_text}>
                    <h5>{id}</h5>
                    <a href=''>
                        <h1>titulo</h1>
                    </a>
                    <div className={styles.main_content_text_p}>
                        <p>sjsjs</p>
                    </div>
                    <hr></hr>
                    <p><strong>!Hola, soy Juan Iglesias!</strong> Espero te gusten mis proyectos!</p>
                </div>
                <div className={styles.main_content_img}>
                {/* {
                    images ? images?.map((img, index) => <>
                        <div  className={styles.img} key={index}>
                            <Image
                                src={`https://${domain}/${img}`}
                                alt={title}
                                width={400}
                                height={150}
                                className={styles.img_project}
                                priority
                            />
                            <p>{index+1}</p>
                        </div>
                    </>)
                    : 'Sin Imágenes'
                } */}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
