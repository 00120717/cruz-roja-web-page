/* eslint import/no-cycle: "off" */
import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from '@/store/modules/auth';
import { usuario } from '@/store/modules/usuario';
import { rol } from '@/store/modules/rol';
import { sede } from '@/store/modules/sede';
import { permiso } from '@/store/modules/permiso';
import { voluntario } from '@/store/modules/voluntario';
import { modalidad } from '@/store/modules/modalidad';
import { tipoSede } from '@/store/modules/tipoSede';
import { cuerpoFilial } from '@/store/modules/cuerpoFilial';
import { estado } from '@/store/modules/estado';
import { tipoVoluntario } from '@/store/modules/tipoVoluntario';
import { tipoEmergencia } from '@/store/modules/tipoEmergencia';
import { departamentoXMunicipio } from '@/store/modules/departamentoXMunicipio';
import { vehiculo } from '@/store/modules/vehiculo';
import { hospital } from '@/store/modules/hospital';
import { emergencia } from './modules/emergencia';
import { seccional } from './modules/seccional';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    usuario,
    cuerpoFilial,
    estado,
    tipoVoluntario,
    rol,
    sede,
    permiso,
    voluntario,
    modalidad,
    tipoSede,
    departamentoXMunicipio,
    tipoEmergencia,
    vehiculo,
    hospital,
    emergencia,
    seccional,
  },
});
