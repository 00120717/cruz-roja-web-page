<template>
   <main class="pb-40">
      <page-heading title="Nueva Emergencia Realizada" back-route="/emergenciaRealizada" :breadcrumbs="breadcrumbs" />
      <form-section>
         <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
            <div class="md:grid md:grid-cols-3 md:gap-8 ">
               <div class="md:col-span-1">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                     Emergencia Realizada
                  </h3>
                  <p
                     class="mt-1 text-sm leading-5 text-gray-500"
                     >
                     Información de la Emergencia Realizada
                  </p>
               </div>
               <div class="mt-5 md:mt-0 md:col-span-2">
                  <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="identificadorFormulario"
                           name="identificador formulario"
                           tag="div"
                           rules="required"
                           >
                          <input-group v-model="form.identificadorFormulario" label="Identificador Formulario" name="identificadorFormulario" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <span class="block text-sm font-medium leading-5 text-gray-700">Fecha Realizada</span>
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="fechaRealizada"
                           name="fechaRealizada"
                           tag="div"
                           rules="min:10"
                           >
                           <input class="block w-full form-input focus:shadow-outline sm:text-md sm:leading-5 mb-4" type="date" id="fechaRealizada" name="fechaRealizada" label="Fecha Realizada" v-model="form.fechaRealizada" :error="errors[0]">
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="fechaHoraLlamada"
                           name="Hora llamada"
                           tag="div"
                           rules="required"
                           >
                           <input-group v-model="form.fechaHoraLlamada" label="Hora llamada" name="fechaHoraLlamada" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="emisorEmergencia"
                           name="emisorEmergencia"
                           tag="div"
                           rules="required"
                           >
                           <input-group v-model="form.emisorEmergencia" label="Nombre emisor de la emergencia" name="emisorEmergencia" :error="errors[0]" />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="telefono"
                           name="telefono"
                           tag="div"
                           rules="min:8"
                           >
                           <input-group
                              id="telefono"
                              v-model="form.telefono"
                              label="Telefono"
                              name="telefono"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                      <input-group
                          id="emergenciaFinal"
                          v-model="form.comentario"
                          label="Comentario Emisor"
                          name="comentario"
                          />
                     </div>
                     <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           v-slot="{ errors }"
                           vid="emergencia"
                           name="emergencia"
                           tag="div"
                           rules="required"
                           >
                           <input-select
                              v-model="form.emergenciaId"
                              label="Emergencia"
                              placeholder="Seleccionar"
                              :options="emergenciaList"
                              name="emergenciaNombre"
                              display-name="emergenciaNombre"
                              :error="errors[0]"
                              />
                        </ValidationProvider>
                     </div>
                    <div class="col-span-1 sm:col-span-5" style="width:100%;height: 300px; z-index: 2">
                      <LocationSelectorMap v-model="data2" :key="data.key" @input="address=$event" @latitud="latitud=$event" @longitud="longitud=$event"/>
                    </div>
                    <div class="col-span-2 sm:col-span-4">
                      <h3><strong>Latitud:</strong> {{latitud}}</h3>
                      <h3><strong>Longitud:</strong> {{longitud}}</h3>
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                      Ubicacion Exacta
                      <textarea-autosize
                        style="width:100%;background-color: #ffffff;border-color: #d2d6dc;border-width: 1px;border-radius: 0.375rem;padding-top: 0.5rem;padding-right: 0.75rem;padding-bottom: 0.5rem;padding-left: 0.75rem;font-size: 1rem;"
                        :value="data2.address"
                        disabled
                      />
                     </div>
                    <div class="col-span-6 sm:col-span-4">
                        <ValidationProvider
                           vid="ubicacionReferencia"
                           name="Ubicacion referencia"
                           tag="div"
                           rules="required"
                           >
                           Ubicacion de Referencia
                          <textarea-autosize
                            style="width:100%;background-color: #ffffff;border-color: #d2d6dc;border-width: 1px;border-radius: 0.375rem;padding-top: 0.5rem;padding-right: 0.75rem;padding-bottom: 0.5rem;padding-left: 0.75rem;font-size: 1rem;"
                            v-model="form.ubicacionReferencia"
                          />
                        </ValidationProvider>
                     </div>
                  </div>
               </div>
            </div>
            <div class="md:grid md:grid-cols-3 md:gap-8 ">
            <div class="md:col-span-1">
               <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Seccionales
               </h3>
               <p class="mt-1 text-sm leading-5 text-gray-500">
                  Seccionales a asignar
               </p>
            </div>
            <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
               <div class="grid grid-cols-6 row-gap-2 col-gap-6">
                  <div v-if="newSeccionalVA && newSeccionalVA.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                     <span
                        v-for="(seccional, index) in newSeccionalVA"
                        :key="index"
                        class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                        >{{ seccional.nombre }}</span>
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
                           title="Asignar seccionales"
                           @click="showSeccionalesModal = true"
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
      <form-section>
      <div class="md:grid md:grid-cols-3 md:gap-8 ">
        <div v-if="!vacioVehiculo">
        <div class="col-span-6 sm:col-span-4">
          <input-group v-model="firstName" label="Nombres" name="firstName" />
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-group v-model="lastName" label="Apellidos" name="lastname"/>
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
                    v-model="genero"
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
                    v-model="genero"
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
          <toggle-selector v-model="identificado" label="Paciente Identificado" />
        </div>
        </div>
        <div class="col-span-6 sm:col-span-4">
          <span class="block text-sm font-medium leading-5 text-gray-700">Fecha Salida Vehiculo</span>
          <input class="block w-full form-input focus:shadow-outline sm:text-md sm:leading-5 mb-4" type="date" v-model="fechaSalida" label="Fecha Salida Vehiculo" name="fechaSalida"/>
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-group v-model="horaSalida" label="Hora Salida Vehiculo" name="horaRegreso"/>
        </div>
        <div class="col-span-6 sm:col-span-4">
          <span class="block text-sm font-medium leading-5 text-gray-700">Fecha Regreso Vehiculo</span>
          <input class="block w-full form-input focus:shadow-outline sm:text-md sm:leading-5 mb-4" type="date" v-model="fechaRegreso" label="Fecha Regreso Vehiculo" name="fechaRegreso"/>
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-group v-model="horaRegreso" label="Hora Regreso Vehiculo" name="horaRegreso"/>
        </div>
        <div class="col-span-6 sm:col-span-4">
          <toggle-selector v-model="vacioVehiculo" label="Vehiculo Vacio Regreso" />
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-select
            v-model="vehiculoId"
            label="Vehiculo"
            placeholder="Seleccionar"
            :options="vehiculoList"
            name="vehiculo"
            display-name="nombreVehiculo"
            />
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-select
            v-model="voluntarioId"
            label="Voluntario Conductor"
            placeholder="Seleccionar"
            :options="voluntarioList"
            name="voluntario"
            display-name="nombreCompuesto"
            />
        </div>
        <div class="col-span-6 sm:col-span-4">
          <input-select
            v-model="hospitalId"
            label="Hospital"
            placeholder="Seleccionar"
            :options="hospitalList"
            name="hospital"
            display-name="nombreHospital"
            />
        </div>
        <div class="w-full">
          <div class="flex items-center justify-end">
              <custom-button type="button" class="ml-2" title="Agregar Paciente" @click="addNewTodo" />
          </div>
        </div>
      </div>
      </form-section>
      <div class="w-full">
         <div class="flex items-center justify-end">
            <custom-button type="submit" class="ml-2" title="Guardar" :loading="isEmergenciaRealizadaLoading" @click.prevent="onSubmit" />
         </div>
      </div>
      <section>
         <simple-table-list
            :headers="headers"
            >
            <template slot="items">
               <table-item
                  v-for="(vehiculoXEmergenciaPaciente, index) in newVehiculoPacienteVoluntario"
                  :key="index"
                  :item="vehiculoXEmergenciaPaciente.id"
                  :selected="selectedItems"
                  :show="false"
                  :edit="true"
                  @delete="deleteComplete"
                  >
                  <td
                     class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
                     >
                     <div class="flex items-center">
                        <div class="">
                           <div class="text-sm font-medium leading-5 text-gray-900">
                              {{ vehiculoXEmergenciaPaciente.id }}
                           </div>
                        </div>
                     </div>
                  </td>
                  <td
                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                     >
                     {{ vehiculoXEmergenciaPaciente.firstName }}
                  </td>
                  <td
                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                     >
                     {{ vehiculoXEmergenciaPaciente.lastName }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.horaSalida }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.horaRegreso }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.genero == 'M'? 'Masculino' : vehiculoXEmergenciaPaciente.genero == 'F' ?'Femenino' : '' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.identificado == true ? 'Si' : 'No' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.vacio == true? 'Si' : 'No' }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.vehiculo.nombreVehiculo }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.voluntario.nombreCompuesto }}
                  </td>
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
                  >
                    {{ vehiculoXEmergenciaPaciente.hospital.nombreHospital }}
                  </td>
               </table-item>
            </template>
         </simple-table-list>
      </section>
      <seccionales-modal
         :show="showSeccionalesModal"
         :new-seccionales="newSeccionales"
         :list="seccionalList"
         @update:show="showSeccionalesModal = false"
         @update-seccionales="updateNewSeccionales"
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
import { LMap, LTileLayer } from 'vue2-leaflet';
import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import TextareaAutosize from 'vue-textarea-autosize';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import SimpleTableList from '@/components/ui/SimpleTableList.vue';
import DeleteItem from '@/components/general/DeleteItem.vue';
import ConfirmationModal from '@/components/general/ConfirmationModal.vue';
import TableItem from '@/components/ui/Table/TableItem.vue';
import InputGroup from '@/components/ui/InputGroup.vue';
import SeccionalesModal from '@/components/general/SeccionalesModal.vue';
import VoluntariosModal from '@/components/general/VoluntariosModal.vue';
import ActiveIndicator from '@/components/ui/ActiveIndicator.vue';
import LocationSelectorMap from '@/components/Map/LocationSelectorMap.vue';

