/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { EmergenciaState } from '@/store/modules/emergencia/types';

export const mutations: MutationTree<EmergenciaState> = {
  setEmergencias(state, { emergencias, meta }: { emergencias: Emergencia[], meta: Meta }) {
    state.emergencias = emergencias;
    state.meta = meta;
  },
  setEmergencia(state, emergencia: Emergencia) {
    state.emergencia = emergencia;
  },
  setEmergenciaList(state, emergenciaList: Emergencia[]) {
    state.emergenciaList = emergenciaList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
