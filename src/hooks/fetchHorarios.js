export const fetchHorariosDisponibles = async (solicitud) => {
    if (!solicitud || !solicitud.id_solicitudes) {
        throw new Error('No se encontró solicitud o id_solicitudes no está definido.');
    }

    const idSolicitud = solicitud.id_solicitudes;
    let response;

    if (solicitud.Num_asistentes <= 15) {
        response = await fetch(`https://api-reservas-sif.whitedesert-ee16f22f.eastus.azurecontainerapps.io/salas/intervalos-individual/${idSolicitud}`);
    } else {
        response = await fetch(`https://api-reservas-sif.whitedesert-ee16f22f.eastus.azurecontainerapps.io/salas/intervalos-combinados/${idSolicitud}`);
    }

    if (!response.ok) {
        throw new Error('Error al obtener los intervalos');
    }

    const data = await response.json();
    return data.data;
};