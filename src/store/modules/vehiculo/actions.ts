/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { VehiculoState } from '@/store/modules/vehiculo/types';
import VehiculoService from '@/services/VehiculoService';

type VehiculoActionContext = ActionContext<VehiculoState, RootState>

export const actions: ActionTree<VehiculoState, RootState> = {
  fetch: async ({ commit }: VehiculoActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await VehiculoService.fetch({ params });
      const { data: vehiculos, ...rest } = data;
      commit('setVehiculos', { vehiculos, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: VehiculoActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await VehiculoService.list();
      commit('setVehiculoList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: VehiculoActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await VehiculoService.show(id);
      commit('setVehiculo', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: VehiculoActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VehiculoService.destroy(id);
      vm.$snotify.success('Vehiculo eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: VehiculoActionContext, { vehiculo, vm }: { vehiculo: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VehiculoService.store(vehiculo);
      vm.$snotify.success('Vehiculo creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: VehiculoActionContext, { vehiculo, vm }: { vehiculo: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VehiculoService.update(vehiculo);
      vm.$snotify.success('Vehiculo actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
