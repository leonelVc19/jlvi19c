import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import  * as React from 'react';

const MyProjects = () => {
    const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;

    const router = useRouter();
    const  { query: {id, title, text, img}} = router;
    const props = { id, title, text, img };
    const images = props.img;
    return (
        <div className={styles.main}>
            <div className={styles.main_title}>
                <h2>Mis proyectos</h2>
            </div>
            <div className={styles.content}>
                
                <div className={styles.main_content_text}>
                    <h5>{props.id}</h5>
                    <h1>{props.title}</h1>
                    <div className={styles.main_content_text_p}>
                        <p>{props.text}</p>
                    </div>
                    <hr></hr>
                    <p><strong>!Hola, soy Juan Iglesias!</strong> Espero te gusten mis proyectos!</p>
                </div>
                <div className={styles.main_content_img}>
                {
                        images ? images?.map((img, index) => <>
                            <div  className={styles.img} key={index}>
                                <Image
                                    src={`https://${domain}/${img}`}
                                    alt={props.title}
                                    width={400}
                                    height={150}
                                    className={styles.img_project}
                                    priority
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
