/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { EstadoState } from '@/store/modules/estado/types';

export const mutations: MutationTree<EstadoState> = {
  setEstados(state, { estados, meta }: { estados: Estado[], meta: Meta }) {
    state.estados = estados;
    state.meta = meta;
  },
  setEstado(state, estado: Estado) {
    state.estado = estado;
  },
  setEstadoList(state, estadoList: Estado[]) {
    state.estadoList = estadoList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
