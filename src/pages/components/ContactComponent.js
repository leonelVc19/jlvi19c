import "@/pages";
import styles from '@/styles/Contact.module.css';
import Image from 'next/image';
import { socialNetworks } from '../../../public/data/socialNetwork';

function Contact() {
    return (
        <article className={styles.content}>
            { socialNetworks.map((social, index) => 
                <a key={index + 1} href={social.url} target="_blank" className={styles.icon}>
                    <Image 
                        src={social.imagen}
                        alt={social.titulo}
                        width={25}
                        height={25}
                        layout="cover"loading="lazy"
                    />
                </a>
            )}
        </article>
    );
};

export default Contact;