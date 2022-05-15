interface EmergenciaRealizada {
  id: string;
  identificadorFormulario: string;
  ubicacionExacta: string;
  fechaRealizada: string;
  fechaHoraLlamada: string;
  telefono: string;
  emisorEmergencia: string;
  comentario: string;
  ubicacionReferencia: string;
  latitud: number;
  longitud: number;
  voluntarios?: Voluntario[];
  emergenciaSeccional?: EmergenciaSeccional[];
  emergenciaPaciente?: EmergenciaPaciente[];
  idEmergencia: number;
}
