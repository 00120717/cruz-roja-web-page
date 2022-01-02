/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/emergenciaRealizada/mutations';
import getters from '@/store/modules/emergenciaRealizada/getters';
import actions from '@/store/modules/emergenciaRealizada/actions';
import { RootState } from '@/store/types';
import { EmergenciaRealizadaState } from '@/store/modules/emergenciaRealizada/types';

export const state: EmergenciaRealizadaState = {
  emergenciaRealizada: {
    id: '',
    identificadorFormulario: '',
    ubicacionExacta: '',
    fechaRealizada: '',
    fechaHoraLlamada: '',
    telefono: '',
    emisorEmergencia: '',
    comentario: '',
    voluntarios: [{
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
    }],
    emergenciaSeccional: [{
      id: 0,
      fechaInicio: '',
      seccional: {
        id: 0,
        nombre: '',
        codigo: '',
      },
    }],
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  emergenciaRealizadas: [],
  notes: {},
};

export const emergenciaRealizada: Module<EmergenciaRealizadaState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
