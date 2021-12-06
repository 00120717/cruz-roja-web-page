interface Student {
  id?: string;
  fechaInicio: string;
  voluntarioCodigo?: string;
  username: string;
  firstName: string;
  lastName: string;
  genero: string;
  fechaNacimiento: string;
  email: string | null;
  estadoPersona: boolean;
  sede?: Sede | null;
  sedeId?: number;
  modalityId?: number;
  modalidad?: Modality;
  cuerpoFilialId?: number;
  cuerpoFilial?: CuerpoFilial;
  tipoVoluntarioId?: number;
  tipoVoluntario?: TipoVoluntario;
  modality?: Modality;
  estadoId?: number;
  estado?: Estado;
}
