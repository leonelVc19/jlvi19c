import '@/pages';
import styles from '@/styles/Custom404.module.css';
import Image from 'next/image';
import Button from './components/components/Button';


export default function Custom404() {
    return ( 
        <section className={styles.sections}>
            <Image
                src='/page_not_found.png'
                width={150}
                height={150}
                alt='Icono de página no encontrada'
                priority
                className={styles.sections_img}
            />
            <article className={styles.sections_text}>
                <h1>404 - Página no encontrada</h1>
                <Button title="Home" link="/"></Button>
            </article>
        </section>
    );
}