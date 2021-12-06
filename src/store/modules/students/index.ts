/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/students/mutations';
import getters from '@/store/modules/students/getters';
import actions from '@/store/modules/students/actions';
import { RootState } from '@/store/types';
import { StudentState } from '@/store/modules/students/types';

export const state: StudentState = {
  student: {
    id: '',
    voluntarioCodigo: '0',
    fechaInicio: '',
    genero: '',
    fechaNacimiento: '',
    estadoPersona: true,
    username: '',
    firstName: '',
    lastName: '',
    email: null,
    sede: {
      id: 0,
      name: '',
      logo: '',
      code: '',
      address: '',
    },
    modalidad: {
      id: 0,
      type: '',
    },
    estado: {
      id: 0,
      estadoVoluntario: '',
    },
    tipoVoluntario: {
      id: 0,
      tipo: '',
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
  students: [],
  notes: {},
};

export const students: Module<StudentState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
