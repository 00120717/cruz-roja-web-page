interface Emergencia {
  id: number;
  emergenciaNombre: string;
  emergenciaCodigo: string;
  emergenciaInicio: string;
  emergenciaFinal: string;
  emergenciaDescripcion: string;
  tipoEmergenciaId?: number;
  tipoEmergencia?: TipoEmergencia;
}
