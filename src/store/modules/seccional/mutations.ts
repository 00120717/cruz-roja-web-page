/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { SeccionalState } from '@/store/modules/seccional/types';

export const mutations: MutationTree<SeccionalState> = {
  setSeccionales(state, { seccionales, meta }: { seccionales: Seccional[], meta: Meta }) {
    state.seccionales = seccionales;
    state.meta = meta;
  },
  setSeccional(state, seccional: Seccional) {
    state.seccional = seccional;
  },
  setSeccionalList(state, seccionales: Seccional[]) {
    state.seccionalList = seccionales;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
