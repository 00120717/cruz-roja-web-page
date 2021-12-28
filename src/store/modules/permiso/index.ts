/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/permiso/mutations';
import getters from '@/store/modules/permiso/getters';
import actions from '@/store/modules/permiso/actions';
import { RootState } from '@/store/types';
import { PermisoState } from '@/store/modules/permiso/types';

export const state: PermisoState = {
  permisos: [],
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  permisoList: [],
};

export const permiso: Module<PermisoState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
