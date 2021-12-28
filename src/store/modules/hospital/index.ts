/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/hospital/mutations';
import getters from '@/store/modules/hospital/getters';
import actions from '@/store/modules/hospital/actions';
import { HospitalState } from '@/store/modules/hospital/types';

export const state: HospitalState = {
  hospital: {
    id: 0,
    nombreHospital: '',
    codigoHospital: '',
    fechaCreacion: '',
  },
  isLoading: false,
  meta: {
    current_page: 1,
    from: 1,
    to: 1,
    per_page: '10',
    total: 1,
  },
  hospitales: [],
  hospitalList: [],
};

export const hospital: Module<HospitalState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
