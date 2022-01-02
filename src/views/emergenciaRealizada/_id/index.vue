<template>
  <main class="pb-40">
    <page-heading title="Detalle Emergencia" back-route="/emergenciaRealizada" :breadcrumbs="breadcrumbs">
      <template slot="actions">
      </template>
    </page-heading>
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
                     {{ emergenciaPacienteObject.paciente.persona.firstName }}
                  </td>
                  <td
                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                     >
                     {{ emergenciaPacienteObject.paciente.persona.lastName }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ emergenciaPacienteObject.horaSalida }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ emergenciaPacienteObject.horaRegreso }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ emergenciaPacienteObject.paciente.persona.genero == 'M'? 'Masculino' : 'Femenino' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-center text-gray-500 whitespace-no-wrap inline-flex justify-center items-center"
                  >
                    <active-indicator :status="Boolean(emergenciaPacienteObject.paciente.identificado)" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-center text-gray-500 whitespace-no-wrap inline-flex justify-center items-center"
                  >
                    <active-indicator :status="Boolean(emergenciaPacienteObject.paciente.estadoPersona)" />
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <span
                      v-for="(vehiculoAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ vehiculoAux.vehiculo.nombreVehiculo }}</span>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <span
                      v-for="(voluntarioAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ voluntarioAux.voluntario.nombreCompuesto }}</span>
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    <span
                      v-for="(hospitalAux, index) in emergenciaPacienteObject.vehiculoXEmergenciaPaciente"
                      :key="index"
                      class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                    >{{ hospitalAux.hospital.nombreHospital }}</span>
                  </td>
               </table-item>
            </template>
         </simple-table-list>
      </div>
    </section>
    <loading :active="isEmergenciaLoading" :is-full-page="false" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import PageHeading from '@/components/layout/PageHeading.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import TableList from '@/components/ui/TableList.vue';
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
    TableList,
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
      name: 'Estado Paciente',
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

  redirectBack() {
    this.$router.push('/emergenciaRealizada');
  }
}
</script>
