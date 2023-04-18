import '@/pages';
import styles from '@/styles/About.module.css';

function About(){
    return (
        <div className={styles.main}>
            <div className={styles.center}>

                <h1>Esta web se creó con el fin...</h1>
                <p>Información acerca de esta web</p>
            </div>
        </div>
    );
}

export default About;
