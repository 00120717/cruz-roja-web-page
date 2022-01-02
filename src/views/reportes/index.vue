<template>
  <main class="pb-40">
    <page-heading
      title="Reportes"
      :show-return="false"
      :breadcrumbs="breadcrumbs"
    >
    </page-heading>
    <form-section>
      <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Reporte
            </h3>
            <p
                class="mt-1 text-sm leading-5 text-gray-500"
                >
                Emergencias por sede
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                <div class="col-span-6 sm:col-span-4">
                  <ValidationProvider
                      v-slot="{ errors }"
                      vid="sede"
                      name="sede"
                      tag="div"
                      rules="required"
                      >
                      <input-select
                        v-model="form.sedeId"
                        label="Sede"
                        placeholder="Seleccionar"
                        :options="sedeList"
                        name="sede"
                        display-name="nombre"
                        :error="errors[0]"
                        />
                  </ValidationProvider>
                </div>
            </div>
          </div>
      </div>
    </form-section>
      <div class="w-full">
         <div class="flex items-center justify-end">
            <custom-button type="submit" class="ml-2" title="Guardar" :loading="isVoluntarioLoading" @click="onSubmitEmergenciaSede" />
         </div>
      </div>
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
import FormSection from '@/components/ui/FormSection.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import InputGroup from '@/components/ui/InputGroup.vue';
import InputRadio from '@/components/ui/InputRadio.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const SedeModel = namespace('sede');

@Component({
  components: {
    PageHeading,
    CustomButton,
    FormSection,
    ToggleSelector,
    InputSelect,
    InputGroup,
    InputRadio,
  },
})
export default class ReportePage extends Vue {
  form = {
    sedeId: 0,
  };

  selectedItems: Array<string | number> = []
  showDeleteModal = false
  showDeleteCompleted = false
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'Reportes' }]

  // eslint-disable-next-line @typescript-eslint/camelcase
  filters: Filters = { search: '', per_page: '30', page: 1 }
  selectedItem = 0
  @SedeModel.State('sedeList') sedeList!: Sede[]
  @SedeModel.State('meta') meta!: Meta
  @SedeModel.State('isLoading') isSedeLoading!: boolean
  @SedeModel.Action('list') fetchSedeList!: (vm: any) => ActionMethod;

  async mounted() {
    await this.fetchSedeList(this);
  }

  async onSubmitEmergenciaSede() {
    try {
      this.$router.push(`/reportes/emergencia-sede/${this.form.sedeId}`);
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }
}
</script>
