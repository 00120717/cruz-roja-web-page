/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import mutations from '@/store/modules/vehiculo/mutations';
import getters from '@/store/modules/vehiculo/getters';
import actions from '@/store/modules/vehiculo/actions';
import { VehiculoState } from '@/store/modules/vehiculo/types';

export const state: VehiculoState = {
  vehiculo: {
    id: 0,
    nombreVehiculo: '',
    kilometraje: '',
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
  vehiculos: [],
  vehiculoList: [],
};

export const vehiculo: Module<VehiculoState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
