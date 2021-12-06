/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { CuerpoFilialState } from '@/store/modules/cuerpoFilial/types';
import CuerpoFilialService from '@/services/CuerpoFilialService';

type CuerpoFilialActionContext = ActionContext<CuerpoFilialState, RootState>

export const actions: ActionTree<CuerpoFilialState, RootState> = {
  fetch: async ({ commit }: CuerpoFilialActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await CuerpoFilialService.fetch({ params });
      const { data: sedes, ...rest } = data;
      commit('setCuerpoFiliales', { sedes, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: CuerpoFilialActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await CuerpoFilialService.list();
      console.log(data);
      commit('setCuerpoFilialList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: CuerpoFilialActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await CuerpoFilialService.show(id);
      commit('setCuerpoFilial', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: CuerpoFilialActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await CuerpoFilialService.destroy(id);
      vm.$snotify.success('Cuerpo Filial eliminadao correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: CuerpoFilialActionContext, { sede, vm }: { sede: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await CuerpoFilialService.store(sede);
      vm.$snotify.success('Cuerpo Filial creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: CuerpoFilialActionContext, { sede, vm }: { sede: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await CuerpoFilialService.update(sede);
      vm.$snotify.success('Cuerpo Filial actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
