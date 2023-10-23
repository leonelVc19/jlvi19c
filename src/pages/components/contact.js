import styles from '@/styles/Contact.module.css';
import ContactComponent from './components/ContactComponent';
import "@/pages";
import { socialNetworks } from '../../../public/data/socialNetwork';
function Contact() {
    return (
        <section className={styles.contact}>
            <header>
                <h1 className={styles.titulo}>Información de contacto</h1>
            </header>
            <section className={styles.center}>
                <p className={styles.text_contact}>
                    Por medio de mis redes sociales, podrás contactarme o enviarme mensaje. <br></br> También puedes enviar algún mensaje a mí, número telefónico y/o correo electrónico
                </p>
                <article className={styles.lista}>
                    <ul className={styles.lista}>
                        {socialNetworks.map(social => 
                            <>
                                <ContactComponent 
                                    titulo={social.titulo} 
                                    imagen={social.imagen} 
                                    url={social.url}
                                />
                            </>
                        )}
                    </ul>
                </article>
            </section>
        </section>
    );
};

export default Contact;