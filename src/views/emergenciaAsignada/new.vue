<template>
  <main class="pb-40">
    <page-heading title="Nueva Emergencias a Asignar" back-route="/emergencia" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Emergencia a Asignar
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información de la Emergencia a Asignar
            </p>
          </div>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Emergencias
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Emergencias a asignar
            </p>
          </div>
          <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div v-if="newEmergenciaVA && newEmergenciaVA.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                <span
                  v-for="(emergencia, index) in newEmergenciaVA"
                  :key="index"
                  class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                >{{ emergencia.emergenciaNombre }}</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-1" />
          <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 mt-4 sm:col-span-4">
                <custom-button
                  type="button"
                  color="secondary"
                  title="Asignar emergencias"
                  @click="showEmergenciasModal = true"
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
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </template>
                </custom-button>
              </div>
            </div>
          </div>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Voluntarios
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Voluntarios a asignar
            </p>
          </div>
          <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div v-if="newVoluntarioEA && newVoluntarioEA.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                <span
                  v-for="(voluntario, index) in newVoluntarioEA"
                  :key="index"
                  class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                >{{ voluntario.nombreCompuesto }}</span>
              </div>
            </div>
          </div>
          <div class="md:col-span-1" />
          <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 mt-4 sm:col-span-4">
                <custom-button
                  type="button"
                  color="secondary"
                  title="Asignar voluntarios"
                  @click="showVoluntariosModal = true"
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
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </template>
                </custom-button>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isEmergenciaAsignadaLoading" @click.prevent="onSubmit" />
      </div>
    </div>
    <emergencias-modal
      :show="showEmergenciasModal"
      :new-emergencias="newEmergencias"
      :list="emergenciaList"
      @update:show="showEmergenciasModal = false"
      @update-emergencias="updateNewEmergencias"
    />
    <voluntarios-modal
      :show="showVoluntariosModal"
      :new-voluntarios="newVoluntarios"
      :list="voluntarioList"
      @update:show="showVoluntariosModal = false"
      @update-voluntarios="updateNewVoluntarios"
    />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputGroup from '@/components/ui/InputGroup.vue';
import EmergenciasModal from '@/components/general/EmergenciasModal.vue';
import VoluntariosModal from '@/components/general/VoluntariosModal.vue';

const EmergenciaAsignadaModel = namespace('emergenciaAsignada');
const EmergenciaModel = namespace('emergencia');
const VoluntarioModel = namespace('voluntario');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
    EmergenciasModal,
    VoluntariosModal,
  },
})
export default class NewEmergenciaPage extends Vue {
  showEmergenciasModal = false;
  newEmergencias: Array<number> = [];
  newEmergenciaVA: Emergencia[] = [];

  showVoluntariosModal = false;
  newVoluntarios: Array<string> = [];
  newVoluntarioEA: Voluntario[] = [];

  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Emergencia Asignada', route: '/emergenciaAsignada' },
    { name: 'Nuevo' },
  ]

  form = {
    voluntarioId: [],
    emergenciaId: [],
  };

  @EmergenciaAsignadaModel.State('isLoading') isEmergenciaAsignadaLoading!: boolean;
  @EmergenciaAsignadaModel.Action('store') createEmergencia!: ({ emergenciaAsignada, vm }: { emergenciaAsignada: any; vm: any }) => ActionMethod;
  @EmergenciaModel.State('emergenciaList') emergenciaList!: Emergencia[];
  @EmergenciaModel.Action('list') fetchEmergenciaList!: (vm: any) => ActionMethod;
  @VoluntarioModel.State('voluntarioList') voluntarioList!: Voluntario[];
  @VoluntarioModel.Action('list') fetchVoluntarioList!: (vm: any) => ActionMethod;

  async mounted() {
    try {
      await this.fetchEmergenciaList(this);
      await this.fetchVoluntarioList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  @Watch('newEmergencias', { immediate: true, deep: true })
  handleNewEmergenciaChange(value: Array<number>) {
    if (value && this.emergenciaList) {
      this.newEmergenciaVA = this.emergenciaList.filter((emergencia: Emergencia) => value.includes(emergencia.id));
    }
  }

  @Watch('newVoluntarios', { immediate: true, deep: true })
  handleNewVoluntarioChange(value: Array<string>) {
    if (value && this.voluntarioList) {
      this.newVoluntarioEA = this.voluntarioList.filter((voluntario: Voluntario) => value.includes(voluntario.id));
    }
  }

  updateNewEmergencias(value: Array<number>) {
    this.newEmergencias = value;
  }

  updateNewVoluntarios(value: Array<string>) {
    this.newVoluntarios = value;
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        this.$set(this.form, 'emergenciaId', this.newEmergencias);
        this.$set(this.form, 'voluntarioId', this.newVoluntarios);
        await this.createEmergencia({ emergenciaAsignada: this.form, vm: this });
        this.$router.push('/emergenciaAsignada');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
