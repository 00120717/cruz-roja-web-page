/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { ActionContext, ActionTree } from 'vuex';
import { UsuarioState } from '@/store/modules/usuario/types';
import { RootState } from '@/store/types';
import UsuarioService from '@/services/UsuarioService';

type UsuarioActionContext = ActionContext<UsuarioState, RootState>

export const actions: ActionTree<UsuarioState, RootState> = {
  fetch: async ({ commit }: UsuarioActionContext, { filters, vm }: { filters: Filters, vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await UsuarioService.fetch({ params });
      const { data: usuarios, ...rest } = data;
      commit('setUsuarios', { usuarios, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: UsuarioActionContext, { id, vm }: { id: string, vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await UsuarioService.showString(id);
      commit('setUsuario', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: UsuarioActionContext, { id, vm }: { id: string, vm: any }) => {
    try {
      commit('toggleLoading', true);
      await UsuarioService.destroyString(id);
      vm.$snotify.success('Usuario eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: UsuarioActionContext, { usuario, vm }: { usuario: any, vm: any }) => {
    try {
      commit('toggleLoading', true);
      await UsuarioService.store(usuario);
      vm.$snotify.success('Usuario creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
      await Promise.reject(response);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: UsuarioActionContext, { usuario, vm }: { usuario: any, vm: any }) => {
    try {
      commit('toggleLoading', true);
      await UsuarioService.update(usuario);
      vm.$snotify.success('Usuario actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
