/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/emergencia/mutations';
import getters from '@/store/modules/emergencia/getters';
import actions from '@/store/modules/emergencia/actions';
import { EmergenciaState } from '@/store/modules/emergencia/types';

export const state: EmergenciaState = {
  emergencia: {
    id: 0,
    emergenciaNombre: '',
    emergenciaCodigo: '',
    emergenciaDescripcion: '',
    emergenciaInicio: '',
    emergenciaFinal: '',
    tipoEmergencia: {
      id: 0,
      tipoEmergencia: '',
    },
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  emergencias: [],
  emergenciaList: [],
};

export const emergencia: Module<EmergenciaState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
