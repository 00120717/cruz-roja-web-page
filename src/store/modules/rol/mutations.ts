/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { RolState } from '@/store/modules/rol/types';

export const mutations: MutationTree<RolState> = {
  setRoles(state, { roles, meta }: { roles: Rol[], meta: Meta }) {
    state.roles = roles;
    state.meta = meta;
  },
  setRol(state, rol: Rol) {
    state.rol = rol;
  },
  setRolList(state, rolList: Rol[]) {
    state.rolList = rolList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
