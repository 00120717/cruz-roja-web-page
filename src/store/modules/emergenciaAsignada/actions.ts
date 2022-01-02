import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { EmergenciaAsignadaState } from '@/store/modules/emergenciaAsignada/types';
import EmergenciaAsignadaService from '@/services/EmergenciaAsignadaService';

type EmergenciaAsignadaActionContext = ActionContext<EmergenciaAsignadaState, RootState>

export const actions: ActionTree<EmergenciaAsignadaState, RootState> = {
  fetch: async ({ commit }: EmergenciaAsignadaActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await EmergenciaAsignadaService.fetch({ params });
      const { data: emergenciaAsignadas, ...rest } = data;
      commit('setEmergenciaAsignadas', { emergenciaAsignadas, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: EmergenciaAsignadaActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EmergenciaAsignadaService.showString(id);
      commit('setEmergenciaAsignada', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: EmergenciaAsignadaActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaAsignadaService.destroyString(id);
      vm.$snotify.success('Emergencia Asignada eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: EmergenciaAsignadaActionContext, { emergenciaAsignada, vm }: { emergenciaAsignada: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaAsignadaService.store(emergenciaAsignada);
      vm.$snotify.success('Emergencia Asignada creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: EmergenciaAsignadaActionContext, { emergenciaAsignada, vm }: { emergenciaAsignada: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EmergenciaAsignadaService.update(emergenciaAsignada);
      vm.$snotify.success('Emergencia Asignada actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
