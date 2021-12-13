/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { TipoSedeState } from '@/store/modules/tipoSede/types';

export const mutations: MutationTree<TipoSedeState> = {
  setTiposSedes(state, { tipoSedes, meta }: { tipoSedes: TipoSede[], meta: Meta }) {
    state.tipoSedes = tipoSedes;
    state.meta = meta;
  },
  setTipoSede(state, tipoSede: TipoSede) {
    state.tipoSede = tipoSede;
  },
  setTipoSedeList(state, tipoSedeList: TipoSede[]) {
    state.tipoSedeList = tipoSedeList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
