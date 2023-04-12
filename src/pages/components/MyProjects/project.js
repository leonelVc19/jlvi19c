import * as React from 'react';
import styles from '@/styles/Project.module.css';
import NavBar from "@/pages/NavBar/nav";
import ComponentProject from '../components/ComponentProject';

function Project  () {
    return (
        <>
        <NavBar></NavBar>
        <br></br>
        <section className={styles.container}>

            <ComponentProject 
                number="01" 
                title="Candy App" 
                text="Aplicacion movil creada para resolver un problema
                administrativo de mercancia, en el municipio de izucar 
                de matamoros. Principal desarrollo con ReactNative, Expo, 
                JS, CSS, Animations, Firebase."
            ></ComponentProject>

            <ComponentProject 
                number="02" 
                title="Card One" 
                text="Este proyecto, fue desarrollado en el proceso
                de estadia Enero-Abril del 2023, en el desarrollo del
                proyecto conllevo conocer el Framework LitElement netamente a
                componentes con JS. Este proyecto trataba sobre la administracion
                de perfiles de la empresa Sit Digital Mexico."
            ></ComponentProject>
        </section>
        </>
    );
};


export default Project;
