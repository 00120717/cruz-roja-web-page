interface Seccional {
  id: number;
  nombre: string;
  codigo: string;
  departamentoXmunicipioId?: number;
  departamentoXmunicipio?: DepartamentoXMunicipio;
}
