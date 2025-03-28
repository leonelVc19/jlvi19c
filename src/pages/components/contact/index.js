import React, { useState } from "react";
import "@/pages";
import styles from "@/styles/Contact.module.css";

const ContactaMe = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');
        try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setStatus('¡Mensaje enviado con éxito!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Error al enviar el mensaje.');
            setFormData({ name: '', email: '', message: '' });
        }
        } catch (error) {
        setStatus('Error al enviar el mensaje.');
        }
    };
    return (
        
        <section id="contacta_me" className={styles.container_main}>
            <h1>Contacto</h1>
            <article className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <input
                            className={styles.input_class}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Nombre..."
                        />
                    </div>

                    <div className={styles.field}>
                        <input
                            className={styles.input_class}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div className={styles.field}>
                        <textarea
                            className={styles.textarea_class}
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Escribe tu mensaje aquí"
                        />
                    </div>

                    <button type="submit" className={styles.button}>
                    Enviar
                    </button>
                </form>
                {status && <p className={styles.status}>{status}</p>}
            </article>
        </section>
    );
}

export default ContactaMe;
