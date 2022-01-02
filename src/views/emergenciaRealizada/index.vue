<template>
  <main class="pb-40">
    <page-heading
      title="Emergencias Realizadas"
      :show-return="false"
      :breadcrumbs="breadcrumbs"
    >
      <template slot="actions">
        <custom-button title="Nueva Emergencia Realizada" color="secondary" to="/emergenciaRealizada/new">
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
              <path d="M12 4v16m8-8H4" />
            </svg>
          </template>
        </custom-button>
      </template>
    </page-heading>
    <section>
      <table-list
        :headers="headers"
        :selected="selectedItems"
        :current-page="filters.page"
        :last-page="lastPage"
        :per-page="filters.per_page"
        :is-loading="isEmergenciaLoading"
        :filters="filters"
        :total-items="meta.total"
        @filter-change="onFiltersChange"
        @select:all="selectAllCurrent"
        @unselect:all="selectAllCurrent"
      >
        <template slot="items">
          <table-item
            v-for="(emergenciaRealizada, index) in emergenciaRealizadas"
            :key="index"
            :item="emergenciaRealizada.id"
            :selected="selectedItems"
            :remove="false"
            page="emergenciaRealizada"
            @update:selected="setItems"
          >
            <td
              class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
            >
              <div class="flex items-center">
                <div class="">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ emergenciaRealizada.identificadorFormulario }}
                  </div>
                </div>
              </div>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.ubicacionExacta }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.fechaRealizada }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.fechaHoraLlamada }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.telefono }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emisorEmergencia }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergencia.emergenciaNombre }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaSeccional && emergenciaRealizada.emergenciaSeccional ? emergenciaRealizada.emergenciaSeccional.length : '0' }}
            </td>
          </table-item>
        </template>
      </table-list>

    </section>
  </main>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { AxiosResponse } from 'axios';
import PageHeading from '@/components/layout/PageHeading.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import TableList from '@/components/ui/TableList.vue';
import ConfirmationModal from '@/components/general/ConfirmationModal.vue';
import TableItem from '@/components/ui/Table/TableItem.vue';
import ActiveIndicator from '@/components/ui/ActiveIndicator.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const EmergenciaRealizadaModel = namespace('emergenciaRealizada');

@Component({
  components: {
    PageHeading,
    CustomButton,
    TableList,
    ConfirmationModal,
    TableItem,
    ActiveIndicator,
  },
})
export default class EmergenciaPage extends Vue {
  selectedItems: Array<string | number> = []
  showDeleteModal = false
  showDeleteCompleted = false
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'Emergencia Realizada' }]

  headers: Array<object> = [
    {
      name: 'Formulario #',
      key: 'identificadorFormulario',
    },
    {
      name: 'Ubicacion Exacta',
      key: 'ubicacionExacta',
    },
    {
      name: 'Fecha Realizada',
      key: 'fechaRealizada',
    },
    {
      name: 'Hora llamada',
      key: 'fechaHoraLlamada',
    },
    {
      name: 'Telefono',
      key: 'telefono',
    },
    {
      name: 'Emisor Emergencia',
      key: 'emisorEmergencia',
    },
    {
      name: 'Emergencia',
      key: 'emergenciaNombre',
    },
    {
      name: 'Voluntarios Involucrados #',
      key: 'voluntarios',
    },
    {
      name: 'Vehiculos Involucrados #',
      key: 'vehiculos',
    },
    {
      name: 'Pacientes Involucrados #',
      key: 'vehiculos',
    },
    {
      name: 'Hospitales Involucrados #',
      key: 'hospitales',
    },
    {
      name: 'Seccionales Involucrados #',
      key: 'seccionales',
    },
  ]
  // 2020/02/18
  // eslint-disable-next-line @typescript-eslint/camelcase
  filters: Filters = { search: '', per_page: '10', page: 1 }
  selectedItem = 0
  @EmergenciaRealizadaModel.State('emergenciaRealizadas') emergenciaRealizadas!: EmergenciaRealizada[];
  @EmergenciaRealizadaModel.State('meta') meta!: Meta;
  @EmergenciaRealizadaModel.State('isLoading') isEmergenciaLoading!: boolean;
  @EmergenciaRealizadaModel.Action('fetch') fetchEmergencias!: ({ filters, vm }: { filters: Filters; vm: any }) => AxiosResponse;

  async mounted() {
    await this.fetchEmergencias({ filters: this.filters, vm: this });
  }

  @Watch('filters', { deep: true })
  async handleFilterChange(value: Filters) {
    if (value) {
      await this.fetchEmergencias({ filters: this.filters, vm: this });
    }
  }

  get lastPage() {
    return Math.ceil(+this.meta?.total / +this.meta?.per_page) || 1;
  }

  onFiltersChange(value: Filters) {
    this.filters = value;
  }

  setItems(value: Array<string | number>) {
    this.selectedItems = value;
  }

  selectAllCurrent(value: boolean) {
    if (value) {
      this.emergenciaRealizadas.forEach((item: any) => {
        this.selectedItems.push(item.id);
      });
    } else {
      this.selectedItems = [];
    }
  }
}
</script>
