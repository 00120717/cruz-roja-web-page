/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { HospitalState } from '@/store/modules/hospital/types';
import HospitalService from '@/services/HospitalService';

type HospitalActionContext = ActionContext<HospitalState, RootState>

export const actions: ActionTree<HospitalState, RootState> = {
  fetch: async ({ commit }: HospitalActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await HospitalService.fetch({ params });
      const { data: hospitales, ...rest } = data;
      commit('setHospitales', { hospitales, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: HospitalActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await HospitalService.list();
      commit('setHospitalList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: HospitalActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await HospitalService.show(id);
      commit('setHospital', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: HospitalActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await HospitalService.destroy(id);
      vm.$snotify.success('Hospital eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: HospitalActionContext, { hospital, vm }: { hospital: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await HospitalService.store(hospital);
      vm.$snotify.success('Hospital creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: HospitalActionContext, { hospital, vm }: { hospital: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await HospitalService.update(hospital);
      vm.$snotify.success('Hospital actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
