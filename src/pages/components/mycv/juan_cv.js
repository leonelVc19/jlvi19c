import "@/pages";
import styles from '@/styles/Mycv.module.css';

function JuanCv(){
    const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
    const URL = `https://${domain}/Juan+Leonel+Vazquez+Iglesias+CV.pdf`;
    const url2 = 'https://cheery-narwhal-9fe34d.netlify.app/';
    return (
        <section className={styles.container}>
            <header className={styles.container_header}>
                <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
                <a target="_blank" className={styles.informacion_cv_link}href={URL} >Descargar CV</a>
            </header>
            <section className={styles.container_cv}>
                <iframe 
                    title="Juan Leonel Vazquez Iglesias"
                    className={styles.cvjuan} src={url2}
                ></iframe>
            </section>
        </section>
    );
};

export default JuanCv;