import React from 'react';
import './Home.css';
import { alerts } from '../../utils/alert';

const Home: React.FC = () => {

  const handleAlert = () => {
    alerts({
      title: 'Bienvenido',
      text: 'Este es un componente reutilizable para las alertas',
      icon: 'info',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      timer: 3000, 
    });
  };
  

  return (
    <div className="home">
      <h2 className="home__title">Inicio</h2>
      <p className="home__description">Bienvenido a la página de inicio.</p>
      <button onClick={handleAlert}>Click Aquí</button>
    </div>
  );
};

export default Home;
