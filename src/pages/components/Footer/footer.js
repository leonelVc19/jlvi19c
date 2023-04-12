import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Footer() {
    return (
        <>
            <footer className={styles.footer} >
                <div className={styles.footer_container}>
                    <div className={styles.footer_content}>
                        <Link href="/" className={styles.footer_logo}>
                            <Image 
                                src="/logojuan.png"
                                alt="JLVI19C"
                                className={styles.footer_logo_img}
                                width={70}
                                height={40}
                            />
                            <p>JLVI19C</p>
                        </Link>
                        <p className={styles.footer_description}>
                            Hola esta es mi web <br></br> checa mis proyectos.
                        </p>
                        <div className={styles.footer_social}>
                            <a href="https://www.facebook.com/" target="_blank" className={styles.footer_social_link}>
                                <p className={styles.bx}>ALGO</p>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className={styles.footer_social_link}>
                                <p className={styles.bx}>ALGO</p>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className={styles.footer_social_link}>
                                <p className={styles.bx}>ALGO</p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer_content}>
                        <h3 className={styles.footer_title}>Contactame</h3>
                        <ul className={styles.footer_links}>
                            <li>
                                <a href="#" className={styles.footer_link}>LinkedIn</a>
                            </li>
                            <li>
                                <a href="#" className={styles.footer_link}>Whatsapp</a>
                            </li>
                            <li>
                                <a href="#" className={styles.footer_link}>Email</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className={styles.footer_content}>
                        <h3 className={styles.footer_title}>Mis Proyectos</h3>
                        <ul className={styles.footer_links}>
                            <li>
                                <a href="#" className={styles.footer_link}>Candy App</a>
                            </li>
                            <li>
                                <a href="#" className={styles.footer_link}>Gestion de perfiles RH</a>
                            </li>
                            <li>
                                <a href="#" className={styles.footer_link}>jlvi19C</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_content}>
                        <h3 className={styles.footer_title}>Contacto directo</h3>
                        <ul className={styles.footer_links}>
                            <li>
                                <a href="#" className={styles.footer_link}>+52-243-121-9195</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className={styles.footer_copy}>&#169; JLVI19C</span>
            </footer>
        </>
        
    );
};

export default Footer;