interface VehiculoXEmergenciaPaciente {
  id: number;
  horaSalida: string;
  horaRegreso: string;
  voluntario: Voluntario;
  voluntarioId: string;
  vehiculo: Vehiculo;
  vehiculoId: number;
  hospital: Hospital;
  hospitalId: number;
}
