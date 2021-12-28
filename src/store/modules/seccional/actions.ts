/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { SeccionalState } from '@/store/modules/seccional/types';
import SeccionalService from '@/services/SeccionalService';

type SeccionalActionContext = ActionContext<SeccionalState, RootState>

export const actions: ActionTree<SeccionalState, RootState> = {
  fetch: async ({ commit }: SeccionalActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await SeccionalService.fetch({ params });
      const { data: seccionales, ...rest } = data;
      commit('setSeccionales', { seccionales, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: SeccionalActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await SeccionalService.list();
      commit('setSeccionalList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: SeccionalActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await SeccionalService.show(id);
      commit('setSeccional', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: SeccionalActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await SeccionalService.destroy(id);
      vm.$snotify.success('Seccional eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: SeccionalActionContext, { seccional, vm }: { seccional: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await SeccionalService.store(seccional);
      vm.$snotify.success('Seccional creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: SeccionalActionContext, { seccional, vm }: { seccional: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await SeccionalService.update(seccional);
      vm.$snotify.success('Seccional actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
