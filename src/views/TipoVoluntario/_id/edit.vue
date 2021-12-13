<template>
  <main class="pb-40">
    <page-heading title="Nuevo Tipo de Voluntario" :back-route="`/tipoVoluntario/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Tipo Voluntario
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del tipo de Voluntario
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
                  <input-group v-model="form.nombreTipoVoluntario" label="Nombre Tipo Voluntario" name="name" :error="errors[0]" />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isTipoVoluntarioLoading" @click.prevent="onSubmit" />
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

const TiposVoluntarios = namespace('tipoVoluntario');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputGroup,
  },
})
export default class EditTipoVoluntarioPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'TipoVoluntario', route: '/tipoVoluntario' },
    { name: 'Nuevo' },
  ]

  form: TipoVoluntario = {
    id: 0,
    nombreTipoVoluntario: '',
  };

  @TiposVoluntarios.State('isLoading') isTipoVoluntarioLoading!: boolean;
  @TiposVoluntarios.State('tipoVoluntario') tipoVoluntario!: TipoVoluntario;
  @TiposVoluntarios.Action('update') updateTipoVoluntario!: ({ tipoVoluntario, vm }: { tipoVoluntario: any; vm: any }) => ActionMethod;
  @TiposVoluntarios.Action('show') fetchTipoVoluntario!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.fetchTipoVoluntario({ id: +this.$route.params.id, vm: this });
      this.setCurrentTipoVoluntario();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentTipoVoluntario() {
    this.form = {
      ...this.tipoVoluntario,
    };
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateTipoVoluntario({ tipoVoluntario: this.form, vm: this });
        this.$router.push('/tipoVoluntario');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
