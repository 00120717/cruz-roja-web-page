import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { VoluntarioState } from '@/store/modules/voluntario/types';
import VoluntarioService from '@/services/VoluntarioService';

type VoluntarioActionContext = ActionContext<VoluntarioState, RootState>

export const actions: ActionTree<VoluntarioState, RootState> = {
  list: async ({ commit }: VoluntarioActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await VoluntarioService.list();
      commit('setVoluntarioList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  fetch: async ({ commit }: VoluntarioActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await VoluntarioService.fetch({ params });
      const { data: voluntarios, ...rest } = data;
      commit('setVoluntarios', { voluntarios, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: VoluntarioActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await VoluntarioService.showString(id);
      commit('setVoluntario', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: VoluntarioActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VoluntarioService.destroyString(id);
      vm.$snotify.success('Voluntario eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: VoluntarioActionContext, { voluntario, vm }: { voluntario: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VoluntarioService.store(voluntario);
      vm.$snotify.success('Voluntario creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: VoluntarioActionContext, { voluntario, vm }: { voluntario: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await VoluntarioService.update(voluntario);
      vm.$snotify.success('Voluntario actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
