import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { EmergenciaRealizadaState } from '@/store/modules/emergenciaRealizada/types';
import EmergenciaRealizadaService from '@/services/EmergenciaRealizadaService';

type EmergenciaRealizadaActionContext = ActionContext<EmergenciaRealizadaState, RootState>

export const actions: ActionTree<EmergenciaRealizadaState, RootState> = {
  fetch: async ({ commit }: EmergenciaRealizadaActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await EmergenciaRealizadaService.fetch({ params });
      const { data: emergenciaRealizadas, ...rest } = data;
      commit('setEmergenciaRealizadas', { emergenciaRealizadas, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: EmergenciaRealizadaActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EmergenciaRealizadaService.showString(id);
      commit('setEmergenciaRealizada', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: EmergenciaRealizadaActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaRealizadaService.destroyString(id);
      vm.$snotify.success('Emergencia Realizada eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: EmergenciaRealizadaActionContext, { emergenciaRealizada, vm }: { emergenciaRealizada: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaRealizadaService.store(emergenciaRealizada);
      vm.$snotify.success('Emergencia Realizada creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: EmergenciaRealizadaActionContext, { emergenciaRealizada, vm }: { emergenciaRealizada: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaRealizadaService.update(emergenciaRealizada);
      vm.$snotify.success('Emergencia Realizada actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
