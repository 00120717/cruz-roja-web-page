interface Usuario {
  id?: number;
  rol?: Rol;
  sede?: Sede | null;
  username: string;
  firstName: string;
  lastName: string;
  email: string | null;
  estadoPersona: boolean;
  sedeId?: number;
  password?: string;
  rolId?: number;
}
