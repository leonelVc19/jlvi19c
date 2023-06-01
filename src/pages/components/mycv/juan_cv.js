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
                <br></br>
               
  <iframe loading="lazy"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRqvvIRTo&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen" width="240" height="880">
  </iframe>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRqvvIRTo&#x2F;view?utm_content=DAFRqvvIRTo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Juan Leonel Vazquez Iglesias CV</a> de Juan Leonel Vazquez Iglesias
            </div>
        </section>
    );
};

export default JuanCv;
