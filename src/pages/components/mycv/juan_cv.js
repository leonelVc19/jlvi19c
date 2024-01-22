import "@/pages";
import styles from '@/styles/Mycv.module.css';
function JuanCv(){
    const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
    const URL = `https://${domain}/Juan+Leonel+Vazquez+Iglesias+CV.pdf`;
    return (
        <section className={styles.container}>
            <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
            <section className={styles.container_cv}>
                <article className={styles.informacion_cv_link}>
                    <a target="_blank" href={URL} >Descargar CV</a>
                </article>
                <br></br>
                <iframe className={styles.cvjuan} src={URL} allow="autoplay"></iframe>
            </section>
        </section>
    );
};

export default JuanCv;
