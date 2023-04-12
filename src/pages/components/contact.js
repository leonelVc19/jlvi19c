import styles from '@/styles/Contact.module.css';
import ContactComponent from './components/ContactComponent';
import NavBar from '../NavBar/nav';
import { socialNetworks } from '../../../public/data/socialNetwork';
function Contact() {
    return (
        <>
            <NavBar />
            <p>Hola</p>
            <div className={styles.contact}>
                
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