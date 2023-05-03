import "@/pages";
import styles from '@/styles/Mycv.module.css';
function JuanCv(){
    return (
        <section className={styles.container}>
            <h1>Mi CV, Juan Leonel Vazquez Iglesias</h1>
            <div className={styles.container_cv}>
                <div className={styles.informacion_cv_link}>
                    <a   href="/CV-Juan-Leonel-Vazquez-Iglesias.pdf" download>Descargar CV</a>
                </div>
                
                <iframe className={styles.cvjuan} src="https://drive.google.com/file/d/1kOSVEWTy-gMKrj6L0k6llKhXZBih-9cJ/preview"allow="autoplay"></iframe>
            </div>
        </section>
    );
};

export default JuanCv;
