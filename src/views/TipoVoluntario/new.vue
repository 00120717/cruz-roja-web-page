<template>
  <main class="pb-40">
    <page-heading title="Nuevo Tipo de Voluntario" back-route="/tipoVoluntario" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Tipo de Voluntario
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del Tipo de Voluntario
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="type"
                  name="tipo"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.type" label="Tipo de Voluntario" name="tipo" :error="errors[0]" />
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
export default class NewTipoVoluntarioPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'TipoVoluntario', route: '/tipoVoluntario' },
    { name: 'Nuevo' },
  ]

  form = {
    type: '',
  };

  @TiposVoluntarios.State('isLoading') isTipoVoluntarioLoading!: boolean;
  @TiposVoluntarios.Action('store') createTipoVoluntario!: ({ tipoVoluntario, vm }: { tipoVoluntario: any; vm: any }) => ActionMethod;

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.createTipoVoluntario({ tipoVoluntario: this.form, vm: this });
        this.$router.push('/tipoVoluntario');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>