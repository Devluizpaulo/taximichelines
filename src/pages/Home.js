import React, { useState } from 'react';
import '../styles/Home.css';
import Carros from '../components/Carros'; // Importando o componente Carros
import { FaCar, FaTools, FaClock, FaHandshake } from 'react-icons/fa';
import heroImage from '../assets/images/hero-image.jpg';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home">
      {/* Seção de Destaque (Hero Section) */}
      <div className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bem-vindo à Taxi Micheline's</h1>
            <p>Aqui você pode fazer sua Renda, seja independente!</p>
            <button className="cta-button" onClick={openModal}>Alugue Agora</button>
          </div>
        </div>
      </div>

      {/* Seção de Serviços */}
      <section className="home-services">
        <h2>Por que escolher Taxi Micheline's?</h2>
        <div className="services-list">
          {[  
            { icon: <FaCar />, title: 'Frota Moderna', description: 'Veículos novos e revisados para garantir sua segurança e conforto.' },
            { icon: <FaClock />, title: 'Atendimento 24 horas', description: 'Assistência total para o locatário a qualquer momento, dia ou noite.' },
            { icon: <FaTools />, title: 'Oficina Própria', description: 'Serviço de manutenção rápido e de qualidade com a nossa própria oficina.' },
            { icon: <FaHandshake />, title: 'Flexibilidade', description: 'Planos personalizados para atender suas necessidades, seja para trabalho ou lazer.' },
          ].map((service, index) => (
            <div className="service-item" key={index}>
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Componente de Carros */}
      <Carros />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Cadastro de Motorista</h2>
            <form className="driver-form horizontal-form">
              {/* Nome e Sobrenome */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" name="nome" id="nome" required placeholder="Digite seu nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="sobrenome">Sobrenome:</label>
                  <input type="text" name="sobrenome" id="sobrenome" required placeholder="Digite seu sobrenome" />
                </div>
              </div>

              {/* RG e CPF */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rg">RG:</label>
                  <input type="text" name="rg" id="rg" required placeholder="Digite seu RG" />
                </div>
                <div className="form-group">
                  <label htmlFor="cpf">CPF:</label>
                  <input type="text" name="cpf" id="cpf" required placeholder="Digite seu CPF" />
                </div>
              </div>

              {/* CNH e Validade da CNH */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cnh">CNH:</label>
                  <input type="text" name="cnh" id="cnh" required placeholder="Digite sua CNH" />
                </div>
                <div className="form-group">
                  <label htmlFor="validade_cnh">Validade da CNH:</label>
                  <input type="date" name="validade_cnh" id="validade_cnh" required />
                </div>
              </div>

              {/* Condutax e Validade */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="condutax">Condutax:</label>
                  <input type="text" name="condutax" id="condutax" required placeholder="Digite seu Condutax" />
                </div>
                <div className="form-group">
                  <label htmlFor="validade_condutax">Validade do Condutax:</label>
                  <input type="date" name="validade_condutax" id="validade_condutax" required />
                </div>
              </div>

              {/* Endereço */}
              <h3>Endereço</h3>
              <div className="form-row horizontal-form">
                {[ 
                  { label: 'Rua/Av:', name: 'rua', placeholder: 'Digite a Rua ou Avenida' },
                  { label: 'Número:', name: 'numero', placeholder: 'Digite o número' },
                  { label: 'Complemento:', name: 'complemento', placeholder: 'Opcional' },
                ].map((field, index) => (
                  <div className="form-group" key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type="text" name={field.name} id={field.name} required placeholder={field.placeholder} />
                  </div>
                ))}
              </div>

              <div className="form-row horizontal-form">
                {[ 
                  { label: 'Bairro:', name: 'bairro', placeholder: 'Digite o bairro' },
                  { label: 'Cidade:', name: 'cidade', placeholder: 'Digite a cidade' },
                  { label: 'Estado (SP):', name: 'estado', value: 'São Paulo', readOnly: true },
                  { label: 'País:', name: 'pais', value: 'Brasil', readOnly: true },
                ].map((field, index) => (
                  <div className="form-group" key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input 
                      type="text" 
                      name={field.name} 
                      id={field.name} 
                      required={!field.readOnly} 
                      value={field.value} 
                      readOnly={field.readOnly} 
                    />
                  </div>
                ))}
              </div>

              {/* Histórico */}
              <h3>Histórico</h3>
              <div className="form-row horizontal-form">
                {[ 
                  { label: 'Já alugou em frota de táxi? Se sim, qual?', name: 'historico_taxi' },
                  { label: 'Já alugou carro de aplicativo? Particular ou locadora?', name: 'historico_app' },
                  { label: 'Tem dívidas nas frotas de táxi?', name: 'dividas_taxi' },
                ].map((field, index) => (
                  <div className="form-group" key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type="text" name={field.name} id={field.name} />
                  </div>
                ))}
              </div>

              {/* Referências */}
              <h3>Referências</h3>
              <div className="form-row horizontal-form">
                {[ 
                  { label: 'Contato de referência:', name: 'referencia' },
                  { label: 'Foi indicação?', name: 'indicacao' },
                ].map((field, index) => (
                  <div className="form-group" key={index}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input type="text" name={field.name} id={field.name} />
                  </div>
                ))}
              </div>

              <div className="form-buttons">
                <button type="submit">Enviar Candidatura</button>
                <button type="button" onClick={closeModal}>Fechar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
