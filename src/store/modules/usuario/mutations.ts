/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { UsuarioState } from '@/store/modules/usuario/types';

export const mutations: MutationTree<UsuarioState> = {
  setUsuarios(state, { usuarios, meta }: { usuarios: Usuario[], meta: Meta }) {
    state.usuarios = usuarios;
    state.meta = meta;
  },
  setUsuario(state, usuario: Usuario) {
    state.usuario = usuario;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
