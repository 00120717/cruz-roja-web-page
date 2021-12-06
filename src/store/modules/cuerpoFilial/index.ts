/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/cuerpoFilial/mutations';
import getters from '@/store/modules/cuerpoFilial/getters';
import actions from '@/store/modules/cuerpoFilial/actions';
import { CuerpoFilialState } from '@/store/modules/cuerpoFilial/types';

export const state: CuerpoFilialState = {
  cuerpoFilial: {
    id: 0,
    nombreCuerpoFilial: '',
    encargado: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  cuerpoFiliales: [],
  cuerpoFilialList: [],
};

export const cuerpoFilial: Module<CuerpoFilialState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
