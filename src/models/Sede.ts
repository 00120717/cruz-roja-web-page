interface Sede {
  id: number;
  nombre: string;
  codigo: string;
  direccion: string;
  tipoSedeId?: number;
  tipoSede?: TipoSede;
}
