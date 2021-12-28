/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { VehiculoState } from '@/store/modules/vehiculo/types';

export const mutations: MutationTree<VehiculoState> = {
  setVehiculos(state, { vehiculos, meta }: { vehiculos: Vehiculo[], meta: Meta }) {
    state.vehiculos = vehiculos;
    state.meta = meta;
  },
  setVehiculo(state, vehiculo: Vehiculo) {
    state.vehiculo = vehiculo;
  },
  setVehiculoList(state, vehiculoList: Vehiculo[]) {
    state.vehiculoList = vehiculoList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
