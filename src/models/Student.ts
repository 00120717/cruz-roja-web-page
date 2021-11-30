interface Student {
  id?: string;
  username: string;
  estado: boolean;
  genero: string;
  lastName: string;
  firstName: string;
  aniosServicio: number | null;
  email?: string | null;
  sede?: Sede | null;
  sedeId?: number;
  voluntarioCodigo?: string;
  person?: Person;
  modality?: Modality;
}

interface Person {
  id: number | string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  email: string | null;
  altPhoneNumber: string | null;
  status: boolean;
  sede: Sede;
}
