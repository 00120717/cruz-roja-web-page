/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
import { MutationTree } from 'vuex';
import { HospitalState } from '@/store/modules/hospital/types';

export const mutations: MutationTree<HospitalState> = {
  setHospitales(state, { hospitales, meta }: { hospitales: Hospital[], meta: Meta }) {
    state.hospitales = hospitales;
    state.meta = meta;
  },
  setHospital(state, hospital: Hospital) {
    state.hospital = hospital;
  },
  setHospitalList(state, hospitalList: Hospital[]) {
    state.hospitalList = hospitalList;
  },
  toggleLoading(state, status: boolean) {
    state.isLoading = status;
  },
};

export default mutations;
