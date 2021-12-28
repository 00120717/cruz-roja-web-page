/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
export interface EmergenciaState {
  emergencias: Emergencia[],
  emergencia: Emergencia,
  emergenciaList: Emergencia[],
  meta: Meta,
  isLoading: boolean,
}
