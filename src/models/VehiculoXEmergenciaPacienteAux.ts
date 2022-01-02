interface VehiculoXEmergenciaPacienteAux {
  id?: number;
  firstName?: string;
  lastName?: string;
  genero?: string;
  estadoPersona?: boolean;
  documentoIdentificacion?: string;
  tipoDocumentoPersona?: string;
  menorEdad?: boolean;
  identificado?: boolean;
  horaSalida?: string;
  horaRegreso?: string;
  voluntarioId?: string;
  voluntario?: Voluntario;
  vehiculoId?: number;
  vehiculo?: Vehiculo;
  hospitalId?: number;
  hospital?: Hospital;
}
