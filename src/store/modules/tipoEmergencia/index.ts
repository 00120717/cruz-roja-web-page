/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/tipoEmergencia/mutations';
import getters from '@/store/modules/tipoEmergencia/getters';
import actions from '@/store/modules/tipoEmergencia/actions';
import { TipoEmergenciaState } from '@/store/modules/tipoEmergencia/types';

export const state: TipoEmergenciaState = {
  tipoEmergencia: {
    id: 0,
    tipoEmergencia: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  tipoEmergencias: [],
  tipoEmergenciaList: [],
};

export const tipoEmergencia: Module<TipoEmergenciaState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
