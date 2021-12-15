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
  ...mapRoutes({ onlyWhenLoggedOut: false, layout: 'default' }, [
    {
      path: '/',
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ '@/views/users/index.vue'),
    },
    {
      path: '/users/new',
      name: 'users-new',
      component: () => import(/* webpackChunkName: "users-new" */ '@/views/users/new.vue'),
    },
    {
      path: '/users/:id',
      name: 'users-id',
      component: () => import(/* webpackChunkName: "users-id" */'@/views/users/_id/index.vue'),
    },
    {
      path: '/users/:id/edit',
      name: 'users-id-edit',
      component: () => import(/* webpackChunkName: "users-id-edit" */'@/views/users/_id/edit.vue'),
    },
    {
      path: '/voluntarios',
      name: 'voluntarios',
      component: () => import(/* webpackChunkName: "students" */ '@/views/students/index.vue'),
    },
    {
      path: '/voluntarios/new',
      name: 'voluntarios-new',
      component: () => import(/* webpackChunkName: "students-new" */ '@/views/students/new.vue'),
    },
    {
      path: '/voluntarios/:id',
      name: 'voluntarios-id',
      component: () => import(/* webpackChunkName: "students-id" */ '@/views/students/_id/index.vue'),
    },
    {
      path: '/voluntarios/:id/edit',
      name: 'voluntarios-id-edit',
      component: () => import(/* webpackChunkName: "students-id-edit" */ '@/views/students/_id/edit.vue'),
    },
    {
      path: '/voluntarios/:id/notes',
      name: 'voluntarios-id-notes',
      component: () => import(/* webpackChunkName: "students-id-edit" */ '@/views/students/_id/notes.vue'),
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import(/* webpackChunkName: "roles" */ '@/views/roles/index.vue'),
    },
    {
      path: '/roles/new',
      name: 'roles-new',
      component: () => import(/* webpackChunkName: "roles-new" */ '@/views/roles/new.vue'),
    },
    {
      path: '/roles/:id',
      name: 'roles-id',
      component: () => import(/* webpackChunkName: "roles-id" */ '@/views/roles/_id/index.vue'),
    },
    {
      path: '/roles/:id/edit',
      name: 'roles-id-edit',
      component: () => import(/* webpackChunkName: "roles-id-edit" */ '@/views/roles/_id/edit.vue'),
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
      path: '/modality',
      name: 'modality',
      component: () => import(/* webpackChunkName: "modality" */ '@/views/modality/index.vue'),
    },
    {
      path: '/modality/new',
      name: 'modality-new',
      component: () => import(/* webpackChunkName: "modality-new" */ '@/views/modality/new.vue'),
    },
    {
      path: '/modality/:id',
      name: 'modality-id',
      component: () => import(/* webpackChunkName: "modality-id" */ '@/views/modality/_id/index.vue'),
    },
    {
      path: '/modality/:id/edit',
      name: 'modality-id-edit',
      component: () => import(/* webpackChunkName: "modality-id-edit" */ '@/views/modality/_id/edit.vue'),
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
      path: '/section',
      name: 'section',
      component: () => import(/* webpackChunkName: "section" */ '@/views/section/index.vue'),
    },
    {
      path: '/section/new',
      name: 'section-new',
      component: () => import(/* webpackChunkName: "section-new" */ '@/views/section/new.vue'),
    },
    {
      path: '/section/:id',
      name: 'section-id',
      component: () => import(/* webpackChunkName: "section-id" */ '@/views/section/_id/index.vue'),
    },
    {
      path: '/section/:id/edit',
      name: 'section-id-edit',
      component: () => import(/* webpackChunkName: "section-id-edit" */ '@/views/section/_id/edit.vue'),
    },
    {
      path: '/grade',
      name: 'grade',
      component: () => import(/* webpackChunkName: "grade" */ '@/views/grade/index.vue'),
    },
    {
      path: '/grade/new',
      name: 'grade-new',
      component: () => import(/* webpackChunkName: "grade-new" */ '@/views/grade/new.vue'),
    },
    {
      path: '/grade/:id',
      name: 'grade-id',
      component: () => import(/* webpackChunkName: "grade-id" */ '@/views/grade/_id/index.vue'),
    },
    {
      path: '/grade/:id/edit',
      name: 'grade-id-edit',
      component: () => import(/* webpackChunkName: "grade-id-edit" */ '@/views/grade/_id/edit.vue'),
    },
    {
      path: '/subject',
      name: 'subject',
      component: () => import(/* webpackChunkName: "subject" */ '@/views/subject/index.vue'),
    },
    {
      path: '/subject/new',
      name: 'subject-new',
      component: () => import(/* webpackChunkName: "subject-new" */ '@/views/subject/new.vue'),
    },
    {
      path: '/subject/:id',
      name: 'subject-id',
      component: () => import(/* webpackChunkName: "subject-id" */ '@/views/subject/_id/index.vue'),
    },
    {
      path: '/subject/:id/edit',
      name: 'subject-id-edit',
      component: () => import(/* webpackChunkName: "subject-id-edit" */ '@/views/subject/_id/edit.vue'),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
  ]),
  ...mapRoutes({ onlyWhenLoggedOut: true, layout: 'auth' }, [
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
    },
  ]),
];
