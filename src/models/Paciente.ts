interface Paciente {
  id?: string;
  firstName: string;
  lastName: string;
  genero: string;
  fechaNacimiento?: string;
  nombreCompuesto?: string;
  estadoPersona: boolean;
  documentoIdentificacion?: string;
  tipoDocumentoPersona?: string;
  menorEdad: boolean;
  alergias?: string;
  telefonoEncargado?: string;
  identificado?: boolean;
  condicionesPermanentes?: string;
  identificadorPersonal?: string;
  fechaCreacion: string;
}
