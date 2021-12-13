/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/tipoSede/mutations';
import getters from '@/store/modules/tipoSede/getters';
import actions from '@/store/modules/tipoSede/actions';
import { TipoSedeState } from '@/store/modules/tipoSede/types';

export const state: TipoSedeState = {
  tipoSede: {
    id: 0,
    nombreTipoSede: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  tipoSedes: [],
  tipoSedeList: [],
};

export const tipoSede: Module<TipoSedeState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
