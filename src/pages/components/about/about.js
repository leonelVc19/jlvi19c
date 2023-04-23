import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';
import { Fragment, useState } from 'react';

function About() {
    const [show, setShow] = useState(false);

    const toggle = () => {
        console.log('Hola')
    }
    return (
        <div className={styles.main}>
            <div className={styles.center}>

                <h1>Esta web se creó con el fin...</h1>
                <p>Información acerca de esta web</p>
                <section className={styles.imagenes}>
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    /> 
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1"
                    /> 
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1"
                    />
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                    <Image className={styles.imagen} src="/komi.jpg"
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                </section>
            </div>
        </div>
    );
}

export default About;
