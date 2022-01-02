interface EmergenciaRealizada {
  id: string;
  identificadorFormulario: string;
  ubicacionExacta: string;
  fechaRealizada: string;
  fechaHoraLlamada: string;
  telefono: string;
  emisorEmergencia: string;
  comentario: string;
  voluntarios?: Voluntario[];
  emergenciaSeccional?: EmergenciaSeccional[];
  emergenciaPaciente?: EmergenciaPaciente[];
}
