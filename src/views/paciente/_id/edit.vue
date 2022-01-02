<template>
   <main class="pb-40">
      <page-heading title="Edición Paciente" :back-route="`/paciente/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
      <form-section>
         <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
            <div class="md:grid md:grid-cols-3 md:gap-8 ">
               <div class="md:col-span-1">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                     Paciente
                  </h3>
                  <p
                     class="mt-1 text-sm leading-5 text-gray-500"
                     >
                     Información del paciente
                  </p>
               </div>
               <div class="mt-5 md:mt-0 md:col-span-2">
                  <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="firstName"
                           name="firstName"
                           tag="div"
                           rules="required"
                           >
                           <input-group v-model="form.firstName" label="Nombres" name="firstName" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="lastname"
                           name="lastname"
                           tag="div"
                           rules="required"
                           >
                           <input-group v-model="form.lastName" label="Apellidos" name="lastname" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <div class="flex w-full justify-between">
                           <label
                              for="masculino"
                              class="block text-sm font-medium leading-5 text-gray-700"
                              >Genero</label>
                        </div>
                        <div class="relative mt-1 rounded-md shadow-sm">
                           <div class="flex items-center mb-2">
                              <input
                                 id="masculino"
                                 v-model="form.genero"
                                 label="Masculino"
                                 name="genero"
                                 value="M"
                                 class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                 type="radio"
                                 />
                              <label for="masculino" class="w-full ml-3">
                              <span class="block text-sm font-medium leading-5 text-gray-700 truncate ...">{{ "Masculino" | truncate(75)}}</span>
                              </label>
                           </div>
                           <div class="flex items-center mb-2">
                              <input
                                 id="femenino"
                                 v-model="form.genero"
                                 label="Femenino"
                                 name="genero"
                                 value="F"
                                 class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                 type="radio"
                                 />
                              <label for="femenino" class="w-full ml-3">
                              <span class="block text-sm font-medium leading-5 text-gray-700 truncate ...">{{ "Femenino" | truncate(75)}}</span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <toggle-selector v-model="form.identificado" label="Paciente Identificado" />
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <toggle-selector v-model="form.estadoPersona" label="Estado Paciente" />
                     </div>
                  </div>
               </div>
            </div>
         </ValidationObserver>
      </form-section>
      <div class="w-full">
         <div class="flex items-center justify-end">
            <custom-button type="submit" class="ml-2" title="Guardar" :loading="isPacienteLoading" @click.prevent="onSubmit" />
         </div>
      </div>
   </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ActionMethod } from 'vuex';
import { namespace } from 'vuex-class';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import InputGroup from '@/components/ui/InputGroup.vue';
import InputRadio from '@/components/ui/InputRadio.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const PacienteModel = namespace('paciente');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
    InputRadio,
  },
})
export default class NewPacientePage extends Vue {
  form: Paciente = {
    id: '',
    estadoPersona: false,
    identificado: true,
    genero: '',
    lastName: '',
    firstName: '',
    menorEdad: false,
    fechaCreacion: '',
  }

  breadcrumbs: Breadcrumb[] =[
    { name: 'Administración' },
    { name: 'Pacientes', route: '/paciente' },
    { name: 'Nuevo' },
  ]

  @PacienteModel.State('isLoading') isPacienteLoading!: boolean;
  @PacienteModel.State('paciente') paciente!: Paciente;
  @PacienteModel.Action('show') showPaciente!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;
  @PacienteModel.Action('update') updatePaciente!: ({ paciente, vm }: { paciente: any; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.showPaciente({ id: +this.$route.params.id, vm: this });
      this.setCurrentUser();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentUser() {
    this.form = {
      ...this.paciente,
    };
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updatePaciente({ paciente: this.form, vm: this });
        this.$router.push('/paciente');
      // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
}
</script>
