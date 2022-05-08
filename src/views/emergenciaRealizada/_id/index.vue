<template>
  <main class="pb-40">
    <page-heading title="Detalle Emergencia" back-route="/emergenciaRealizada" :breadcrumbs="breadcrumbs">
      <template slot="actions">
        <custom-button
          title="Descargar"
          color="secondary"
          size="small"
          @click="downloadWithCSS2"
          >
          <template #icon>
            <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
            </svg>
          </template>
        </custom-button>
      </template>
    </page-heading>
    <div ref="contentPdf" id="contentPdf">
    <section v-if="emergenciaRealizada">
      <div class="overflow-hidden bg-white border border-gray-100 shadow sm:rounded-lg">
        <div class="px-4 py-5 border-b border-gray-100 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Emergencia Realizada #{{ emergenciaRealizada.id }}
          </h3>
          <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
            Información general de la Emergencia Realizada {{ emergenciaRealizada.identificadorFormulario }}.
          </p>
        </div>
        <div>
          <dl>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Ubicacion Exacta
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ emergenciaRealizada.ubicacionExacta }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Ubicacion de Referencia
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ emergenciaRealizada.ubicacionReferencia }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Fecha Realizada
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ emergenciaRealizada.fechaRealizada }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Hora Llamada
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergenciaRealizada.fechaHoraLlamada }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Telefono
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergenciaRealizada.telefono }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Emisor de la Emergencia Realizada
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergenciaRealizada.emisorEmergencia }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Nombre de la Emergencia
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergenciaRealizada.emergencia.emergenciaNombre }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Seccionales Involucradas
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
                  <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                    <div v-if="emergenciaRealizada.emergenciaSeccional && emergenciaRealizada.emergenciaSeccional.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                      <span
                        v-for="(seccionalAux, index) in emergenciaRealizada.emergenciaSeccional"
                        :key="index"
                        class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                      >{{ seccionalAux.seccional.nombre }}</span>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Voluntarios Involucrados
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
                  <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                    <div v-if="emergenciaRealizada.voluntarios && emergenciaRealizada.voluntarios.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                      <span
                        v-for="(voluntario, index) in emergenciaRealizada.voluntarios"
                        :key="index"
                        class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                      >{{ (`${voluntario.persona.firstName} ${voluntario.persona.lastName}`) }}</span>
                    </div>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <section>
    <div class="overflow-hidden bg-white border border-gray-100 shadow sm:rounded-lg mt-4">
    <div class="px-4 py-5 border-b border-gray-100 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Pacientes Atendidos
      </h3>
      <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
        Información general de los pacientes atendidos
      </p>
    </div>
    <simple-table-list
            :headers="headers"
            >
            <template slot="items">
               <table-item
                  v-for="(emergenciaPacienteObject, index) in emergenciaRealizada.emergenciaPaciente"
                  :key="index"
                  :item="emergenciaPacienteObject.id"
                  :selected="selectedItems"
                  :show="false"
                  :edit="false"
                  :remove="false"
                  >
                  <td
                     class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
                     >
                     <div class="flex items-center">
                        <div class="">
                           <div class="text-sm font-medium leading-5 text-gray-900">
                              {{ emergenciaPacienteObject.id }}
                           </div>
                        </div>
                     </div>
                  </td>
                  <td
                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                     >
                     {{ emergenciaPacienteObject.paciente ? emergenciaPacienteObject.paciente.persona.firstName : '' }}
                  </td>
                  <td
                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                     >
                     {{ emergenciaPacienteObject.paciente ? emergenciaPacienteObject.paciente.persona.lastName : '' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <div
                      v-for="(vehiculoAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ formattedHour(vehiculoAux.horaSalida) }}</div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <div
                      v-for="(vehiculoAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ formattedHour(vehiculoAux.horaRegreso) }}</div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ emergenciaPacienteObject.paciente ? emergenciaPacienteObject.paciente.persona.genero == 'M'? 'Masculino' : 'Femenino' : '' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <active-indicator :status="Boolean( emergenciaPacienteObject.paciente ? emergenciaPacienteObject.paciente.identificado : false)" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <active-indicator :status="Boolean( emergenciaPacienteObject.paciente ? false: true)" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <div
                      v-for="(vehiculoAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ vehiculoAux.vehiculo.nombreVehiculo }}</div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <div
                      v-for="(voluntarioAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ voluntarioAux.voluntario.persona.firstName }}</div>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <div
                      v-for="(hospitalAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ hospitalAux.hospital.nombreHospital }}</div>
                  </td>
               </table-item>
            </template>
         </simple-table-list></div>
    </section>
    </div>
    <loading :active="isEmergenciaLoading" :is-full-page="false" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import jspdf from 'jspdf';
import PageHeading from '@/components/layout/PageHeading.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import SimpleTableList from '@/components/ui/SimpleTableList.vue';
import TableItem from '@/components/ui/Table/TableItem.vue';
import ActiveIndicator from '@/components/ui/ActiveIndicator.vue';
import Loading from '@/components/ui/Loading.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const EmergenciaRealizadaModel = namespace('emergenciaRealizada');

@Component({
  components: {
    PageHeading,
    CustomButton,
    ActiveIndicator,
    SimpleTableList,
    TableItem,
    Loading,
  },
})
export default class ShowEmergenciaRealizadaPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Emergencia Realizada', route: '/emergenciaRealizada' },
    { name: 'Detalle' },
  ]

  headers: Array<object> = [
    {
      name: 'ID',
      key: 'id',
    },
    {
      name: 'Nombres',
      key: 'firstName',
    },
    {
      name: 'Apellidos',
      key: 'lastName',
    },
    {
      name: 'Hora Salida',
      key: 'horaSalida',
    },
    {
      name: 'Hora Regreso',
      key: 'horaRegreso',
    },
    {
      name: 'Genero',
      key: 'genero',
    },
    {
      name: 'Identificado',
      key: 'identificado',
    },
    {
      name: 'Vehiculo Vacio',
      key: 'estadoPersona',
    },
    {
      name: 'Vehiculo',
      key: 'vehiculo',
    },
    {
      name: 'Voluntario',
      key: 'voluntario',
    },
    {
      name: 'Hospital',
      key: 'hospital',
    },
  ]

  @EmergenciaRealizadaModel.State('isLoading') isEmergenciaLoading!: boolean;
  @EmergenciaRealizadaModel.State('emergenciaRealizada') emergenciaRealizada!: Emergencia;
  @EmergenciaRealizadaModel.Action('show') fetchEmergencia!: ({ id, vm }: { id: string; vm: any }) => ActionMethod

  async mounted() {
    const { id } = this.$route.params;
    await this.fetchEmergencia({ id: String(id), vm: this });
    if (!this.emergenciaRealizada.id) {
      this.redirectBack();
    }
  }

  formattedHour(date: string) {
    if (date) {
      const newDate = new Date(date);
      return `${newDate.toISOString().substring(11, 16)}`;
    }
  }

  redirectBack() {
    this.$router.push('/emergenciaRealizada');
  }

  downloadWithCSS2() {
    // eslint-disable-next-line new-cap
    const pdf = new jspdf('l', 'px', 'a2');
    const source = document.getElementById('contentPdf');

    const margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522,
    };

    const specialElementHandlers = {
      // eslint-disable-next-line func-names
      '#bypassme': function (element, renderer) {
        return true;
      },
    };

    const nombre = `${this.emergenciaRealizada.id}.pdf`;
    pdf.fromHTML(
      source,
      margins.left,
      margins.top,
      {
        width: margins.width,
        elementHandlers: specialElementHandlers,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (dispose) => {
        pdf.save(nombre);
      },
      margins,
    );
  }
}
</script>
