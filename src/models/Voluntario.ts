interface Voluntario {
  id?: string;
  fechaInicio: string;
  voluntarioCodigoCarnet?: string;
  firstName: string;
  lastName: string;
  genero: string;
  fechaNacimiento: string;
  email: string | null;
  estadoPersona: boolean;
  documentoIdentificacion: string;
  tipoDocumentoPersona: string;
  sede?: Sede | null;
  sedeId?: number;
  modalityId?: number;
  modalidad?: Modalidad;
  cuerpoFilialId?: number;
  cuerpoFilial?: CuerpoFilial;
  tipoVoluntarioId?: number;
  tipoVoluntario?: TipoVoluntario;
  estadoId?: number;
  estado?: Estado;
}
