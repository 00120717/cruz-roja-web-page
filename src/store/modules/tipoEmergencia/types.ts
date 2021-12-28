/* eslint-disable import/no-named-as-default, @typescript-eslint/camelcase, @typescript-eslint/member-delimiter-style */
export interface TipoEmergenciaState {
  tipoEmergencias: TipoEmergencia[],
  tipoEmergencia: TipoEmergencia,
  tipoEmergenciaList: TipoEmergencia[],
  meta: Meta,
  isLoading: boolean,
}
