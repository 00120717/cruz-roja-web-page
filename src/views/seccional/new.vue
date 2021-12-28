<template>
  <main class="pb-40">
    <page-heading title="Nueva seccional" back-route="/seccional" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Seccional
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información de la seccional
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
                  <input-group v-model="form.nombre" label="Nombre" name="name" :error="errors[0]" />
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
                  <input-group v-model="form.codigo" label="Código" name="code" :error="errors[0]" />
                </ValidationProvider>
              </div>
                <div class="col-span-6 sm:col-span-4">
                  <ValidationProvider
                      v-slot="{ errors }"
                      vid="departamentoXMunicipio"
                      name="departamentoXMunicipio"
                      tag="div"
                      rules="required"
                      >
                      <input-select
                        v-model="form.departamentoXmunicipioId"
                        label="Ubicacion Departamento y Municipio"
                        placeholder="Seleccionar"
                        :options="departamentoXMunicipioList"
                        name="departamentoXMunicipio"
                        display-name="nombreCompuesto"
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
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isSeccionalLoading" @click.prevent="onSubmit" />
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

const SeccionalModel = namespace('seccional');
const DepartamentoXMunicipioModel = namespace('departamentoXMunicipio');

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
export default class NewSeccionalPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Seccional', route: '/seccional' },
    { name: 'Nuevo' },
  ]

  form = {
    nombre: '',
    codigo: '',
    departamentoXmunicipioId: 0,
  };

  @SeccionalModel.State('isLoading') isSeccionalLoading!: boolean;
  @SeccionalModel.Action('store') createSeccional!: ({ seccional, vm }: { seccional: any; vm: any }) => ActionMethod;
  @DepartamentoXMunicipioModel.State('departamentoXMunicipioList') departamentoXMunicipioList!: DepartamentoXMunicipio[];
  @DepartamentoXMunicipioModel.Action('list') fetchDepartamentoXMunicipioList!: (vm: any) => ActionMethod;

  async mounted() {
    try {
      await this.fetchDepartamentoXMunicipioList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.createSeccional({ seccional: this.form, vm: this });
        this.$router.push('/seccional');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
