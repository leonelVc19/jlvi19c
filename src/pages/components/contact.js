import styles from '@/styles/Contact.module.css';
import ContactComponent from './components/ContactComponent';
import "@/pages"
import { socialNetworks } from '../../../public/data/socialNetwork';
function Contact() {
    return (
        <>
            <div className={styles.contact}>
                <div className={styles.center}>
                    <h1 className={styles.titulo}>Información de contacto</h1>
                    <p>
                        Por medio de mis redes sociales, podrás contactarme o enviarme mensaje. También puedes enviar algún mensaje a mí, número telefónico y/o correo electrónico
                    </p>
                    <nav className={styles.lista}>
                        <ul className={styles.lista}>
                            {socialNetworks.map(social => <>
                                <ContactComponent 
                                    titulo={social.titulo} 
                                    imagen={social.imagen} 
                                    url={social.url}
                                />
                                </>
                            )}
                        </ul>
                    </nav>

                </div>
                
                
            </div>
        </>
    );
};

export default Contact;