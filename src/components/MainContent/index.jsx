import React, { useState, useEffect } from 'react';
import SolicitudCard from '../SolicitudCard'; 
import Dropdown from '../Dropdown';
import Modal from '../Modal'; 
import './MainContent.css';
import { estadosOptions } from '../../Props/dropdownOptions';

function MainContent() {
  // Estado local para manejar solicitudes, filtro, carga y modal
  const [solicitudes, setSolicitudes] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolicitud, setSelectedSolicitud] = useState(null);

  useEffect(() => {
    // Función para cargar las solicitudes desde la API
    const fetchSolicitudes = async () => {
      try {
        const response = await fetch('http://localhost:3000/solicitudes/all');  
        const data = await response.json();
        setSolicitudes(data.data || []); 
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las solicitudes', error);
        setLoading(false);
      }
    };

    fetchSolicitudes(); // Carga inicial de solicitudes

    // Refresca las solicitudes cada 5 segundos
    const interval = setInterval(() => {
      fetchSolicitudes(); 
    }, 5000); 

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Filtra las solicitudes basadas en el filtro de búsqueda
  const solicitudesFiltradas = filtro
    ? solicitudes.filter((solicitud) => {
        const estadoSolicitud = mapEstado(solicitud.Estado);
        return (
          estadoSolicitud === filtro || solicitud.Correo.toLowerCase().includes(filtro.toLowerCase())
        );
      })
    : solicitudes;

  // Maneja cambios en el campo de filtro
  const handleFilterChange = (e) => {
    setFiltro(e.target.value);
  };

  // Abre el modal con los detalles de la solicitud seleccionada
  const openModal = async (solicitud) => {
    try {
      const response = await fetch(`http://localhost:3000/solicitudes/${solicitud.id_solicitudes}`);
      const data = await response.json();

      if (response.ok) {
        setSelectedSolicitud(data.data);
        setModalOpen(true);
      } else {
        console.error('Error al cargar la solicitud:', data.message);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  // Cierra el modal y resetea la solicitud seleccionada
  const closeModal = () => {
    setModalOpen(false);
    setSelectedSolicitud(null);
  };

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className='container-text'>
        <div className='container-soli'>
          <h1>Solicitudes</h1>
          <p className='p2'>Solicitudes de reserva para salones</p>
        </div>
      </div>
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="Buscar por correo..." 
          value={filtro} 
          onChange={handleFilterChange} 
        />
        <Dropdown options={estadosOptions} onChange={handleFilterChange} />
      </div>
      <div className="solicitudes-grid">
        {Array.isArray(solicitudesFiltradas) && solicitudesFiltradas.map((solicitud, index) => (
          <SolicitudCard 
            key={index} 
            solicitud={solicitud} 
            onClick={() => openModal(solicitud)} 
          />
        ))}
      </div>
      {modalOpen && selectedSolicitud && (
        <Modal solicitud={selectedSolicitud} onClose={closeModal} />
      )}
    </div>
  );
}

// Mapea el estado numérico a un string legible
const mapEstado = (estado) => {
  switch (estado) {
    case 1:
      return 'reservada'; 
    case 0:
      return 'rechazada'; 
    case 2:
      return 'en_proceso'; 
    default:
      return 'desconocido'; 
  }
};

export default MainContent;