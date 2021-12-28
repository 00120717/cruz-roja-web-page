/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { EmergenciaState } from '@/store/modules/emergencia/types';
import EmergenciaService from '@/services/EmergenciaService';

type EmergenciaActionContext = ActionContext<EmergenciaState, RootState>

export const actions: ActionTree<EmergenciaState, RootState> = {
  fetch: async ({ commit }: EmergenciaActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await EmergenciaService.fetch({ params });
      const { data: emergencias, ...rest } = data;
      commit('setEmergencias', { emergencias, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: EmergenciaActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EmergenciaService.list();
      commit('setEmergenciaList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: EmergenciaActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EmergenciaService.show(id);
      commit('setEmergencia', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: EmergenciaActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaService.destroy(id);
      vm.$snotify.success('Emergencia eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: EmergenciaActionContext, { emergencia, vm }: { emergencia: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaService.store(emergencia);
      vm.$snotify.success('Emergencia creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: EmergenciaActionContext, { emergencia, vm }: { emergencia: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaService.update(emergencia);
      vm.$snotify.success('Emergencia actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
