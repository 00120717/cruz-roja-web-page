/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { DepartamentoXMunicipioState } from '@/store/modules/departamentoXMunicipio/types';

export const mutations: MutationTree<DepartamentoXMunicipioState> = {
  setDepartamentoXMunicipios(state, { departamentoXMunicipios, meta }: { departamentoXMunicipios: DepartamentoXMunicipio[], meta: Meta }) {
    state.departamentoXMunicipios = departamentoXMunicipios;
    state.meta = meta;
  },
  setDepartamentoXMunicipio(state, departamentoXMunicipio: DepartamentoXMunicipio) {
    state.departamentoXMunicipio = departamentoXMunicipio;
  },
  setDepartamentoXMunicipioList(state, departamentoXMunicipioList: DepartamentoXMunicipio[]) {
    state.departamentoXMunicipioList = departamentoXMunicipioList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
