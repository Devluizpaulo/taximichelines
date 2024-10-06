import React from 'react';
import '../styles/Home.css';
import Carros from '../components/Carros'; // Importando o componente Carros
import { FaCar, FaTools, FaClock, FaHandshake } from 'react-icons/fa';
import heroImage from '../assets/images/hero-image.jpg';

function Home() {
  return (
    <div className="home">
      {/* Seção de Destaque (Hero Section) */}
      <div className="home-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Bem-vindo à Taxi Micheline's</h1>
            <p>Aqui você pode fazer sua Renda, seja independente!</p>
            <button className="cta-button">Alugue Agora</button>
          </div>
        </div>
      </div>

      {/* Seção de Serviços */}
      <section className="home-services">
        <h2>Por que escolher Taxi Micheline's?</h2>
        <div className="services-list">
          <div className="service-item">
            <FaCar className="service-icon" />
            <h3>Frota Moderna</h3>
            <p>Veículos novos e revisados para garantir sua segurança e conforto.</p>
          </div>
          <div className="service-item">
            <FaClock className="service-icon" />
            <h3>Atendimento 24 horas</h3>
            <p>Assistência total para o locatário a qualquer momento, dia ou noite.</p>
          </div>
          <div className="service-item">
            <FaTools className="service-icon" />
            <h3>Oficina Própria</h3>
            <p>Serviço de manutenção rápido e de qualidade com a nossa própria oficina.</p>
          </div>
          <div className="service-item">
            <FaHandshake className="service-icon" />
            <h3>Flexibilidade</h3>
            <p>Planos personalizados para atender suas necessidades, seja para trabalho ou lazer.</p>
          </div>
        </div>
      </section>

      {/* Componente de Carros */}
      <Carros />
    </div>
  );
}

export default Home;
