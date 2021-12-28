/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { PermisoState } from '@/store/modules/permiso/types';

export const mutations: MutationTree<PermisoState> = {
  setPermisos(state, { permisos, meta }: { permisos: Permiso[], meta: Meta }) {
    state.permisos = permisos;
    state.meta = meta;
  },
  setPermisoList(state, permisoList: Permiso[]) {
    state.permisoList = permisoList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
