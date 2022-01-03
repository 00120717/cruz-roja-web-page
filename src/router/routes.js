import { mapRoutes } from '@/router/utils';

export default [
  /*
                        |--------------------------------------------------------------------------
                        | Public Routes
                        |--------------------------------------------------------------------------
                        |
                        | Here are registered routes for public access. These routes does not require
                        | authentication.
                        |
                        */
  ...mapRoutes({ onlyWhenLoggedOut: false, layout: 'default' }, [{
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '@/views/usuario/index.vue'),
  },
  {
    path: '/usuario/new',
    name: 'usuario-new',
    component: () => import(/* webpackChunkName: "usuario-new" */ '@/views/usuario/new.vue'),
  },
  {
    path: '/usuario/:id',
    name: 'usuario-id',
    component: () => import(/* webpackChunkName: "usuario-id" */ '@/views/usuario/_id/index.vue'),
  },
  {
    path: '/usuario/:id/edit',
    name: 'usuario-id-edit',
    component: () => import(/* webpackChunkName: "usuario-id-edit" */ '@/views/usuario/_id/edit.vue'),
  },
  {
    path: '/voluntario',
    name: 'voluntario',
    component: () => import(/* webpackChunkName: "voluntario" */ '@/views/voluntario/index.vue'),
  },
  {
    path: '/voluntario/new',
    name: 'voluntario-new',
    component: () => import(/* webpackChunkName: "voluntario-new" */ '@/views/voluntario/new.vue'),
  },
  {
    path: '/voluntario/:id',
    name: 'voluntario-id',
    component: () => import(/* webpackChunkName: "voluntario-id" */ '@/views/voluntario/_id/index.vue'),
  },
  {
    path: '/voluntario/:id/edit',
    name: 'voluntario-id-edit',
    component: () => import(/* webpackChunkName: "voluntario-id-edit" */ '@/views/voluntario/_id/edit.vue'),
  },
  {
    path: '/rol',
    name: 'rol',
    component: () => import(/* webpackChunkName: "rol" */ '@/views/rol/index.vue'),
  },
  {
    path: '/rol/new',
    name: 'rol-new',
    component: () => import(/* webpackChunkName: "rol-new" */ '@/views/rol/new.vue'),
  },
  {
    path: '/rol/:id',
    name: 'rol-id',
    component: () => import(/* webpackChunkName: "roles-id" */ '@/views/rol/_id/index.vue'),
  },
  {
    path: '/rol/:id/edit',
    name: 'rol-id-edit',
    component: () => import(/* webpackChunkName: "roles-id-edit" */ '@/views/rol/_id/edit.vue'),
  },
  {
    path: '/estado',
    name: 'estado',
    component: () => import(/* webpackChunkName: "sede" */ '@/views/estado/index.vue'),
  },
  {
    path: '/estado/new',
    name: 'estado-new',
    component: () => import(/* webpackChunkName: "sede-new" */ '@/views/estado/new.vue'),
  },
  {
    path: '/estado/:id',
    name: 'estado-id',
    component: () => import(/* webpackChunkName: "sede-id" */ '@/views/estado/_id/index.vue'),
  },
  {
    path: '/sede',
    name: 'sede',
    component: () => import(/* webpackChunkName: "sede" */ '@/views/sede/index.vue'),
  },
  {
    path: '/sede/new',
    name: 'sede-new',
    component: () => import(/* webpackChunkName: "sede-new" */ '@/views/sede/new.vue'),
  },
  {
    path: '/sede/:id',
    name: 'sede-id',
    component: () => import(/* webpackChunkName: "sede-id" */ '@/views/sede/_id/index.vue'),
  },
  {
    path: '/sede/:id/edit',
    name: 'sede-id-edit',
    component: () => import(/* webpackChunkName: "sede-id-edit" */ '@/views/sede/_id/edit.vue'),
  },
  {
    path: '/emergencia',
    name: 'emergencia',
    component: () => import(/* webpackChunkName: "emergencia" */ '@/views/emergencia/index.vue'),
  },
  {
    path: '/emergencia/new',
    name: 'emergencia-new',
    component: () => import(/* webpackChunkName: "emergencia-new" */ '@/views/emergencia/new.vue'),
  },
  {
    path: '/emergencia/:id',
    name: 'emergencia-id',
    component: () => import(/* webpackChunkName: "emergencia-id" */ '@/views/emergencia/_id/index.vue'),
  },
  {
    path: '/emergencia/:id/edit',
    name: 'emergencia-id-edit',
    component: () => import(/* webpackChunkName: "emergencia-id-edit" */ '@/views/emergencia/_id/edit.vue'),
  },
  {
    path: '/emergenciaAsignada',
    name: 'emergenciaAsignada',
    component: () => import(/* webpackChunkName: "emergenciaAsignada" */ '@/views/emergenciaAsignada/index.vue'),
  },
  {
    path: '/emergenciaAsignada/new',
    name: 'emergenciaAsignada-new',
    component: () => import(/* webpackChunkName: "emergenciaAsignada-new" */ '@/views/emergenciaAsignada/new.vue'),
  },
  {
    path: '/emergenciaAsignada/:id',
    name: 'emergenciaAsignada-id',
    component: () => import(/* webpackChunkName: "emergenciaAsignada-id" */ '@/views/emergenciaAsignada/_id/index.vue'),
  },
  {
    path: '/emergenciaRealizada',
    name: 'emergenciaRealizada',
    component: () => import(/* webpackChunkName: "emergenciaRealizada" */ '@/views/emergenciaRealizada/index.vue'),
  },
  {
    path: '/emergenciaRealizada/new',
    name: 'emergenciaRealizada-new',
    component: () => import(/* webpackChunkName: "emergenciaRealizada-new" */ '@/views/emergenciaRealizada/new.vue'),
  },
  {
    path: '/emergenciaRealizada/:id',
    name: 'emergenciaRealizada-id',
    component: () => import(/* webpackChunkName: "emergenciaRealizada-id" */ '@/views/emergenciaRealizada/_id/index.vue'),
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import(/* webpackChunkName: "paciente" */ '@/views/paciente/index.vue'),
  },
  {
    path: '/paciente/:id',
    name: 'paciente-id',
    component: () => import(/* webpackChunkName: "paciente-id" */ '@/views/paciente/_id/index.vue'),
  },
  {
    path: '/paciente/:id/edit',
    name: 'paciente-id-edit',
    component: () => import(/* webpackChunkName: "paciente-id-edit" */ '@/views/paciente/_id/edit.vue'),
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: () => import(/* webpackChunkName: "hospital" */ '@/views/hospital/index.vue'),
  },
  {
    path: '/hospital/new',
    name: 'hospital-new',
    component: () => import(/* webpackChunkName: "hospital-new" */ '@/views/hospital/new.vue'),
  },
  {
    path: '/hospital/:id',
    name: 'hospital-id',
    component: () => import(/* webpackChunkName: "hospital-id" */ '@/views/hospital/_id/index.vue'),
  },
  {
    path: '/hospital/:id/edit',
    name: 'hospital-id-edit',
    component: () => import(/* webpackChunkName: "hospital-id-edit" */ '@/views/hospital/_id/edit.vue'),
  },
  {
    path: '/vehiculo',
    name: 'vehiculo',
    component: () => import(/* webpackChunkName: "vehiculo" */ '@/views/vehiculo/index.vue'),
  },
  {
    path: '/vehiculo/new',
    name: 'vehiculo-new',
    component: () => import(/* webpackChunkName: "vehiculo-new" */ '@/views/vehiculo/new.vue'),
  },
  {
    path: '/vehiculo/:id',
    name: 'vehiculo-id',
    component: () => import(/* webpackChunkName: "vehiculo-id" */ '@/views/vehiculo/_id/index.vue'),
  },
  {
    path: '/vehiculo/:id/edit',
    name: 'vehiculo-id-edit',
    component: () => import(/* webpackChunkName: "vehiculo-id-edit" */ '@/views/vehiculo/_id/edit.vue'),
  },
  {
    path: '/tipoEmergencia',
    name: 'tipoEmergencia',
    component: () => import(/* webpackChunkName: "tipoEmergencia" */ '@/views/tipoEmergencia/index.vue'),
  },
  {
    path: '/tipoEmergencia/new',
    name: 'tipoEmergencia-new',
    component: () => import(/* webpackChunkName: "tipoEmergencia-new" */ '@/views/tipoEmergencia/new.vue'),
  },
  {
    path: '/tipoEmergencia/:id',
    name: 'tipoEmergencia-id',
    component: () => import(/* webpackChunkName: "tipoEmergencia-id" */ '@/views/tipoEmergencia/_id/index.vue'),
  },
  {
    path: '/tipoEmergencia/:id/edit',
    name: 'tipoEmergencia-id-edit',
    component: () => import(/* webpackChunkName: "tipoEmergencia-id-edit" */ '@/views/tipoEmergencia/_id/edit.vue'),
  },
  {
    path: '/modalidad',
    name: 'modalidad',
    component: () => import(/* webpackChunkName: "modalidad" */ '@/views/modalidad/index.vue'),
  },
  {
    path: '/modalidad/new',
    name: 'modalidad-new',
    component: () => import(/* webpackChunkName: "modalidad-new" */ '@/views/modalidad/new.vue'),
  },
  {
    path: '/modalidad/:id',
    name: 'modalidad-id',
    component: () => import(/* webpackChunkName: "modalidad-id" */ '@/views/modalidad/_id/index.vue'),
  },
  {
    path: '/modalidad/:id/edit',
    name: 'modalidad-id-edit',
    component: () => import(/* webpackChunkName: "modalidad-id-edit" */ '@/views/modalidad/_id/edit.vue'),
  },
  {
    path: '/cuerpoFilial',
    name: 'cuerpoFilial',
    component: () => import(/* webpackChunkName: "cuerpoFilial" */ '@/views/cuerpoFilial/index.vue'),
  },
  {
    path: '/cuerpoFilial/new',
    name: 'cuerpoFilial-new',
    component: () => import(/* webpackChunkName: "cuerpoFilial-new" */ '@/views/cuerpoFilial/new.vue'),
  },
  {
    path: '/cuerpoFilial/:id',
    name: 'cuerpoFilial-id',
    component: () => import(/* webpackChunkName: "cuerpoFilial-id" */ '@/views/cuerpoFilial/_id/index.vue'),
  },
  {
    path: '/cuerpoFilial/:id/edit',
    name: 'cuerpoFilial-id-edit',
    component: () => import(/* webpackChunkName: "cuerpoFilial-id-edit" */ '@/views/cuerpoFilial/_id/edit.vue'),
  },
  {
    path: '/tipoVoluntario',
    name: 'tipoVoluntario',
    component: () => import(/* webpackChunkName: "cuerpoFilial" */ '@/views/tipoVoluntario/index.vue'),
  },
  {
    path: '/tipoVoluntario/new',
    name: 'tipoVoluntario-new',
    component: () => import(/* webpackChunkName: "cuerpoFilial-new" */ '@/views/tipoVoluntario/new.vue'),
  },
  {
    path: '/tipoVoluntario/:id',
    name: 'tipoVoluntario-id',
    component: () => import(/* webpackChunkName: "cuerpoFilial-id" */ '@/views/tipoVoluntario/_id/index.vue'),
  },
  {
    path: '/tipoVoluntario/:id/edit',
    name: 'tipoVoluntario-id-edit',
    component: () => import(/* webpackChunkName: "cuerpoFilial-id-edit" */ '@/views/tipoVoluntario/_id/edit.vue'),
  },
  {
    path: '/seccional',
    name: 'seccional',
    component: () => import(/* webpackChunkName: "seccional" */ '@/views/seccional/index.vue'),
  },
  {
    path: '/seccional/new',
    name: 'seccional-new',
    component: () => import(/* webpackChunkName: "seccional-new" */ '@/views/seccional/new.vue'),
  },
  {
    path: '/seccional/:id',
    name: 'seccional-id',
    component: () => import(/* webpackChunkName: "seccional-id" */ '@/views/seccional/_id/index.vue'),
  },
  {
    path: '/seccional/:id/edit',
    name: 'seccional-id-edit',
    component: () => import(/* webpackChunkName: "seccional-id-edit" */ '@/views/seccional/_id/edit.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/reporte/',
    name: 'reporte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reporte" */ '@/views/reportes/index.vue'),
  },
  {
    path: '/reporte-emergencia-ubicacion-fecha/:id/:fechaInicio/:fechaFin',
    name: 'reporte-emergencia-ubicacion-fecha-params',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reporte-emergencia-ubicacion-fecha-params" */ '@/views/reportes/_id/reporteEmergenciaUbicacionFecha.vue'),
  },
  {
    path: '/reporte-emergencia-tipo-fecha/:id/:fechaInicio/:fechaFin',
    name: 'reporte-emergencia-tipo-fecha-params',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reporte-emergencia-tipo-fecha-params" */ '@/views/reportes/_id/reporteEmergenciaTipoFecha.vue'),
  },
  {
    path: '/reporte-voluntario-cuerpo-filial',
    name: 'reporte-voluntario-cuerpo-filial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reporte-voluntario-cuerpo-filial" */ '@/views/reportes/_id/reporteVoluntarioCuerpoFilial.vue'),
  },
  {
    path: '/reporte-voluntario-sede/',
    name: 'reporte-voluntario-sede',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reporte-voluntario-sede" */ '@/views/reportes/_id/reporteVoluntarioSede.vue'),
  },
  ]),
  ...mapRoutes({ onlyWhenLoggedOut: true, layout: 'auth' }, [{
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
  }]),
];
