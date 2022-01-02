/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { PacienteState } from '@/store/modules/paciente/types';

export const mutations: MutationTree<PacienteState> = {
  setPacientes(state, { pacientes, meta }: { pacientes: Paciente[], meta: Meta }) {
    state.pacientes = pacientes;
    state.meta = meta;
  },
  setPaciente(state, paciente: Paciente) {
    state.paciente = paciente;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
