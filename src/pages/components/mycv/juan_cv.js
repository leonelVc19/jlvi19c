import "@/pages";
import styles from '@/styles/Mycv.module.css';
function JuanCv(){
    return (
        <section className={styles.container}>
            <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
            <div className={styles.container_cv}>
                <div className={styles.informacion_cv_link}>
                    <a target="_blank" href="https://estars-test-j.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf" >Descargar CV</a>
                </div>
                <br></br>
                <iframe className={styles.cvjuan} src="https://estars-test-j.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf" allow="autoplay"></iframe>
            </div>
        </section>
    );
};

export default JuanCv;
