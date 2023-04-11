import styles from '@/styles/Contact.module.css';
import Image from 'next/image';

function ContactComponent({imagen, url, titulo}) {
    return (
        <>
            <li>
                <span className={styles.icon}>
                    <Image 
                        src={imagen}
                        alt={titulo}
                        className={styles.imagen}
                        width={35}
                        height={35}
                        priority
                    />
                </span>
                <span className={styles.title}>
                    <a href={url} target="_blank" >{titulo}</a>
                </span>
            </li>
        </>
    ); 
};

export default ContactComponent;