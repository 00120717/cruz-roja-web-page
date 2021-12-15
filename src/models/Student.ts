interface Student {
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
  modalidad?: Modality;
  cuerpoFilialId?: number;
  cuerpoFilial?: CuerpoFilial;
  tipoVoluntarioId?: number;
  tipoVoluntario?: TipoVoluntario;
  estadoId?: number;
  estado?: Estado;
}
