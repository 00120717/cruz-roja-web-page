/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import mutations from '@/store/modules/paciente/mutations';
import getters from '@/store/modules/paciente/getters';
import actions from '@/store/modules/paciente/actions';
import { RootState } from '@/store/types';
import { PacienteState } from '@/store/modules/paciente/types';

export const state: PacienteState = {
  paciente: {
    id: '',
    genero: '',
    menorEdad: false,
    alergias: '',
    fechaNacimiento: '',
    estadoPersona: true,
    documentoIdentificacion: '',
    telefonoEncargado: '',
    identificado: false,
    condicionesPermanentes: '',
    tipoDocumentoPersona: '',
    identificadorPersonal: '',
    fechaCreacion: '',
    firstName: '',
    lastName: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  pacientes: [],
};

export const paciente: Module<PacienteState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
