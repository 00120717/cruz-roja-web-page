/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { TipoSedeState } from '@/store/modules/tipoSede/types';
import TipoSedeService from '@/services/TipoSedeService';

type TipoSedeActionContext = ActionContext<TipoSedeState, RootState>

export const actions: ActionTree<TipoSedeState, RootState> = {
  fetch: async ({ commit }: TipoSedeActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await TipoSedeService.fetch({ params });
      const { data: tipoSedes, ...rest } = data;
      commit('setTiposSedes', { tipoSedes, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: TipoSedeActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoSedeService.list();
      commit('setTipoSedeList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: TipoSedeActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoSedeService.show(id);
      commit('setTipoSede', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: TipoSedeActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoSedeService.destroy(id);
      vm.$snotify.success('Tipo Sede eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: TipoSedeActionContext, { modality, vm }: { modality: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoSedeService.store(modality);
      vm.$snotify.success('Tipo Sede creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: TipoSedeActionContext, { modality, vm }: { modality: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoSedeService.update(modality);
      vm.$snotify.success('Tipo Sede actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
