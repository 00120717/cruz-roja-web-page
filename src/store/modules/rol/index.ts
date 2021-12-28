/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RolState } from '@/store/modules/rol/types';
import mutations from '@/store/modules/rol/mutations';
import getters from '@/store/modules/rol/getters';
import actions from '@/store/modules/rol/actions';
import { RootState } from '@/store/types';

export const state: RolState = {
  rol: {
    tipo: '',
    nombre: '',
    id: 0,
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  roles: [],
  rolList: [],
};

export const rol: Module<RolState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
