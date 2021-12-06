/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/tipoVoluntario/mutations';
import getters from '@/store/modules/tipoVoluntario/getters';
import actions from '@/store/modules/tipoVoluntario/actions';
import { TipoVoluntarioState } from '@/store/modules/tipoVoluntario/types';

export const state: TipoVoluntarioState = {
  tipoVoluntario: {
    id: 0,
    tipo: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  tipoVoluntarios: [],
  tipoVoluntarioList: [],
};

export const tipoVoluntario: Module<TipoVoluntarioState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
