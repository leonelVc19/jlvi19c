import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/ContactComponent';
import ContactaMe from '../components/contact/index';
function Footer() {
    return (
        <footer className={styles.footer} >
            <section className={styles.footer_container}>
                <article className={styles.footer_container_logo}>
                <Link href="/" className={styles.footer_logo}>
                        <Image 
                            src="/JLVI19C.svg"
                            alt="JLVI19C"
                            className={styles.footer_logo_img}
                            width={100}
                            height={140}
                            layout="cover"
                            loading="lazy"
                        />
                    </Link>
                    <h1 className={styles.title}>Contacto</h1>
                    <Link className={styles.footer_link} href="https://wa.me/522431219195?text=Hola+Juan+Leonel+:3l%21" target='_blank' >+52 243 121 9195</Link>
                    { <Contact /> }
                </article>
                {/* <article>
                    <ContactaMe />
                </article> */}
            </section>
            <section>    
                <span className={styles.footer_copy}>Portafolio 
                    <strong className={styles.footer_copy_name}> Juan Leonel Vazquez Iglesias</strong> 
                </span>
                <br/>
            </section>
        </footer>
    );
};
export default Footer;