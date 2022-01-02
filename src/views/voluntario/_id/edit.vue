<template>
   <main class="pb-40">
      <page-heading title="Edición voluntario" :back-route="`/voluntario/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
      <form-section>
         <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
            <div class="md:grid md:grid-cols-3 md:gap-8 ">
               <div class="md:col-span-1">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                     Voluntario
                  </h3>
                  <p
                     class="mt-1 text-sm leading-5 text-gray-500"
                     >
                     Información del voluntario
                  </p>
               </div>
               <div class="mt-5 md:mt-0 md:col-span-2">
                  <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="documentoIdentificacion"
                           name="documentoIdentificacion"
                           tag="div"
                           rules="required"
                           >
                           <input-group v-model="form.documentoIdentificacion" label="Documento Identificacion Personal" name="documentoIdentificacion" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <div class="flex w-full justify-between">
                           <label
                              for="dui"
                              class="block text-sm font-medium leading-5 text-gray-700"
                              >Tipo Documento Identificacion</label>
                        </div>
                        <div class="relative mt-1 rounded-md shadow-sm">
                           <div class="flex items-center mb-2">
                              <input
                                 id="dui"
                                 v-model="form.tipoDocumentoPersona"
                                 label="DUI"
                                 name="dui"
                                 value="D"
                                 class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                 type="radio"
                                 />
                              <label for="dui" class="w-full ml-3">
                              <span class="block text-sm font-medium leading-5 text-gray-700 truncate ...">{{ "Documento unico de identidad" | truncate(75)}}</span>
                              </label>
                           </div>
                           <div class="flex items-center mb-2">
                              <input
                                 id="pasaporte"
                                 v-model="form.tipoDocumentoPersona"
                                 label="Pasaporte"
                                 name="pasaporte"
                                 value="P"
                                 class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                 type="radio"
                                 />
                              <label for="pasaporte" class="w-full ml-3">
                              <span class="block text-sm font-medium leading-5 text-gray-700 truncate ...">{{ "Pasaporte" | truncate(75)}}</span>
                              </label>
                           </div>
                           <div class="flex items-center mb-2">
                              <input
                                 id="nit"
                                 v-model="form.tipoDocumentoPersona"
                                 label="NIT"
                                 name="nit"
                                 value="N"
                                 class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio"
                                 type="radio"
                                 />
                              <label for="nit" class="w-full ml-3">
                              <span class="block text-sm font-medium leading-5 text-gray-700 truncate ...">{{ "NIT" | truncate(75)}}</span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="voluntarioCodigoCarnet"
                           name="voluntarioCodigoCarnet"
                           tag="div"
                           rules="min:8"
                           >
                           <input-group
                              id="voluntarioCodigoCarnet"
                              v-model="form.voluntarioCodigoCarnet"
                              label="Carnet de Voluntario"
                              name="voluntarioCodigoCarnet"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
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
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="fechaNacimiento"
                           name="fechaNacimiento"
                           tag="div"
                           rules="min:10"
                           >
                           <input-group
                              id="fechaNacimiento"
                              v-model="form.fechaNacimiento"
                              label="Fecha Nacimiento"
                              name="fechaNacimiento"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
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
                              label="Fecha Incorporacion Cruz Roja"
                              name="fechaInicio"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="email"
                           name="email"
                           tag="div"
                           rules="email"
                           >
                           <input-group
                              id="email"
                              v-model="form.email"
                              label="Correo electrónico"
                              name="email"
                              :error="errors[0]"
                              />
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
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="tipoVoluntario"
                           name="tipoVoluntario"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.tipoVoluntarioId"
                              label="Tipo Voluntario"
                              placeholder="Seleccionar"
                              :options="tipoVoluntarioList"
                              name="tipoVoluntario"
                              display-name="nombreTipoVoluntario"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="estado"
                           name="estado"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.estadoId"
                              label="Estado Voluntario"
                              placeholder="Seleccionar"
                              :options="estadoList"
                              name="estado"
                              display-name="estadoVoluntario"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="modalidad"
                           name="modalidad"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.modalityId"
                              label="Modalidad Voluntario"
                              placeholder="Seleccionar"
                              :options="modalidadList"
                              name="modalidad"
                              display-name="nombreModalidad"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="cuerpoFilial"
                           name="cuerpoFilial"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.cuerpoFilialId"
                              label="Cuerpo Filial"
                              placeholder="Seleccionar"
                              :options="cuerpoFilialList"
                              name="cuerpoFilial"
                              display-name="nombreCuerpoFilial"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="sede"
                           name="sede"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.sedeId"
                              label="Sede"
                              placeholder="Seleccionar"
                              :options="sedeList"
                              name="sede"
                              display-name="nombre"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <toggle-selector v-model="form.estadoPersona" label="Activo" />
                     </div>
                  </div>
               </div>
            </div>
         </ValidationObserver>
      </form-section>
      <div class="w-full">
         <div class="flex items-center justify-end">
            <custom-button type="submit" class="ml-2" title="Guardar" :loading="isVoluntarioLoading" @click.prevent="onSubmit" />
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

