interface Usuario {
  id?: string;
  rol?: Rol;
  sede?: Sede | null;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  estadoPersona: boolean;
  sedeId?: number;
  contrasenia?: string;
  rolId?: number;
}
