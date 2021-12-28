<template>
  <main class="pb-40">
    <page-heading title="Nuevo Tipo de Emergencia" :back-route="`/tipoEmergencia/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Tipo Emergencia
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del tipo de Emergencia
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
                  <input-group v-model="form.tipoEmergencia" label="Nombre Tipo Emergencia" name="name" :error="errors[0]" />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isTipoEmergenciaLoading" @click.prevent="onSubmit" />
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
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputGroup from '@/components/ui/InputGroup.vue';

const TiposEmergenciasModel = namespace('tipoEmergencia');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputGroup,
  },
})
export default class EditTipoEmergenciaPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'TipoEmergencia', route: '/tipoEmergencia' },
    { name: 'Nuevo' },
  ]

  form: TipoEmergencia = {
    id: 0,
    tipoEmergencia: '',
  };

  @TiposEmergenciasModel.State('isLoading') isTipoEmergenciaLoading!: boolean;
  @TiposEmergenciasModel.State('tipoEmergencia') tipoEmergencia!: TipoEmergencia;
  @TiposEmergenciasModel.Action('update') updateTipoEmergencia!: ({ tipoEmergencia, vm }: { tipoEmergencia: any; vm: any }) => ActionMethod;
  @TiposEmergenciasModel.Action('show') fetchTipoEmergencia!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.fetchTipoEmergencia({ id: +this.$route.params.id, vm: this });
      this.setCurrentTipoEmergencia();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentTipoEmergencia() {
    this.form = {
      ...this.tipoEmergencia,
    };
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateTipoEmergencia({ tipoEmergencia: this.form, vm: this });
        this.$router.push('/tipoEmergencia');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
