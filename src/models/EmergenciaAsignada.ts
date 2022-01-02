interface EmergenciaAsignada {
  id: number;
  unionEmergencia: string;
  voluntario: Voluntario;
  voluntarioId?: string;
  emergencia?: Emergencia;
  emergenciaId?: number;
}
