export const fetchSalasDisponibles = async (solicitud) => {
    if (!solicitud || !solicitud.id_solicitudes) {
        throw new Error('No se encontró solicitud o id_solicitudes no está definido.');
    }

    const idSolicitud = solicitud.id_solicitudes;
    let salas;

    if (solicitud.Num_asistentes <= 15) {
        const response = await fetch(`http://localhost:3000/salas/disponibilidad-individual/${idSolicitud}`);
        if (!response.ok) {
            throw new Error('Error al obtener las salas individuales');
        }
        const responseData = await response.json();
        salas = responseData.data;
    } else {
        const response = await fetch(`http://localhost:3000/salas/disponibilidad-combinada/${idSolicitud}`);
        if (!response.ok) {
            throw new Error('Error al obtener las salas combinadas');
        }
        const responseData = await response.json();
        salas = responseData.data;
    }

    return salas;
};