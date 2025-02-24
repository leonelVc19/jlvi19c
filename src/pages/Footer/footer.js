import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { socialNetworks } from '/public/data/socialNetwork';

function Footer() {
    return (
        <footekr className={styles.footer} >
            <section className={styles.footer_container}>
                <section>
                    <article className={styles.footer_container_logo}>
                        <Link href="/" className={styles.footer_logo}>
                            <Image 
                                src="/JLVI19C.svg"
                                alt="JLVI19C"
                                className={styles.footer_logo_img}
                                width={100}
                                height={100}
                                layout="cover"
                                loading="lazy"
                            />
                        </Link>
                        <p className={styles.footer_description}>
                            ¡Hola! :3
                        </p>
                    </article>
                    <article className={styles.footer_social}>
                        {socialNetworks.map(social => <>
                            <a href={social.url} 
                                target="_blank" 
                                className={styles.footer_social_link}
                            >
                                <Image  
                                    src={social.imagen} width={25} height={25} 
                                    alt={social.title}
                                    layout="cover"loading="lazy"
                                    className={styles.footer_social_icon}
                                />
                            </a>
                        </>)}
                    </article>
                </section>
                <article>
                    <h2>Contacto directo</h2>
                    <a className={styles.footer_link} href="https://wa.me/522431219195?text=Hola+Juan+Leonel+:3l%21" target='_blank' >+52 243 103 7240</a>
                </article>
            </section>
            <section>    
                <span className={styles.footer_copy}>Portafolio &#169; 
                    <strong className={styles.footer_copy_name}>Juan Leonel Vazquez Iglesias</strong> 
                </span>
                <br/>
            </section>
        </footekr>
    );
};
export default Footer;