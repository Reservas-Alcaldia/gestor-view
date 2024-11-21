import React from 'react';
import './SolicitudCard.css';

function SolicitudCard({ solicitud, onClick }) {
  // Mapea el estado numérico a texto
  const mapEstado = (estado) => {
    switch (estado) {
      case 1:
        return 'reservada'; // Estado aprobado
      case 0:
        return 'rechazada'; // Estado no aprobado
      case 2:
        return 'en_proceso'; // Estado en espera
      default:
        return 'desconocido'; // Estado desconocido
    }
  };

  // Función para formatear el texto (convertir en_proceso a En Proceso, etc.)
  const formatearEstado = (estado) => {
    return estado
      .replace(/_/g, ' ') // Reemplaza los guiones bajos por espacios
      .replace(/\b\w/g, (letra) => letra.toUpperCase()); // Convierte la primera letra de cada palabra a mayúsculas
  };

  const estadoClase = mapEstado(solicitud.Estado); // Usamos la función para obtener el estado en formato de clase
  const estadoTexto = formatearEstado(estadoClase); // Formateamos el estado para mostrarlo como texto

  return (
    <div className={`solicitud-card ${estadoClase}`} onClick={onClick}>
      <div className="card-header">
        <h3><i className="fas fa-envelope"></i> Solicitud</h3>
        <span className={`estado ${estadoClase}`}>{estadoTexto}</span> {/* Mostramos el texto formateado */}
      </div>
      <p><strong>Nombre:</strong> {solicitud.Nombre}</p>
      <p><strong>Correo:</strong> {solicitud.Correo}</p>
      <p><strong>Personas a asistir:</strong> {solicitud.Num_asistentes}</p>
      <p><strong>Fecha de la reunión:</strong> {solicitud.Fecha_reserva}</p>
      <div className='linea2'></div>
      <div className="card-footer">
        <span><strong>Hora de Inicio:</strong> {solicitud.Hora_inicio}</span>
        <span><strong>Hora de Finalización:</strong> {solicitud.Hora_final}</span>
      </div>
    </div>
  );
}

export default SolicitudCard;