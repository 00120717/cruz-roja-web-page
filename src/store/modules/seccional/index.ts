/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/seccional/mutations';
import getters from '@/store/modules/seccional/getters';
import actions from '@/store/modules/seccional/actions';
import { SeccionalState } from '@/store/modules/seccional/types';

export const state: SeccionalState = {
  seccional: {
    codigo: '',
    id: 0,
    nombre: '',
    departamentoXmunicipio: {
      id: 0,
      nombreCompuesto: '',
      departamento: {
        id: 0,
        departamentoNombre: '',
      },
      municipio: {
        id: 0,
        municipioNombre: '',
      },
    },
    departamentoXmunicipioId: 0,
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  seccionales: [],
  seccionalList: [],
};

export const seccional: Module<SeccionalState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
