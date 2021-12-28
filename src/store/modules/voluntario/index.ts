/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/voluntario/mutations';
import getters from '@/store/modules/voluntario/getters';
import actions from '@/store/modules/voluntario/actions';
import { RootState } from '@/store/types';
import { VoluntarioState } from '@/store/modules/voluntario/types';

export const state: VoluntarioState = {
  voluntario: {
    id: '',
    voluntarioCodigoCarnet: '0',
    fechaInicio: '',
    genero: '',
    fechaNacimiento: '',
    estadoPersona: true,
    documentoIdentificacion: '',
    tipoDocumentoPersona: '',
    firstName: '',
    lastName: '',
    email: null,
    sede: {
      id: 0,
      nombre: '',
      codigo: '',
      direccion: '',
    },
    modalidad: {
      id: 0,
      nombreModalidad: '',
    },
    estado: {
      id: 0,
      estadoVoluntario: '',
    },
    tipoVoluntario: {
      id: 0,
      nombreTipoVoluntario: '',
    },
    cuerpoFilial: {
      id: 0,
      nombreCuerpoFilial: '',
      encargado: '',
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
  voluntarios: [],
  notes: {},
};

export const voluntario: Module<VoluntarioState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
