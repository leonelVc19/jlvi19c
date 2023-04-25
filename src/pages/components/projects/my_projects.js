import '@/pages';
import styles from '@/styles/MyProjects.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const MyProjects = () => {
    
    const router = useRouter();
    const  { query: {id, title, text, img}} = router;
    const props = { id, title, text, img };
    //Contante de imagenes
    const images = props.img
    console.log(images);

    return (
        <div className={styles.main}>
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>
            <p>{props.text}</p>
            {
                images ? images?.map(img => <> 
                    <div  className={styles.img}>
                        <Image
                            src={img}
                            alt={props.title}
                            width={70}
                            height={80}
                        />
                    </div>
                </>)
                : 'Sin Imágenes'
            }
        </div>
    );
}

export default MyProjects;
