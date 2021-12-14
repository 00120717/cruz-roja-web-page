/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/sede/mutations';
import getters from '@/store/modules/sede/getters';
import actions from '@/store/modules/sede/actions';
import { SedeState } from '@/store/modules/sede/types';

export const state: SedeState = {
  sede: {
    direccion: '',
    codigo: '',
    id: 0,
    nombre: '',
    tipoSede: {
      id: 0,
      nombreTipoSede: '',
    },
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
    tipoSedeId: 0,
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
  sedes: [],
  sedeList: [],
};

export const sede: Module<SedeState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
