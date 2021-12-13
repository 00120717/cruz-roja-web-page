/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { EstadoState } from '@/store/modules/estado/types';
import EstadoService from '@/services/EstadoService';

type EstadoActionContext = ActionContext<EstadoState, RootState>

export const actions: ActionTree<EstadoState, RootState> = {
  fetch: async ({ commit }: EstadoActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await EstadoService.fetch({ params });
      const { data: estados, ...rest } = data;
      commit('setEstados', { estados, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: EstadoActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EstadoService.list();
      commit('setEstadoList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: EstadoActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await EstadoService.show(id);
      commit('setEstado', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: EstadoActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EstadoService.destroy(id);
      vm.$snotify.success('Cuerpo Filial eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: EstadoActionContext, { sede, vm }: { sede: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EstadoService.store(sede);
      vm.$snotify.success('Cuerpo Filial creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: EstadoActionContext, { sede, vm }: { sede: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await EstadoService.update(sede);
      vm.$snotify.success('Cuerpo Filial actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
