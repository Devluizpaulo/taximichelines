import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; // Importe o componente de contato

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonials />
      <Contact /> {/* Adicione a seção de contato antes do rodapé */}
      <Footer />
    </div>
  );
}

export default App;
