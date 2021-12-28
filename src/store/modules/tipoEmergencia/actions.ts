/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { TipoEmergenciaState } from '@/store/modules/tipoEmergencia/types';
import TipoEmergenciaService from '@/services/TipoEmergenciaService';

type TipoEmergenciaActionContext = ActionContext<TipoEmergenciaState, RootState>

export const actions: ActionTree<TipoEmergenciaState, RootState> = {
  fetch: async ({ commit }: TipoEmergenciaActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await TipoEmergenciaService.fetch({ params });
      const { data: tipoEmergencias, ...rest } = data;
      commit('setTipoEmergencias', { tipoEmergencias, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: TipoEmergenciaActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoEmergenciaService.list();
      commit('setTipoEmergenciaList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: TipoEmergenciaActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoEmergenciaService.show(id);
      commit('setTipoEmergencia', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: TipoEmergenciaActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoEmergenciaService.destroy(id);
      vm.$snotify.success('Tipo Emergencia eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: TipoEmergenciaActionContext, { tipoEmergencia, vm }: { tipoEmergencia: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoEmergenciaService.store(tipoEmergencia);
      vm.$snotify.success('Tipo Emergencia creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: TipoEmergenciaActionContext, { tipoEmergencia, vm }: { tipoEmergencia: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoEmergenciaService.update(tipoEmergencia);
      vm.$snotify.success('Tipo Emergencia actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
