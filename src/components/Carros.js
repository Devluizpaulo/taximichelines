import React, { useState } from 'react';
import '../styles/Carros.css'; 

import Virtus from '../assets/images/virtus.png';
import Voyage from '../assets/images/voyage.png';
import Polo from '../assets/images/polo.png';
import Gol from '../assets/images/gol.png';
import Ioniq from '../assets/images/Ioniq.png';
import Sandero from '../assets/images/sandero.png';
import Logan from '../assets/images/logan.png';
import Duster from '../assets/images/duster.png';
import Versa from '../assets/images/versa.png';
import Corolla from '../assets/images/corolla.png';
import CorollaCross from '../assets/images/corrolaCross.png';
import Prius from '../assets/images/Prius.png';
import Etios from '../assets/images/etios.png';
import Cronos from '../assets/images/cronos.png';
import Spin from '../assets/images/spin.png';
import Prisma from '../assets/images/prisma.png';
import OnixPlus from '../assets/images/onix-plus.png';
import Acessivel from '../assets/images/1.png';
import Acessivel2 from '../assets/images/2.png';


const categorias = [
    {
        nome: "Híbridos e Elétricos",
        carros: [
            { nome: "Corolla Cross Hybrid", img: CorollaCross },
            { nome: "Corolla Hybrid", img: Corolla },
            { nome: "Prius Hybrid", img: Prius },
            { nome: "Ioniq Hybrid", img: Ioniq },

        ]
    },
    {
        nome: "Sedans Flex (GNV)",
        carros: [
            { nome: "Virtus", img: Virtus },
            { nome: "Onix Plus", img: OnixPlus },
            { nome: "Cronos", img: Cronos },
            { nome: "Etios", img: Etios },
        ]
    },
    {
        nome: "Sedans Compactos",
        carros: [
            { nome: "Voyage", img: Voyage },
            { nome: "Logan", img: Logan },
            { nome: "Prisma", img: Prisma },
            { nome: "Versa", img: Versa },
        ]
    },
    {
        nome: "Hatch Flex",
        carros: [
            { nome: "Sandero", img: Sandero },
            { nome: "Polo Track", img: Polo },
            { nome: "Gol", img: Gol },
        ]
    },
    {
        nome: "Carros Grandes (BAG)",
        carros: [
            { nome: "Spin", img: Spin },
            { nome: "Duster", img: Duster },
        ]
    },

    {
        nome: "Acessível",
        carros: [
            { nome: "Acessível", img: Acessivel },
            { nome: "Acessível", img: Acessivel2 },

        ]
    },
];

const Carros = () => {
    const [modalImg, setModalImg] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleImageClick = (imgSrc) => {
        setModalImg(imgSrc);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    return (
        <section className="carros">
            <h2>Nossas categorias</h2>
            <div className="carros-list">
                {categorias.map((categoria) => (
                    <div className="categoria" key={categoria.nome}>
                        <h3>{categoria.nome}</h3>
                        <div className="carros-grid">
                            {categoria.carros.map((carro) => (
                                <div className="carro" key={carro.nome}>
                                    <img
                                        src={carro.img}
                                        alt={carro.nome}
                                        className="carro-imagem"
                                        onClick={() => handleImageClick(carro.img)} 
                                    />
                                    <h4>{carro.nome}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

           
            {modalVisible && (
                <div className="modal" onClick={handleModalClose}>
                    <img src={modalImg} alt="Imagem Ampliada" />
                </div>
            )}
        </section>
    );
}

export default Carros;
