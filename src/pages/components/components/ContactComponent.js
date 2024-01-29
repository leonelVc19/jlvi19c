import styles from '@/styles/Contact.module.css';
import Image from 'next/image';

function ContactComponent({imagen, url, titulo}) {
    return (
        <a href={url} target="_blank" className={styles.icon}>
            <Image 
                src={imagen}
                alt={titulo}
                width={30}
                height={30}
                priority
            />
        </a>
    ); 
};

export default ContactComponent;