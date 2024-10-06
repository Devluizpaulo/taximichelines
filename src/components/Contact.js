import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Para controle do estado de envio

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simula um envio de formulário
        console.log('Formulário enviado:', formData);
        alert('Mensagem enviada com sucesso!');

        // Limpar formulário após envio
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    return (
        <div style={styles.container}>
            <h2>Contato</h2>
            <p>Endereço: R. Contos Gauchescos, 165 - Vila Santa Catarina, São Paulo - SP, 04369-000</p>
            <p>Email: contato@taximichelines.com.br</p>
            <p>Telefone: (11) 5555-1234</p>

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        style={styles.input} 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={styles.input} 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="phone">Telefone:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        style={styles.input} 
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        style={styles.textarea} 
                    />
                </div>

                <button type="submit" style={styles.button} disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
        transition: 'border-color 0.3s',
    },
    textarea: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
        height: '100px',
        resize: 'none',
        transition: 'border-color 0.3s',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s, opacity 0.3s',
    },
};

export default Contact;
