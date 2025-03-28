import { useState } from "react";

import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from "../components/components/Button";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return(
        <header className={styles.header}>
            <Link className={styles.header_logo} href="/">
                <Image
                    className={styles.logo}
                    src='/JLVI19C.svg'
                    alt="Logo JLVI19C"
                    width={50}
                    height={50}
                    layout="cover"
                    loading="lazy"
                />
            </Link>
            <div className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav   className={`${isMenuOpen ? styles.open_content : styles.nav}`}>
                    <Link href="#sobre_mi" className={styles.nav_link} >Sobre Mi</Link>
                    <Link href="#skills" className={styles.nav_link} title="Skills ">Skills</Link>
                    <Link href="#experiencia" className={styles.nav_link} >Experiencia</Link>
                    <Link href="#proyectos" className={styles.nav_link}>Portaforlio</Link>
                    {/* <Link href="#contacta_me" className={styles.nav_link} title="Skills ">Contacto</Link> */}
               {/* <ButtonLink
                    title="Descargar CV"
                    link="https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf"
                    tart="_blank"
                >
                </ButtonLink> */}


            </nav>
        </header>
    );
};

export default NavBar;