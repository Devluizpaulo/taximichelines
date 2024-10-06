import React from 'react';
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from 'react-icons/fa'; // Importando ícones
import '../styles/Testimonials.css'; // Importando os estilos

const testimonialsData = [
  {
    name: "Carlos Silva",
    review: "Serviço excelente! A assistência 24 horas realmente faz a diferença, e a frota é incrível. Recomendo muito a Taxi Micheline's!",
    rating: 5
  },
  {
    name: "Fernanda Costa",
    review: "Os carros são super modernos e em ótimo estado. Fiquei muito satisfeita com a flexibilidade e o atendimento da equipe.",
    rating: 4
  },
  {
    name: "João Pedro",
    review: "A experiência com os carros elétricos foi fantástica. Sem dúvida, um serviço que oferece muita qualidade e segurança.",
    rating: 5
  }
];

const renderRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <>
      {Array(fullStars).fill(<FaStar className="star" />)}
      {halfStar && <FaStarHalfAlt className="star" />}
    </>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Depoimentos de Clientes</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-review">"{testimonial.review}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <div className="testimonial-rating">
              {renderRating(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
