export const agendarSolicitud = async (solicitudId, data) => {
    const response = await fetch(`http://localhost:3000/solicitudes/approve/${solicitudId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Error al aprobar solicitud');
    }
  
    return await response.json();
  };
  
  export const rechazarSolicitud = async (solicitudId) => {
    const response = await fetch(`http://localhost:3000/solicitudes/disapprove/${solicitudId}`, {
      method: 'PUT',
    });
  
    if (!response.ok) {
      throw new Error('Error al rechazar solicitud');
    }
  
    return await response.json();
  };