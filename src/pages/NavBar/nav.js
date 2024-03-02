import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ButtonLink from "../components/components/Button";
function NavBar() {
    return(
        <>
            <header className={styles.header}>
                <Link className={styles.header_logo} href="/">
                    <Image
                    className={styles.logo}
                    src='/JLVI19C.svg'
                    alt="Logo JLVI19C"
                    width={109}
                    height={25}
                    layout="cover"
                    loading="lazy"
                    />
                </Link>
                <nav className={styles.nav}>
                    <ButtonLink
                        title="Descargar CV"
                        link="https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf"
                        tart="_blank"
                    >
                    </ButtonLink>
                    <article className={styles.nav_link}>
                        <Link href="/" >Inicio</Link>
                    </article>
                    {/* <Link href="/" className={styles.nav_link}>Mis proyectos</Link>
                    <Link href="/components/about/about" className={styles.nav_link}>Acerca de</Link> */}
                </nav>
            </header>
        </>
    );
};

export default NavBar;