const VoluntarioModel = namespace('voluntario');
const CuerpoFilialModel = namespace('cuerpoFilial');
const ModalidadModel = namespace('modalidad');
const EstadoModel = namespace('estado');
const SedeModel = namespace('sede');
const TipoVoluntarioModel = namespace('tipoVoluntario');

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
export default class NewVoluntarioPage extends Vue {
  form: Voluntario = {
    id: '',
    documentoIdentificacion: '',
    tipoDocumentoPersona: '',
    fechaNacimiento: '',
    fechaInicio: '',
    estadoPersona: false,
    genero: '',
    lastName: '',
    firstName: '',
    email: '',
    voluntarioCodigoCarnet: '',
    sedeId: 0,
    modalityId: 0,
    cuerpoFilialId: 0,
    tipoVoluntarioId: 0,
    estadoId: 0,
  }

  breadcrumbs: Breadcrumb[] =[
    { name: 'Administración' },
    { name: 'Voluntarios', route: '/voluntario' },
    { name: 'Nuevo' },
  ]

  @EstadoModel.State('estadoList') estadoList!: Estado[];
  @EstadoModel.Action('list') fetchEstadoList!: (vm: any) => ActionMethod;
  @CuerpoFilialModel.State('cuerpoFilialList') cuerpoFilialList!: CuerpoFilial[];
  @CuerpoFilialModel.Action('list') fetchCuerpoFilialList!: (vm: any) => ActionMethod;
  @ModalidadModel.State('modalidadList') modalidadList!: Modalidad[];
  @ModalidadModel.Action('list') fetchModalidadList!: (vm: any) => ActionMethod;
  @TipoVoluntarioModel.State('tipoVoluntarioList') tipoVoluntarioList!: TipoVoluntario[];
  @TipoVoluntarioModel.Action('list') fetchTipoVoluntarioList!: (vm: any) => ActionMethod;
  @SedeModel.State('sedeList') sedeList!: Sede[];
  @SedeModel.Action('list') fetchSedeList!: (vm: any) => ActionMethod;
  @VoluntarioModel.State('isLoading') isVoluntarioLoading!: boolean;
  @VoluntarioModel.State('voluntario') voluntario!: Voluntario;
  @VoluntarioModel.Action('show') showVoluntario!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;
  @VoluntarioModel.Action('update') updateVoluntario!: ({ voluntario, vm }: { voluntario: any; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.showVoluntario({ id: +this.$route.params.id, vm: this });
      this.setCurrentUser();
      await this.fetchEstadoList(this);
      await this.fetchSedeList(this);
      await this.fetchModalidadList(this);
      await this.fetchCuerpoFilialList(this);
      await this.fetchTipoVoluntarioList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentUser() {
    this.form = {
      ...this.voluntario,
    };
    this.form.modalityId = this.voluntario?.modalidad?.id ?? 0;
    this.form.cuerpoFilialId = this.voluntario?.cuerpoFilial?.id ?? 0;
    this.form.sedeId = this.voluntario?.sede?.id ?? 0;
    this.form.tipoVoluntarioId = this.voluntario?.tipoVoluntario?.id ?? 0;
    this.form.estadoId = this.voluntario?.estado?.id ?? 0;
  }

  /* currentRole() {
    return this.rolesList.find((role) => role.id === this.form.roleId);
  } */

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateVoluntario({ voluntario: this.form, vm: this });
        this.$router.push('/voluntario');
      // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
}
</script>
