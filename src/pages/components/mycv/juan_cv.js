import "@/pages";
import styles from '@/styles/Mycv.module.css';
function JuanCv(){
    const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;
    console.log(domain);
    return (
        <section className={styles.container}>
            <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
            <section className={styles.container_cv}>
                <article className={styles.informacion_cv_link}>
                    <a target="_blank" href={`https://${domain}/Juan+Leonel+Vazquez+Iglesias+CV.pdf`} >Descargar CV</a>
                </article>
                <br></br>
                <iframe className={styles.cvjuan} src={`https://${domain}/Juan+Leonel+Vazquez+Iglesias+CV.pdf`} allow="autoplay"></iframe>
            </section>
        </section>
    );
};

export default JuanCv;
