/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { TipoVoluntarioState } from '@/store/modules/tipoVoluntario/types';

export const mutations: MutationTree<TipoVoluntarioState> = {
  setTipoVoluntarios(state, { tipoVoluntarios, meta }: { tipoVoluntarios: TipoVoluntario[], meta: Meta }) {
    state.tipoVoluntarios = tipoVoluntarios;
    state.meta = meta;
  },
  setTipoVoluntario(state, tipoVoluntario: TipoVoluntario) {
    state.tipoVoluntario = tipoVoluntario;
  },
  setTipoVoluntarioList(state, tipoVoluntarioList: TipoVoluntario[]) {
    state.tipoVoluntarioList = tipoVoluntarioList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
