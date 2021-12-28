import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { RolState } from '@/store/modules/rol/types';
import RolService from '@/services/RolService';

type RolActionContext = ActionContext<RolState, RootState>

export const actions: ActionTree<RolState, RootState> = {
  fetch: async ({ commit }: RolActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await RolService.fetch({ params });
      const { data: roles, ...rest } = data;
      commit('setRoles', { roles, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: RolActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await RolService.list();
      commit('setRolList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: RolActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await RolService.show(id);
      commit('setRol', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: RolActionContext, { id, vm }: { id: number; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await RolService.destroy(id);
      vm.$snotify.success('Rol eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: RolActionContext, { role, vm }: { role: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await RolService.store(role);
      vm.$snotify.success('Rol creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: RolActionContext, { role, vm }: { role: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await RolService.update(role);
      vm.$snotify.success('Rol actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
