import React from 'react';
import './SalonCard.css';

function SalonCard({ salon, isSelected, onSelect }) {
    // Determinar el estado de la sala (ocupado o disponible)
    const estadoClase = isSelected
        ? 'seleccionado' // Cuando está seleccionado, la clase es 'seleccionado'
        : salon.estado === 0
        ? 'reservado'  // Si la sala está ocupada (estado 0)
        : 'disponible'; // Si la sala está disponible (estado 1)

    const cardClass = `salon-card ${estadoClase} ${isSelected ? 'selected' : ''}`;

    // Texto para el estado de la sala
    const estadoTexto = isSelected 
        ? 'Seleccionado' 
        : salon.estado === 0 
        ? 'Reservado' 
        : 'Disponible'; 

    // Función que previene la selección si la sala está reservada
    const handleSelect = () => {
        if (salon.estado !== 0) {
            onSelect();
        }
    };

    return (
        <div 
            className={cardClass} 
            onClick={handleSelect}
            style={{ pointerEvents: salon.estado === 0 ? 'none' : 'auto' }}
        >
            <div className="card-header">
                <h3>Salon {salon.id_sala}</h3>
                <span className={`estado-texto ${estadoClase}`}>
                    {estadoTexto}
                </span>
            </div>

            {salon.intervalos && salon.intervalos.length > 0 ? (
                <div className="intervalos">
                    <p><strong>Intervalos Disponibles:</strong></p>
                    {salon.intervalos.map((intervalo) => (
                        <p key={intervalo.id}><strong>{intervalo.inicio} - {intervalo.fin}</strong></p>
                    ))}
                </div>
            ) : (
                <p><strong>Rango de Horas Disponibles: {salon.rangoHoras || 'No disponible'}</strong></p>
            )}
        </div>
    );
}

export default SalonCard;
