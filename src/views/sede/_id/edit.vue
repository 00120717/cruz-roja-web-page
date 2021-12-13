<template>
  <main class="pb-40">
    <page-heading title="Nueva sede" :back-route="`/sede/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Sede
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información de la sede
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
                  vid="address"
                  name="dirección"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.direccion" label="Dirección" name="address" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                  <ValidationProvider
                      v-slot="{ errors }"
                      vid="tipoSede"
                      name="tipoSede"
                      tag="div"
                      rules="required"
                      >
                      <input-select
                        v-model="form.tipoSedeId"
                        label="Tipo Sede"
                        placeholder="Seleccionar"
                        :options="tipoSedeList"
                        name="tipoSede"
                        display-name="nombreTipoSede"
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

const Sedes = namespace('sede');
const TipoSedeModel = namespace('tipoSede');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    InputSelect,
    ToggleSelector,
    InputGroup,
  },
})
export default class EditSedePage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Sede', route: '/sede' },
    { name: 'Nuevo' },
  ]

  form: Sede = {
    id: 0,
    nombre: '',
    codigo: '',
    direccion: '',
    tipoSedeId: 0,
  };

  @Sedes.State('isLoading') isSedeLoading!: boolean;
  @Sedes.State('sede') sede!: Sede;
  @TipoSedeModel.State('tipoSedeList') tipoSedeList!: TipoSede[];
  @TipoSedeModel.Action('list') fetchTipoSedeList!: (vm: any) => ActionMethod;
  @Sedes.Action('update') updateSede!: ({ sede, vm }: { sede: any; vm: any }) => ActionMethod;
  @Sedes.Action('show') fetchSede!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.fetchSede({ id: +this.$route.params.id, vm: this });
      await this.fetchTipoSedeList(this);
      this.setCurrentSede();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentSede() {
    this.form = {
      ...this.sede,
    };
    this.form.tipoSedeId = this.sede?.tipoSede?.id ?? 0;
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateSede({ sede: this.form, vm: this });
        this.$router.push('/sede');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
