<template>
  <main class="pb-40">
    <page-heading
      title="Tipo Voluntario"
      :show-return="false"
      :breadcrumbs="breadcrumbs"
    >
      <template slot="actions">
        <custom-button title="Nuevo Tipo de Voluntario" color="secondary" to="/tipoVoluntario/new">
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
        :is-loading="isTipoVoluntarioLoading"
        :filters="filters"
        :total-items="meta.total"
        @filter-change="onFiltersChange"
        @select:all="selectAllCurrent"
        @unselect:all="selectAllCurrent"
      >
        <template slot="items">
          <table-item
            v-for="(tipoVoluntario, index) in tiposVoluntarios"
            :key="index"
            :item="tipoVoluntario.id"
            :selected="selectedItems"
            :remove="false"
            page="tipoVoluntario"
            @update:selected="setItems"
          >
            <td
              class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
            >
              <div class="flex items-center">
                <div class="">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ tipoVoluntario.id }}
                  </div>
                </div>
              </div>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ tipoVoluntario.tipo }}
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

const TiposVoluntarios = namespace('tipoVoluntario');

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
export default class TipoVoluntarioPage extends Vue {
  selectedItems: Array<string | number> = []
  showDeleteModal = false
  showDeleteCompleted = false
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'TipoVoluntario' }]

  headers: Array<object> = [
    {
      name: 'ID',
      key: 'id',
    },
    {
      name: 'Tipo',
      key: 'tipo',
    },
  ]

  // eslint-disable-next-line @typescript-eslint/camelcase
  filters: Filters = { search: '', per_page: '10', page: 1 }
  selectedItem = 0
  @TiposVoluntarios.State('tiposVoluntarios') tiposVoluntarios!: TipoVoluntario[];
  @TiposVoluntarios.State('meta') meta!: Meta;
  @TiposVoluntarios.State('isLoading') isTipoVoluntarioLoading!: boolean;
  @TiposVoluntarios.Action('fetch') fetchTiposVoluntarios!: ({ filters, vm }: { filters: Filters; vm: any }) => AxiosResponse;

  async mounted() {
    await this.fetchTiposVoluntarios({ filters: this.filters, vm: this });
  }

  @Watch('filters', { deep: true })
  async handleFilterChange(value: Filters) {
    if (value) {
      await this.fetchTiposVoluntarios({ filters: this.filters, vm: this });
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
      this.tiposVoluntarios.forEach((item: any) => {
        this.selectedItems.push(item.id);
      });
    } else {
      this.selectedItems = [];
    }
  }
}
</script>
