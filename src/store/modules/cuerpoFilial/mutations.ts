/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { CuerpoFilialState } from '@/store/modules/cuerpoFilial/types';

export const mutations: MutationTree<CuerpoFilialState> = {
  setCuerpoFiliales(state, { cuerpoFiliales, meta }: { cuerpoFiliales: CuerpoFilial[], meta: Meta }) {
    state.cuerpoFiliales = cuerpoFiliales;
    state.meta = meta;
  },
  setCuerpoFilial(state, cuerpoFilial: CuerpoFilial) {
    state.cuerpoFilial = cuerpoFilial;
  },
  setCuerpoFilialList(state, cuerpoFilialesList: CuerpoFilial[]) {
    state.cuerpoFilialList = cuerpoFilialesList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
