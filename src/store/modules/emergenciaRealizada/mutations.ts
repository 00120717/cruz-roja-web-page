/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { EmergenciaRealizadaState } from '@/store/modules/emergenciaRealizada/types';

export const mutations: MutationTree<EmergenciaRealizadaState> = {
  setEmergenciaRealizadas(state, { emergenciaRealizadas, meta }: { emergenciaRealizadas: EmergenciaRealizada[], meta: Meta }) {
    state.emergenciaRealizadas = emergenciaRealizadas;
    state.meta = meta;
  },
  setReporteList(state, emergenciaRealizadaList: EmergenciaRealizada[]) {
    state.emergenciaRealizadaList = emergenciaRealizadaList;
  },
  setEmergenciaRealizada(state, emergenciaRealizada: EmergenciaRealizada) {
    state.emergenciaRealizada = emergenciaRealizada;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
