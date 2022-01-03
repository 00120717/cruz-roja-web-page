/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/emergenciaAsignada/mutations';
import getters from '@/store/modules/emergenciaAsignada/getters';
import actions from '@/store/modules/emergenciaAsignada/actions';
import { RootState } from '@/store/types';
import { EmergenciaAsignadaState } from '@/store/modules/emergenciaAsignada/types';

export const state: EmergenciaAsignadaState = {
  emergenciaAsignada: {
    id: 0,
    unionEmergencia: '',
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
    },
    emergencia: {
      id: 0,
      emergenciaNombre: '',
      emergenciaCodigo: '',
      emergenciaDescripcion: '',
      emergenciaInicio: '',
      emergenciaFinal: '',
      tipoEmergencia: {
        id: 0,
        tipoEmergencia: '',
      },
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
  emergenciaAsignadas: [],
};

export const emergenciaAsignada: Module<EmergenciaAsignadaState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
