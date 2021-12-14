interface DepartamentoXMunicipio {
  id: number;
  nombreCompuesto?: string;
  departamentoId?: number;
  municipioId?: number;
  departamento?: Departamento;
  municipio?: Municipio;
}
