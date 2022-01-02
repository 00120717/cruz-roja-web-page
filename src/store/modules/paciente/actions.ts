import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { PacienteState } from '@/store/modules/paciente/types';
import PacienteService from '@/services/PacienteService';

type PacienteActionContext = ActionContext<PacienteState, RootState>

export const actions: ActionTree<PacienteState, RootState> = {
  fetch: async ({ commit }: PacienteActionContext, { filters, vm }: { filters: Filters; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const params = { ...filters };
      const { data } = await PacienteService.fetch({ params });
      const { data: pacientes, ...rest } = data;
      commit('setPacientes', { pacientes, meta: rest });
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  show: async ({ commit }: PacienteActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      const { data } = await PacienteService.showString(id);
      commit('setPaciente', data);
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  destroy: async ({ commit }: PacienteActionContext, { id, vm }: { id: string; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await PacienteService.destroyString(id);
      vm.$snotify.success('Paciente eliminado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  store: async ({ commit }: PacienteActionContext, { paciente, vm }: { paciente: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await PacienteService.store(paciente);
      vm.$snotify.success('Paciente creado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
  update: async ({ commit }: PacienteActionContext, { paciente, vm }: { paciente: any; vm: any }) => {
    try {
      commit('toggleLoading', true);
      await PacienteService.update(paciente);
      vm.$snotify.success('Paciente actualizado correctamente');
    } catch ({ response }) {
      vm.$snotify.error(response.data.message);
    } finally {
      commit('toggleLoading', false);
    }
  },
};

export default actions;
