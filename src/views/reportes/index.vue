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
                Emergencias por Ubicacion o por Tipo de Emergencia
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="col-span-6 sm:col-span-4">
                    <input-select
                      v-model="form.tipoEmergenciaId"
                      label="Tipo Emergencia"
                      placeholder="Seleccionar"
                      :options="tipoEmergenciaList"
                      name="tipoEmergencia"
                      display-name="tipoEmergencia"
                      />
              </div>
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                <div class="col-span-6 sm:col-span-4">
                      <input-select
                        v-model="form.departamentoXmunicipioId"
                        label="Ubicacion Departamento y Municipio"
                        placeholder="Seleccionar"
                        :options="departamentoXMunicipioList"
                        name="departamentoXMunicipio"
                        display-name="nombreCompuesto"
                        />
                </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <ValidationProvider
                  v-slot="{ errors }"
                  vid="fechaInicio"
                  name="fechaInicio"
                  tag="div"
                  rules="min:10"
                  >
                  <input-group
                    id="fechaInicio"
                    v-model="form.fechaInicio"
                    label="Fecha Inicio"
                    name="fechaInicio"
                    :error="errors[0]"
                    />
              </ValidationProvider>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <ValidationProvider
                  v-slot="{ errors }"
                  vid="fechaFin"
                  name="fechaFin"
                  tag="div"
                  rules="min:10"
                  >
                  <input-group
                    id="fechaFin"
                    v-model="form.fechaFin"
                    label="Fecha Fin"
                    name="fechaFin"
                    :error="errors[0]"
                    />
              </ValidationProvider>
            </div>
          </div>
      </div>
    </form-section>
      <div class="w-full mb-4">
         <div class="flex items-center justify-end">
            <custom-button type="button" class="ml-2" title="Ir" :loading="isLoading" @click="onSubmitEmergenciaUbicacion" />
         </div>
      </div>
      <form-section>
      <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Reporte
            </h3>
            <p
                class="mt-1 text-sm leading-5 text-gray-500"
                >
                Voluntarios listado alfabetico agrupado por Sede
            </p>
          </div>
      </div>
    </form-section>
      <div class="w-full mb-4">
         <div class="flex items-center justify-end">
            <custom-button type="button" class="ml-2" title="Ir" :loading="isLoading" @click="onSubmitVoluntariosSede" />
         </div>
      </div>
      <form-section>
      <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Reporte
            </h3>
            <p
                class="mt-1 text-sm leading-5 text-gray-500"
                >
                Voluntarios listado alfabetico agrupado por Cuerpo Filial
            </p>
          </div>
      </div>
    </form-section>
      <div class="w-full">
         <div class="flex items-center justify-end">
            <custom-button type="button" class="ml-2" title="Ir" :loading="isLoading" @click="onSubmitVoluntariosCuerpoFilial" />
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

const DepartamentoXMunicipioModal = namespace('departamentoXMunicipio');
const TipoEmergenciaModel = namespace('tipoEmergencia');

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
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'Reportes' }]

  form = {
    departamentoXmunicipioId: 0,
    tipoEmergenciaId: 0,
    fechaInicio: '',
    fechaFin: '',
    lista: '',
  };

  selectedItems: Array<string | number> = []
  showDeleteModal = false
  showDeleteCompleted = false
  breadcrumbs: Breadcrumb[] = [{ name: 'Administración' }, { name: 'Reportes' }]

  // eslint-disable-next-line @typescript-eslint/camelcase
  filters: Filters = { search: '', per_page: '30', page: 1 }
  selectedItem = 0
  @DepartamentoXMunicipioModal.State('departamentoXMunicipioList') departamentoXMunicipioList!: DepartamentoXMunicipio[]
  @DepartamentoXMunicipioModal.State('meta') meta!: Meta
  @DepartamentoXMunicipioModal.State('isLoading') isLoading!: boolean
  @DepartamentoXMunicipioModal.Action('list') fetchdepartamentoXMunicipioList!: (vm: any) => ActionMethod;
  @TipoEmergenciaModel.State('tipoEmergenciaList') tipoEmergenciaList!: TipoEmergencia[];
  @TipoEmergenciaModel.Action('list') fetchTipoEmergenciaList!: (vm: any) => ActionMethod;

  async mounted() {
    await this.fetchdepartamentoXMunicipioList(this);
    await this.fetchTipoEmergenciaList(this);
    console.log(this.departamentoXMunicipioList);
    console.log(this.tipoEmergenciaList);
  }

  async onSubmitEmergenciaUbicacion() {
    try {
      const splittedInicio = this.form.fechaInicio.split('/');
      const stringNewInicio = `${splittedInicio[0]}%2F${splittedInicio[1]}%2F${splittedInicio[2]}`;
      const splittedFin = this.form.fechaFin.split('/');
      const stringNewFin = `${splittedFin[0]}%2F${splittedFin[1]}%2F${splittedFin[2]}`;
      if (this.form.lista === 'ubicacion') {
        this.$router.push(`/reporte-emergencia-ubicacion-fecha/${this.form.departamentoXmunicipioId}/${stringNewInicio}/${stringNewFin}`);
      } else {
        this.$router.push(`/reporte-emergencia-tipo-fecha/${this.form.tipoEmergenciaId}/${stringNewInicio}/${stringNewFin}`);
      }

    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }

  async onSubmitEmergenciaTipos() {
    try {
      const splittedInicio = this.form.fechaInicio2.split('/');
      const stringNewInicio = `${splittedInicio[0]}%2F${splittedInicio[1]}%2F${splittedInicio[2]}`;
      const splittedFin = this.form.fechaFin2.split('/');
      const stringNewFin = `${splittedFin[0]}%2F${splittedFin[1]}%2F${splittedFin[2]}`;
      this.$router.push(`/reporte-emergencia-tipo-fecha/${this.form.tipoEmergenciaId}/${stringNewInicio}/${stringNewFin}`);
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }

  async onSubmitVoluntariosSede() {
    try {
      this.$router.push('/reporte-voluntario-sede/');
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }

  async onSubmitVoluntariosCuerpoFilial() {
    try {
      this.$router.push('/reporte-voluntario-cuerpo-filial/');
    // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }
}
</script>
