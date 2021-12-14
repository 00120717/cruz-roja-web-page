/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/departamentoXMunicipio/mutations';
import getters from '@/store/modules/departamentoXMunicipio/getters';
import actions from '@/store/modules/departamentoXMunicipio/actions';
import { DepartamentoXMunicipioState } from '@/store/modules/departamentoXMunicipio/types';

export const state: DepartamentoXMunicipioState = {
  departamentoXMunicipio: {
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
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  departamentoXMunicipios: [],
  departamentoXMunicipioList: [],
};

export const departamentoXMunicipio: Module<DepartamentoXMunicipioState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
