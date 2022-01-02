/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { VoluntarioState } from '@/store/modules/voluntario/types';

export const mutations: MutationTree<VoluntarioState> = {
  setVoluntarios(state, { voluntarios, meta }: { voluntarios: Voluntario[], meta: Meta }) {
    state.voluntarios = voluntarios;
    state.meta = meta;
  },
  setVoluntario(state, voluntario: Voluntario) {
    state.voluntario = voluntario;
  },
  setVoluntarioList(state, voluntarioList: Voluntario[]) {
    state.voluntarioList = voluntarioList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
