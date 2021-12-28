/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { ModalidadState } from '@/store/modules/modalidad/types';
import ModalidadService from '@/services/ModalidadService';

type ModalidadActionContext = ActionContext<ModalidadState, RootState>

export const actions: ActionTree<ModalidadState, RootState> = {
  fetch: async ({ commit }: ModalidadActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await ModalidadService.fetch({ params });
      const { data: modalidades, ...rest } = data;
      commit('setModalidades', { modalidades, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: ModalidadActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await ModalidadService.list();
      commit('setModalidadList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: ModalidadActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await ModalidadService.show(id);
      commit('setModalidad', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: ModalidadActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await ModalidadService.destroy(id);
      vm.$snotify.success('Modalidad eliminada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: ModalidadActionContext, { modalidad, vm }: { modalidad: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await ModalidadService.store(modalidad);
      vm.$snotify.success('Modalidad creada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: ModalidadActionContext, { modalidad, vm }: { modalidad: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await ModalidadService.update(modalidad);
      vm.$snotify.success('Modalidad actualizada correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
