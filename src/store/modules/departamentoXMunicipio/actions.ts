/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { DepartamentoXMunicipioState } from '@/store/modules/departamentoXMunicipio/types';
import DepartamentoXMunicipioService from '@/services/DepartamentoXMunicipioService';

type DepartamentoXMunicipioActionContext = ActionContext<DepartamentoXMunicipioState, RootState>

export const actions: ActionTree<DepartamentoXMunicipioState, RootState> = {
  fetch: async ({ commit }: DepartamentoXMunicipioActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await DepartamentoXMunicipioService.fetch({ params });
      const { data: departamentoXMunicipios, ...rest } = data;
      commit('setDepartamentoXMunicipios', { departamentoXMunicipios, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: DepartamentoXMunicipioActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await DepartamentoXMunicipioService.list();
      commit('setDepartamentoXMunicipioList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: DepartamentoXMunicipioActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await DepartamentoXMunicipioService.show(id);
      commit('setDepartamentoXMunicipio', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: DepartamentoXMunicipioActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await DepartamentoXMunicipioService.destroy(id);
      vm.$snotify.success('Departamento y Municipio eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: DepartamentoXMunicipioActionContext, { modality, vm }: { modality: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await DepartamentoXMunicipioService.store(modality);
      vm.$snotify.success('Departamento y Municipio creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: DepartamentoXMunicipioActionContext, { modality, vm }: { modality: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await DepartamentoXMunicipioService.update(modality);
      vm.$snotify.success('Departamento y Municipio actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
