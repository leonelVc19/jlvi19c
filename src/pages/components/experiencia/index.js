import "@/pages";
import styles from '@/styles/Experiencia.module.css';
import { experienciaPersonal } from '/public/data/experiencia';
import Spinner from '../components/Spinner';
const Experiencia = () => {
    const renderExperiencia = () => {
        if(!experienciaPersonal.length) {
            return <Spinner />
        };
        return (
            <article className={styles.timeline}>
                {experienciaPersonal.map(expe => (
                        <div key={expe.id} className={styles.timeline_item}>
                            <div className={styles.content}>
                                <h4 className={styles.title_ex}>{expe.id +"- " + expe.title} </h4>
                                <h3 className={styles.title_ex}> { "</> " + expe.company} </h3>
                                <p className={styles.descripcion}>{expe.duration}</p>
                                <p className={styles.descripcion}>----------------------------------------------------------------</p>
                                <p className={styles.descripcion}>{expe.description}</p>
                            </div>
                        </div>
                    ))}
            </article>
        );
    };

    return (
        <section id="experiencia" className={styles.container}>
            <h1 className={styles.title}>Experiencia laboral</h1>
            {renderExperiencia()}
        </section>
    );
};

export default Experiencia;