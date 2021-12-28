<template>
  <main class="pb-40">
    <page-heading title="Nuevo Hospital" back-route="/hospital" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Hospital
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del Hospital
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="nombreHospital"
                  name="nombreHospital"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.nombreHospital" label="Nombre del Hospital" name="nombreHospital" :error="errors[0]" />
                </ValidationProvider>
              </div>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <ValidationProvider
                  v-slot="{ errors }"
                  vid="codigoHospital"
                  name="codigoHospital"
                  tag="div"
                  rules="required"
                  >
                  <input-group v-model="form.codigoHospital" label="Codigo del Hospital" name="codigoHospital" :error="errors[0]" />
              </ValidationProvider>
            </div>
            <div class="col-span-6 sm:col-span-4">
              <ValidationProvider
                  v-slot="{ errors }"
                  vid="fechaCreacion"
                  name="fechaCreacion"
                  tag="div"
                  rules="min:10"
                  >
                  <input-group
                    id="fechaCreacion"
                    v-model="form.fechaCreacion"
                    label="Fecha Creacion"
                    name="fechaCreacion"
                    :error="errors[0]"
                    />
              </ValidationProvider>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isHospitalLoading" @click.prevent="onSubmit" />
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

const HospitalModel = namespace('hospital');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputGroup,
  },
})

export default class NewHospitalPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Hospital', route: '/hospital' },
    { name: 'Nuevo' },
  ]

  form = {
    nombreHospital: '',
    codigoHospital: '',
    fechaCreacion: '',
  };

  @HospitalModel.State('isLoading') isHospitalLoading!: boolean;
  @HospitalModel.Action('store') createHospital!: ({ hospital, vm }: { hospital: any; vm: any }) => ActionMethod;

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.createHospital({ hospital: this.form, vm: this });
        this.$router.push('/hospital');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
