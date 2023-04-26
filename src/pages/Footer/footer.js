import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { socialNetworks } from '/public/data/socialNetwork';


function Footer() {
    return (
        <>
            <footer className={styles.footer} >
                <div className={styles.footer_container}>
                    <div className={styles.footer_content}>
                        <Link href="/" className={styles.footer_logo}>
                            <Image 
                                src="/juan.svg"
                                alt="JLVI19C"
                                className={styles.footer_logo_img}
                                width={50}
                                height={50}
                            />
                            <p>Juan Iglesias</p>
                        </Link>
                        <p className={styles.footer_description}>
                            Hola, esta es mi web, mira mis proyectos.
                        </p>
                        <div className={styles.footer_social}>
                            {socialNetworks.map(social => <>
                                        <a href={social.url} target="_blank" className={styles.footer_social_link}>
                                        <Image  src={social.imagen} width={25} height={25} alt={social.title}/>
                                    </a>
                            </>)}
                        </div>
                    </div>


                    <div className={styles.footer_content}>
                        <h2 className={styles.footer_title}>Contactame</h2>
                        <ul className={styles.footer_links}>
                            <li>
                                <Link href="/components/skills/skill" className={styles.footer_link}>Mi habilidades</Link>
                            </li>
                            <li>
                                <Link href="/components/mycv/juan_cv" className={styles.footer_link}>Mi CV</Link>
                            </li>
                            <li>
                                <Link href="/components/about/about" className={styles.footer_link}>Acerca de</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className={styles.footer_content}>
                        <h2 className={styles.footer_title}>Mis Proyectos</h2>
                        <ul className={styles.footer_links}>
                            <li>
                                <a href="https://calculatortestjlvi.netlify.app/" target="_blank" className={styles.footer_link}>Candy App</a>
                            </li>
                            <li>
                                <a href="https://el-juanchis.netlify.app/" target="_blank" className={styles.footer_link}>Gestion de perfiles RH</a>
                            </li>
                            <li>
                                <Link href="/" className={styles.footer_link}>jlvi19C</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_content}>
                        <h2 className={styles.footer_title}>Contacto directo</h2>
                        <ul className={styles.footer_links}>
                            <li>
                                <a href="https://wa.me/522431219195?text=Hola+Juan+Leonel%21" target='_blank' className={styles.footer_link}>+52-243-121-9195</a>
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