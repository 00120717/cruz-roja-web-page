<template>
  <main class="pb-40">
    <page-heading
      title="Pacientes"
      :show-return="false"
      :breadcrumbs="breadcrumbs"
    >
      <template slot="actions">
      </template>
    </page-heading>
    <section>
      <table-list
        :headers="headers"
        :selected="selectedItems"
        :current-page="filters.page"
        :last-page="lastPage"
        :per-page="filters.per_page"
        :is-loading="isPacienteLoading"
        :filters="filters"
        :total-items="meta.total"
        @filter-change="onFiltersChange"
        @select:all="selectAllCurrent"
        @unselect:all="selectAllCurrent"
      >
        <template slot="items">
          <table-item
            v-for="(paciente, index) in pacientes"
            :key="index"
            :item="paciente.id"
            :selected="selectedItems"
            page="paciente"
            @delete="deleteItem"
          >
            <td
              class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
            >
              {{ paciente.id }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              <div class="flex items-center">
                <div class="">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ (`${paciente.persona.firstName} ${paciente.persona.lastName}`) }}
                  </div>
                </div>
              </div>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ paciente.persona.genero == 'M'? 'Masculino' : 'Femenino' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-center text-gray-500 whitespace-no-wrap inline-flex justify-center items-center"
            >
              <active-indicator :status="Boolean(paciente.identificado)" />
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-center text-gray-500 whitespace-no-wrap inline-flex justify-center items-center"
            >
              <active-indicator :status="Boolean(paciente.persona.estadoPersona)" />
            </td>
          </table-item>
        </template>
      </table-list>
    </section>
    <delete-item
      :show="showDeleteModal"
      title="paciente"
      @update:show="showDeleteModal = false"
      @action="deleteComplete"
    />
    <confirmation-modal
      :show="showDeleteCompleted"
      title="Paciente eliminado"
      @update:show="showDeleteCompleted = false"
    />
  </main>
</template>

<script lang="ts">
import {
  Vue, Component, Watch,
} from 'vue-property-decorator';
import { ActionMethod } from 'vuex';
import { namespace } from 'vuex-class';
import PageHeading from '@/components/layout/PageHeading.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import TableList from '@/components/ui/TableList.vue';
import DeleteItem from '@/components/general/DeleteItem.vue';
import ConfirmationModal from '@/components/general/ConfirmationModal.vue';
import TableItem from '@/components/ui/Table/TableItem.vue';
import ActiveIndicator from '@/components/ui/ActiveIndicator.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const PacienteModel = namespace('paciente');

@Component({
  components: {
    PageHeading,
    CustomButton,
    TableList,
    DeleteItem,
    ConfirmationModal,
    TableItem,
    ActiveIndicator,
  },
})
export default class PacientePage extends Vue {
  selectedItems: Array<string | number> = []
  showDeleteModal = false
  showDeleteCompleted = false
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'Pacientes' }]

  headers: Array<object> = [
    {
      name: 'ID',
      key: 'id',
    },
    {
      name: 'Nombre Completo',
      key: 'name',
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
  ]

  // eslint-disable-next-line @typescript-eslint/camelcase
  filters: Filters = { search: '', per_page: '30', page: 1 }
  selectedItem = 0
  @PacienteModel.State('pacientes') pacientes!: Paciente[]
  @PacienteModel.State('meta') meta!: Meta
  @PacienteModel.State('isLoading') isPacienteLoading!: boolean
  @PacienteModel.Action('fetch') fetchPacientes!: ({ filters, vm }: { filters: Filters; vm: any }) => ActionMethod
  @PacienteModel.Action('destroy') deletePaciente!: ({ id, vm }: { id: number; vm: any }) => ActionMethod

  async mounted() {
    await this.fetchPacientes({ filters: this.filters, vm: this });
  }

  @Watch('filters', { deep: true })
  async handleFilterChange(value: Filters) {
    if (value) {
      await this.fetchPacientes({ filters: this.filters, vm: this });
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
      this.pacientes.forEach((item: any) => {
        this.selectedItems.push(item.id);
      });
    } else {
      this.selectedItems = [];
    }
  }

  deleteItem(id: number) {
    this.showDeleteModal = true;
    this.selectedItem = id;
  }

  async deleteComplete() {
    if (this.selectedItem !== 0) {
      await this.deletePaciente({ id: this.selectedItem, vm: this });
      await this.fetchPacientes({ filters: this.filters, vm: this });

      this.showDeleteCompleted = true;
    }
  }
}
</script>
