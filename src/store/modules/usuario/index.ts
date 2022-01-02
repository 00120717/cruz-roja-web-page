/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { UsuarioState } from '@/store/modules/usuario/types';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/usuario/mutations';
import getters from '@/store/modules/usuario/getters';
import actions from '@/store/modules/usuario/actions';

export const state: UsuarioState = {
  usuario: {
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    rol: {
      id: 0,
      nombre: '',
      tipo: '',
    },
    estadoPersona: false,
    username: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  usuarios: [],
  usuarioList: [],
};

export const usuario: Module<UsuarioState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
