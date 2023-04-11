import styles from '@/styles/Contact.module.css';
import Image from 'next/image';
import ContactComponent from './components/ContactComponent';
function Contact() {
    return (
        <nav>
            <ul className={styles.lista}>
                <ContactComponent 
                    titulo="LinkedIn" 
                    imagen="/icons/linkedin.png" 
                    url="https://www.linkedin.com/in/juan-leonel-vazquez-iglesias-74b553230/"
                />
                <ContactComponent 
                    titulo="Git Hub" 
                    imagen="/icons/github.png" 
                    url="https://github.com/leonelVc19" 
                />
                <ContactComponent 
                    titulo="Instagram" 
                    imagen="/icons/instagram.png" 
                    url="https://www.instagram.com/jlvi19c" 
                />
                <ContactComponent 
                    titulo="Whatsapp" 
                    imagen="/icons/whatsapp.png" 
                    url="https://wa.me/522431219195?text=Hola+Juan+Leonel%21" 
                />
                <ContactComponent 
                    titulo="Email" 
                    imagen="/icons/gmail.png" 
                    url="mailto: vazquez.juan.1fm@gmail.com" 
                />

            </ul>
        </nav>
    );
};

export default Contact;