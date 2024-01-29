import "@/pages";
import styles from '@/styles/Mycv.module.css';
function JuanCv(){
    const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
    const URL = `https://${domain}/Juan+Leonel+Vazquez+Iglesias+CV.pdf`;
    return (
        <section className={styles.container}>
            <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
            <section className={styles.container_cv}>
                <a target="_blank" className={styles.informacion_cv_link}href={URL} >Descargar CV</a>
                <iframe className={styles.cvjuan} src={URL}></iframe>
            </section>
        </section>
    );
};

export default JuanCv;
