import "@/pages"
import styles from '@/styles/Project.module.css';
import ComponentProject from '../components/ComponentProject';

function Project  () {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.center}>
                    <div  className={styles.text}>
                        <h1>Proyectos en los que trabaje</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
                        </p>

                    </div>
                    <div  className={styles.container}>

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
                            title="Gestion de perfiles RH" 
                            text="Este proyecto, fue desarrollado en el proceso
                            de estadia Enero-Abril del 2023, en el desarrollo del
                            proyecto conllevo conocer el Framework LitElement netamente a
                            componentes con JS. Este proyecto trataba sobre la administracion
                            de perfiles de la empresa Sit Digital Mexico."
                        ></ComponentProject>

                        <ComponentProject 
                            number="03" 
                            title="jlvi19c" 
                            text="La creacion de este sitio web, con la principal finalidad de dar a conocer 
                            mis conocimientos y habilidades que poco a poco se van mejorando. Ademas este sitio esta
                            construido totalmente en NextJS y CSS"
                        ></ComponentProject>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Project;
