/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { ModalidadState } from '@/store/modules/modalidad/types';

export const mutations: MutationTree<ModalidadState> = {
  setModalidades(state, { modalidades, meta }: { modalidades: Modalidad[], meta: Meta }) {
    state.modalidades = modalidades;
    state.meta = meta;
  },
  setModalidad(state, modalidad: Modalidad) {
    state.modalidad = modalidad;
  },
  setModalidadList(state, modalidadList: Modalidad[]) {
    state.modalidadList = modalidadList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
