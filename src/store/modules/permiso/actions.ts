import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { PermisoState } from '@/store/modules/permiso/types';
import PermisoService from '@/services/PermisoService';

type PermisoActionContext = ActionContext<PermisoState, RootState>

export const actions: ActionTree<PermisoState, RootState> = {
  fetch: async ({ commit }: PermisoActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await PermisoService.fetch({ params });
      const { data: permisos, ...rest } = data;
      commit('setPermisos', { permisos, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  list: async ({ commit }: PermisoActionContext, vm: any) => {
    try {
      commit('toggleLoading', true);
      const { data } = await PermisoService.list();
      commit('setPermisoList', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
