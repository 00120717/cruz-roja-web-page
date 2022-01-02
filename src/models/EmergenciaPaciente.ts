interface EmergenciaPaciente {
  id: number;
  tratamientosRealizados: string;
  diagnostico: string;
  prendaSuperior: string;
  prendaInferior: string;
  calzado: string;
  estatura: string;
  peloColorEstilo: string;
  comentarioSenialEspecial: string;
  fechaAtencionInicial: string;
  fechaDespacho: string;
  fechaIngresoHospital: string;
  paciente: Paciente;
  pacienteId: string;
  vehiculoXEmergenciaPaciente: VehiculoXEmergenciaPaciente[];
  vehiculoXEmergenciaPacienteId: string;
}