const EmergenciaRealizadaModel = namespace('emergenciaRealizada');
const EmergenciaModel = namespace('emergencia');
const SeccionalModel = namespace('seccional');
const VoluntarioModel = namespace('voluntario');
const HospitalModel = namespace('hospital');
const VehiculoModel = namespace('vehiculo');
const TextAreaAuto = Vue.use(TextareaAutosize);

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
    SeccionalesModal,
    VoluntariosModal,
    SimpleTableList,
    DeleteItem,
    ConfirmationModal,
    TableItem,
    ActiveIndicator,
    LMap,
    LTileLayer,
    LocationSelectorMap,
  },
})
export default class NewEmergenciaRealizadaPage extends Vue {
  showSeccionalesModal = false;
  newSeccionales: Array<number> = [];
  newSeccionalVA: Seccional[] = [];

  showVoluntariosModal = false;
  newVoluntarios: Array<string> = [];
  newVoluntarioEA: Voluntario[] = [];

  newVehiculoPacienteVoluntario: VehiculoXEmergenciaPacienteAux[] = [];
  newTodoText = 1

  voluntarioId = ''
  hospitalId = 0
  vehiculoId = 0
  firstName = ''
  lastName = ''
  genero = ''
  estadoPersona = true
  documentoIdentificacion = ''
  tipoDocumentoPersona = ''
  menorEdad = true
  identificado = true
  horaSalida = ''
  horaRegreso = ''
  nextTodoId = 1
  vacioVehiculo = false
  fechaSalida= ''
  fechaRegreso= ''
  address= ''
  latitud= 0.0
  longitud= 0.0

  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Emergencia Realizada', route: '/emergenciaRealizada' },
    { name: 'Nuevo' },
  ]

  headers: Array<object> = [
    {
      name: 'ID',
      key: 'id',
    },
    {
      name: 'Nombres',
      key: 'firstName',
    },
    {
      name: 'Apellidos',
      key: 'lastName',
    },
    {
      name: 'Hora Salida',
      key: 'horaSalida',
    },
    {
      name: 'Hora Regreso',
      key: 'horaRegreso',
    },
    {
      name: 'Genero',
      key: 'genero',
    },
    {
      name: 'Identificado',
      key: 'identificado',
    },
    {
      name: 'Vehiculo Vacio',
      key: 'estadoPersona',
    },
    {
      name: 'Vehiculo',
      key: 'vehiculo',
    },
    {
      name: 'Voluntario',
      key: 'voluntario',
    },
    {
      name: 'Hospital',
      key: 'hospital',
    },
  ]

  tileProvider = {
    attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  };

  form = {
    identificadorFormulario: '',
    fechaRealizada: '',
    fechaHoraLlamada: '',
    telefono: '',
    emisorEmergencia: '',
    comentario: '',
    ubicacionReferencia: '',
    seccionalId: [],
    voluntarioId: [],
    emergenciaId: 0,
  };
  data = {
    location: {},
    key: 1,
  };
  data2 = {
    address: '',
    lat: 0.0,
    lng: 0.0,
  };

  selectedItem = 0
  @EmergenciaRealizadaModel.State('isLoading') isEmergenciaRealizadaLoading!: boolean;
  @EmergenciaRealizadaModel.Action('store') createEmergenciaRealizada!: ({ emergenciaRealizada, vm }: { emergenciaRealizada: any; vm: any }) => ActionMethod;
  @EmergenciaModel.State('emergenciaList') emergenciaList!: Emergencia[];
  @EmergenciaModel.Action('list') fetchEmergenciaList!: (vm: any) => ActionMethod;
  @VoluntarioModel.State('voluntarioList') voluntarioList!: Voluntario[];
  @VoluntarioModel.Action('list') fetchVoluntarioList!: (vm: any) => ActionMethod;
  @SeccionalModel.State('seccionalList') seccionalList!: Seccional[];
  @SeccionalModel.Action('list') fetchSeccionalList!: (vm: any) => ActionMethod;
  @HospitalModel.State('hospitalList') hospitalList!: Hospital[];
  @HospitalModel.Action('list') fetchHospitalList!: (vm: any) => ActionMethod;
  @VehiculoModel.State('vehiculoList') vehiculoList!: Vehiculo[];
  @VehiculoModel.Action('list') fetchVehiculoList!: (vm: any) => ActionMethod;

  async mounted() {
    try {
      await this.fetchEmergenciaList(this);
      await this.fetchVoluntarioList(this);
      await this.fetchSeccionalList(this);
      await this.fetchHospitalList(this);
      await this.fetchVehiculoList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  @Watch('newSeccionales', { immediate: true, deep: true })
  handleNewSeccionalChange(value: Array<number>) {
    if (value && this.seccionalList) {
      this.newSeccionalVA = this.seccionalList.filter((seccional: Seccional) => value.includes(seccional.id));
    }
  }

  @Watch('newVoluntarios', { immediate: true, deep: true })
  handleNewVoluntarioChange(value: Array<string>) {
    if (value && this.voluntarioList) {
      this.newVoluntarioEA = this.voluntarioList.filter((voluntario: Voluntario) => value.includes(voluntario.id));
    }
  }

  updateNewSeccionales(value: Array<number>) {
    this.newSeccionales = value;
  }

  updateNewVoluntarios(value: Array<string>) {
    this.newVoluntarios = value;
  }

  deleteComplete(id: number) {
    this.selectedItem = id;
    if (this.selectedItem !== 0) {
      this.newVehiculoPacienteVoluntario.splice(this.newVehiculoPacienteVoluntario.findIndex((objeto) => objeto.id === this.selectedItem), 1);
    }
  }

  addNewTodo() {
    const voluntario = (this.voluntarioList.find((voluntarioA) => voluntarioA.id === this.voluntarioId));
    const vehiculo = (this.vehiculoList.find((vehiculoA) => vehiculoA.id === this.vehiculoId));
    const hospital = (this.hospitalList.find((hospitalA) => hospitalA.id === this.hospitalId));
    const { vacioVehiculo } = this;
    if (voluntario && vehiculo && hospital && !vacioVehiculo) {
      this.newVehiculoPacienteVoluntario.push({
        id: this.nextTodoId,
        firstName: this.firstName,
        lastName: this.lastName,
        genero: this.genero,
        estadoPersona: this.estadoPersona,
        documentoIdentificacion: this.documentoIdentificacion,
        tipoDocumentoPersona: this.tipoDocumentoPersona,
        menorEdad: this.menorEdad,
        identificado: this.identificado,
        fechaSalida: this.fechaSalida,
        fechaRegreso: this.fechaRegreso,
        horaSalida: this.horaSalida,
        horaRegreso: this.horaRegreso,
        voluntarioId: this.voluntarioId,
        voluntario,
        vehiculoId: this.vehiculoId,
        vehiculo,
        hospitalId: this.hospitalId,
        hospital,
        vacio: false,
      });
      this.nextTodoId += 1;
    } else {
      this.newVehiculoPacienteVoluntario.push({
        id: this.nextTodoId,
        firstName: '',
        lastName: '',
        genero: '',
        estadoPersona: false,
        documentoIdentificacion: '',
        tipoDocumentoPersona: '',
        menorEdad: false,
        identificado: false,
        fechaSalida: this.fechaSalida,
        fechaRegreso: this.fechaRegreso,
        horaSalida: this.horaSalida,
        horaRegreso: this.horaRegreso,
        voluntarioId: this.voluntarioId,
        voluntario,
        vehiculoId: this.vehiculoId,
        vehiculo,
        hospitalId: this.hospitalId,
        hospital,
        vacio: true,
      });
    }
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        this.$set(this.form, 'seccionalId', this.newSeccionales);
        this.$set(this.form, 'ubicacionExacta', this.data2.address);
        this.$set(this.form, 'latitud', this.data2.lat);
        this.$set(this.form, 'longitud', this.data2.lng);
        this.$set(this.form, 'voluntarioId', this.newVoluntarios);
        this.$set(this.form, 'pacienteVehiculoHospital', this.newVehiculoPacienteVoluntario);
        this.$set(this.form, 'fechaRealizada', this.form.fechaRealizada);
        this.$set(this.form, 'fechaSalida', this.fechaSalida);
        this.$set(this.form, 'fechaRegreso', this.fechaRegreso);
        console.log(this.form);
        await this.createEmergenciaRealizada({ emergenciaRealizada: this.form, vm: this });
        this.$router.push('/emergenciaRealizada');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
