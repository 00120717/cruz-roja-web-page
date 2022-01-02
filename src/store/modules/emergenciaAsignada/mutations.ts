/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { EmergenciaAsignadaState } from '@/store/modules/emergenciaAsignada/types';

export const mutations: MutationTree<EmergenciaAsignadaState> = {
  setEmergenciaAsignadas(state, { emergenciaAsignadas, meta }: { emergenciaAsignadas: EmergenciaAsignada[], meta: Meta }) {
    state.emergenciaAsignadas = emergenciaAsignadas;
    state.meta = meta;
  },
  setEmergenciaAsignada(state, emergenciaAsignada: EmergenciaAsignada) {
    state.emergenciaAsignada = emergenciaAsignada;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
