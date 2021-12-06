/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/estado/mutations';
import getters from '@/store/modules/estado/getters';
import actions from '@/store/modules/estado/actions';
import { EstadoState } from '@/store/modules/estado/types';

export const state: EstadoState = {
  estado: {
    id: 0,
    estadoVoluntario: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  estados: [],
  estadoList: [],
};

export const estado: Module<EstadoState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
