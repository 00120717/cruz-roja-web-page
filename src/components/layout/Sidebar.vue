<template>
  <div class>
    <MobileSidebar :show="show" @emit-close-sidebar="closeSidebar" />
    <div
      class="hidden h-full border-r border-gray-200 md:flex md:flex-shrink-0"
    >
      <div class="flex flex-col w-64">
        <div
          class="flex flex-col flex-grow px-4 pt-3 pb-4 overflow-y-auto bg-white border-gray-200"
        >
          <div class="flex flex-col flex-grow">
            <nav class="flex-1 px-2 pt-12">
              <router-link
                to="/voluntario"
                exact-active-class="text-blue-500 "
                class="flex items-center px-2 pt-1 mb-6 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group text-dark-blue-700 hover:text-dark-blue-700 focus:outline-none"
              >
                <svg
                  class="w-5 h-5 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-dark-blue-500 group-focus:text-dark-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
                </svg>
                Voluntarios
              </router-link>
              <router-link
                to="/emergencia"
                exact-active-class="text-blue-500 "
                class="flex items-center px-2 pt-1 mb-6 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group text-dark-blue-700 hover:text-dark-blue-700 focus:outline-none"
              >
                <svg
                  class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-dark-blue-500 group-focus:text-dark-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                Emergencias
              </router-link>
              <router-link
                to="/emergenciaAsignada"
                exact-active-class="text-blue-500 "
                class="flex items-center px-2 pt-1 mb-6 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group text-dark-blue-700 hover:text-dark-blue-700 focus:outline-none"
              >
                <svg
                  class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-dark-blue-500 group-focus:text-dark-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
                E. Asignadas
              </router-link>
              <router-link
                to="/emergenciaRealizada"
                exact-active-class="text-blue-500 "
                class="flex items-center px-2 pt-1 mb-6 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group text-dark-blue-700 hover:text-dark-blue-700 focus:outline-none"
              >
                <svg
                  class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-dark-blue-500 group-focus:text-dark-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                E. Realizadas
              </router-link>
              <router-link
                to="/reporte"
                exact-active-class="text-blue-500 "
                class="flex items-center px-2 pt-1 mb-6 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group text-dark-blue-700 hover:text-dark-blue-700 focus:outline-none"
              >
                <svg
                  class="w-5 h-5 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-dark-blue-500 group-focus:text-dark-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
                </svg>
                Reportes
              </router-link>
              <div>
                <button
                  class="flex items-center w-full px-2 pt-1 mt-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md group hover:text-blue-500 focus:outline-none"
                  @click="activeMenu('administration')"
                >
                  <svg
                    class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Adm. Voluntarios
                  <svg
                    class="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 ease-in-out transform chevron-right group-hover:text-gray-600 group-focus:text-gray-600"
                    :class="[
                      menuItems.administration
                        ? 'text-gray-400 rotate-90'
                        : 'text-gray-300',
                    ]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-class="transform opacity-0 "
                  enter-to-class="transform opacity-100"
                  leave-active-class="transition duration-200 ease-linear"
                  leave-class="transform opacity-100 "
                  leave-to-class="transform opacity-0 "
                >
                  <div
                    v-show="menuItems.administration"
                    class="my-2 text-gray-700"
                  >
                    <router-link
                      to="/estado"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Estado
                    </router-link>
                    <router-link
                      to="/rol"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Rol
                    </router-link>
                    <router-link
                      to="/modalidad"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Modalidad
                    </router-link>
                    <router-link
                      to="/cuerpoFilial"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Cuerpo Filial
                    </router-link>
                    <router-link
                      to="/tipoVoluntario"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full h-8 pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Tipo Voluntario
                    </router-link>
                    <router-link
                      to="/tipoEmergencia"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full h-8 pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Tipo Emergencia
                    </router-link>
                  </div>
                </transition>
              </div>
              <div>
                <button
                  class="flex items-center w-full px-2 pt-1 mt-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md group hover:text-blue-500 focus:outline-none"
                  @click="activeMenu('administration')"
                >
                  <svg
                    class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Adm. Emergencias
                  <svg
                    class="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 ease-in-out transform chevron-right group-hover:text-gray-600 group-focus:text-gray-600"
                    :class="[
                      menuItems.administration
                        ? 'text-gray-400 rotate-90'
                        : 'text-gray-300',
                    ]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-class="transform opacity-0 "
                  enter-to-class="transform opacity-100"
                  leave-active-class="transition duration-200 ease-linear"
                  leave-class="transform opacity-100 "
                  leave-to-class="transform opacity-0 "
                >
                  <div
                    v-show="menuItems.administration"
                    class="my-2 text-gray-700"
                  >
                    <router-link
                      to="/paciente"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Pacientes
                    </router-link>
                    <router-link
                      to="/hospital"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Hospitales
                    </router-link>
                    <router-link
                      to="/vehiculo"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Vehiculos
                    </router-link>
                  </div>
                </transition>
              </div>
              <div>
                <button
                  class="flex items-center w-full px-2 pt-1 mt-1 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md group hover:text-blue-500 focus:outline-none"
                  @click="activeMenu('administration')"
                >
                  <svg
                    class="w-5 h-8 mr-3 transition duration-150 ease-in-out text-dark-blue-500 group-hover:text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Adm. Cruz Roja
                  <svg
                    class="w-5 h-5 ml-auto text-gray-500 transition-all duration-200 ease-in-out transform chevron-right group-hover:text-gray-600 group-focus:text-gray-600"
                    :class="[
                      menuItems.administration
                        ? 'text-gray-400 rotate-90'
                        : 'text-gray-300',
                    ]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition duration-150 ease-out"
                  enter-class="transform opacity-0 "
                  enter-to-class="transform opacity-100"
                  leave-active-class="transition duration-200 ease-linear"
                  leave-class="transform opacity-100 "
                  leave-to-class="transform opacity-0 "
                >
                  <div
                    v-show="menuItems.administration"
                    class="my-2 text-gray-700"
                  >
                    <router-link
                      to="/sede"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Sede
                    </router-link>
                    <router-link
                      to="/seccional"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Seccional
                    </router-link>
                    <router-link
                      to="/usuario"
                      exact-active-class="font-bold text-blue-600"
                      active-class="font-bold text-blue-600"
                      class="flex items-center w-full pt-1 mt-1 text-sm font-medium leading-5 transition-all duration-150 ease-in-out rounded-md group hover:text-blue-500 pl-11"
                    >
                      Usuarios
                    </router-link>
                  </div>
                </transition>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';
import MobileSidebar from '@/components/layout/MobileSidebar.vue';

interface Menu {
  [key: string]: boolean;
}

@Component({
  components: { MobileSidebar },
})

export default class Sidebar extends Vue {
  @Prop(Boolean) readonly show!: boolean
  menuItems: Menu = {
    administration: false,
  }

  activeItem = ''

  @Emit()
  closeSidebar() {
    return false;
  }

  activeMenu(item: any) {
    if (item !== this.activeItem) {
      this.menuItems = {
        pages: false,
        administration: false,
        users: false,
        products: false,
        settings: false,
        warehouse: false,
        customers: false,
        marketing: false,
      };
    }
    this.activeItem = item;
    switch (item) {
      case 'administration':
        this.menuItems.administration = !this.menuItems.administration;
        break;
      default:
        break;
    }
  }
}
</script>
