/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { TipoVoluntarioState } from '@/store/modules/tipoVoluntario/types';
import TipoVoluntarioService from '@/services/TipoVoluntarioService';

type TipoVoluntarioActionContext = ActionContext<TipoVoluntarioState, RootState>

export const actions: ActionTree<TipoVoluntarioState, RootState> = {
  fetch: async ({ commit }: TipoVoluntarioActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await TipoVoluntarioService.fetch({ params });
      const { data: tipoVoluntarios, ...rest } = data;
      commit('setTipoVoluntarios', { tipoVoluntarios, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: TipoVoluntarioActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoVoluntarioService.list();
      console.log(data);
      commit('setTipoVoluntarioList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: TipoVoluntarioActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await TipoVoluntarioService.show(id);
      commit('setTipoVoluntario', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: TipoVoluntarioActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoVoluntarioService.destroy(id);
      vm.$snotify.success('Tipo Voluntario eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: TipoVoluntarioActionContext, { tipoVoluntario, vm }: { tipoVoluntario: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoVoluntarioService.store(tipoVoluntario);
      vm.$snotify.success('Tipo Voluntario creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: TipoVoluntarioActionContext, { tipoVoluntario, vm }: { tipoVoluntario: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await TipoVoluntarioService.update(tipoVoluntario);
      vm.$snotify.success('Tipo Voluntario actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
