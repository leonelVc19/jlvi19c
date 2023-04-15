import styles from '@/styles/Contact.module.css';
import ContactComponent from './components/ContactComponent';
import "@/pages"
import { socialNetworks } from '../../../public/data/socialNetwork';
function Contact() {
    return (
        <>
            <div className={styles.contact}>
                <h1 className={styles.titulo}>Informacion de contacto</h1>
                
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
        </>
    );
};

export default Contact;