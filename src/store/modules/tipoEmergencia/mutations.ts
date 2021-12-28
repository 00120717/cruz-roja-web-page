/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { TipoEmergenciaState } from '@/store/modules/tipoEmergencia/types';

export const mutations: MutationTree<TipoEmergenciaState> = {
  setTipoEmergencias(state, { tipoEmergencias, meta }: { tipoEmergencias: TipoEmergencia[], meta: Meta }) {
    state.tipoEmergencias = tipoEmergencias;
    state.meta = meta;
  },
  setTipoEmergencia(state, tipoEmergencia: TipoEmergencia) {
    state.tipoEmergencia = tipoEmergencia;
  },
  setTipoEmergenciaList(state, tipoEmergenciaList: TipoEmergencia[]) {
    state.tipoEmergenciaList = tipoEmergenciaList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
