import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const MyProjects = () => {
    
    const router = useRouter();
    const  { query: {id, title, text, img}} = router;
    const props = { id, title, text, img };
    //guardando de imagenes
    const images = props.img;
    return (
        <div className={styles.main}>

            <div className={styles.content}>
                
                <div className={styles.main_content_text}>
                    <h5>{props.id}</h5>
                    <h1>{props.title}</h1>
                    <div className={styles.main_content_text_p}>
                        <p>{props.text}</p>
                    </div>
                    <hr></hr>
                    <p><strong>! Hola, soy Juan Iglesias! <br></br></strong> Espero te gusten!</p>
                </div>
                <div className={styles.main_content_img}>
                {
                        images ? images?.map(img => <>
                            <div  className={styles.img}>
                                <Image
                                    src={img}
                                    alt={props.title}
                                    width={400}
                                    height={150}
                                    className={styles.img_project}
                                />
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
