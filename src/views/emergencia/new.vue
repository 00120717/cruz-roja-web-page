<template>
  <main class="pb-40">
    <page-heading title="Nueva Emergencia" back-route="/emergencia" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Emergencia
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información de la Emergencia
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="name"
                  name="nombre"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.emergenciaNombre" label="Nombre" name="name" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="code"
                  name="código"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.emergenciaCodigo" label="Código" name="code" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="emergenciaDescripcion"
                  name="emergenciaDescripcion"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.emergenciaDescripcion" label="Descripcion" name="emergenciaDescripcion" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                    v-slot="{ errors }"
                    vid="emergenciaInicio"
                    name="emergenciaInicio"
                    tag="div"
                    rules="min:10"
                    >
                    <input-group
                      id="emergenciaInicio"
                      v-model="form.emergenciaInicio"
                      label="Fecha Inicio"
                      name="emergenciaInicio"
                      :error="errors[0]"
                      />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                    v-slot="{ errors }"
                    vid="emergenciaFinal"
                    name="emergenciaFinal"
                    tag="div"
                    rules="min:10"
                    >
                    <input-group
                      id="emergenciaFinal"
                      v-model="form.emergenciaFinal"
                      label="Fecha Finalizacion"
                      name="emergenciaFinal"
                      :error="errors[0]"
                      />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                  <ValidationProvider
                      v-slot="{ errors }"
                      vid="tipoEmergencia"
                      name="tipoEmergencia"
                      tag="div"
                      rules="required"
                      >
                      <input-select
                        v-model="form.tipoEmergenciaId"
                        label="Tipo Emergencia"
                        placeholder="Seleccionar"
                        :options="tipoEmergenciaList"
                        name="tipoEmergencia"
                        display-name="tipoEmergencia"
                        :error="errors[0]"
                        />
                  </ValidationProvider>
                </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isSedeLoading" @click.prevent="onSubmit" />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputGroup from '@/components/ui/InputGroup.vue';

const EmergenciaModel = namespace('emergencia');
const TipoEmergenciaModel = namespace('tipoEmergencia');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
  },
})
export default class NewEmergenciaPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Emergencia', route: '/emergencia' },
    { name: 'Nuevo' },
  ]

  form = {
    emergenciaNombre: '',
    emergenciaCodigo: '',
    emergenciaInicio: '',
    emergenciaFinal: '',
    emergenciaDescripcion: '',
    tipoEmergenciaId: 0,
  };

  @EmergenciaModel.State('isLoading') isSedeLoading!: boolean;
  @EmergenciaModel.Action('store') createEmergencia!: ({ emergencia, vm }: { emergencia: any; vm: any }) => ActionMethod;
  @TipoEmergenciaModel.State('tipoEmergenciaList') tipoEmergenciaList!: TipoEmergencia[];
  @TipoEmergenciaModel.Action('list') fetchTipoEmergenciaList!: (vm: any) => ActionMethod;

  async mounted() {
    try {
      await this.fetchTipoEmergenciaList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.createEmergencia({ emergencia: this.form, vm: this });
        this.$router.push('/emergencia');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
