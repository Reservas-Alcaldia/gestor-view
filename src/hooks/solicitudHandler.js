export const agendarSolicitud = async (solicitudId, data) => {
    const response = await fetch(`https://api-reservas-sif.whitedesert-ee16f22f.eastus.azurecontainerapps.io/solicitudes/approve/${solicitudId}`, {
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
    const response = await fetch(`https://api-reservas-sif.whitedesert-ee16f22f.eastus.azurecontainerapps.io/solicitudes/disapprove/${solicitudId}`, {
      method: 'PUT',
    });
  
    if (!response.ok) {
      throw new Error('Error al rechazar solicitud');
    }
  
    return await response.json();
  };