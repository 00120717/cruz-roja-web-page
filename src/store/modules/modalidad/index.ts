/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/modalidad/mutations';
import getters from '@/store/modules/modalidad/getters';
import actions from '@/store/modules/modalidad/actions';
import { ModalidadState } from '@/store/modules/modalidad/types';

export const state: ModalidadState = {
  modalidad: {
    id: 0,
    nombreModalidad: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  modalidades: [],
  modalidadList: [],
};

export const modalidad: Module<ModalidadState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
