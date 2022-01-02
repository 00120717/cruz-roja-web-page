<template>
  <modal :show="showModal">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 id="renew-headline" class="text-xl font-medium leading-6 text-gray-900">
          Asignar voluntarios
        </h3>
        <div class="mt-2 sm:flex sm:items-start sm:justify-between">
          <div class="max-w-xl text-sm leading-5 text-gray-500">
            <p
              id="renew-description"
            >
              <!-- TODO: Description of card section -->
            </p>
          </div>
        </div>
        <form
          class="flex w-full px-2 mt-6 mb-2 bg-gray-100 rounded-md md:ml-0"
          action="#"
          method="GET"
        >
          <label for="search_field" class="sr-only">Buscar</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              id="search_field"
              v-model="searchField"
              class="block w-full h-full py-3 pl-8 pr-3 text-gray-900 placeholder-gray-500 bg-transparent rounded-t-md focus:outline-none focus:placeholder-gray-400 sm:text-sm"
              placeholder="Buscar voluntarios"
              type="search"
            >
          </div>
        </form>
        <div class="p-3 pb-8 mb-6 overflow-auto rounded h-80 bg-gray-50">
          <div v-for="(voluntario, index) in filteredList" :key="index">
            <div class="flex items-center px-2 py-2 mb-2 bg-white rounded">
              <div class="flex-shrink-0 mr-3">
                <input-checkbox
                  :id="voluntario.id"
                  v-model="isVoluntarioSelected[voluntario.id]"
                  class="m-0"
                  style="margin:0"
                  :label="voluntario.nombreCompuesto"
                  @change-value="obtainValues"
                  @remove-value="removeValues"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <custom-button type="button" title="Cancelar" color="white" @click="cancel" />
          <custom-button type="button" title="Guardar" @click="addVoluntarios" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, PropSync, Emit, Watch,
} from 'vue-property-decorator';
import Modal from '@/components/ui/Modal.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import InputCheckbox from '@/components/ui/InputCheckbox.vue';

interface Voluntario {
  id: string;
  fechaInicio?: string;
  voluntarioCodigoCarnet?: string;
  firstName?: string;
  lastName?: string;
  genero?: string;
  fechaNacimiento?: string;
  nombreCompuesto: string;
  email?: string | null;
  estadoPersona?: boolean;
  documentoIdentificacion?: string;
  tipoDocumentoPersona?: string;
}

@Component({
  components: {
    Modal,
    CustomButton,
    InputCheckbox,
  },
})
export default class VoluntariosModal extends Vue {
  @Prop({ type: Boolean, default: false }) readonly show!: boolean;
  @Prop(String) readonly title!: string;
  @Prop({ type: Array, default: [] }) list!: Voluntario[];
  @Prop({ type: Array, default: [] }) readonly newVoluntarios!: Array<string>;
  @PropSync('show', Boolean) showModal!: boolean;
  searchField = '';
  tempVoluntarios: Array<string> = [];
  filteredList: Voluntario[] = [];
  isVoluntarioSelected: {[key: string]: boolean} = {};

  mounted() {
    if (this.newVoluntarios) { this.tempVoluntarios = JSON.parse(JSON.stringify(this.newVoluntarios)); }
    if (this.list) { this.filteredList = JSON.parse(JSON.stringify(this.list)); }
  }

  @Watch('list', { immediate: true, deep: true })
  handleListChange(value: Voluntario[]) {
    if (value) { this.filteredList = JSON.parse(JSON.stringify(value)); }
  }

  @Watch('newVoluntarios', { immediate: true, deep: true })
  handleNewVoluntarios(value: Array<string>) {
    if (value) {
      this.$set(this, 'tempVoluntarios', JSON.parse(JSON.stringify(this.newVoluntarios)));
      this.$set(this, 'tempVoluntarios', [...new Set(this.tempVoluntarios)]);
      this.filteredList.forEach((voluntario: Voluntario) => {
        this.$set(this.isVoluntarioSelected, `${voluntario.id}`, this.tempVoluntarios.includes(voluntario.id));
      });
    }
  }

  @Watch('tempVoluntarios', { immediate: true, deep: true })
  handleTempVoluntarios(value: Array<string>) {
    if (value) {
      this.filteredList.forEach((voluntario: Voluntario) => {
        this.$set(this.isVoluntarioSelected, `${voluntario.id}`, value.includes(voluntario.id));
      });
    }
  }

  @Emit('update-voluntarios')
  addVoluntarios() {
    this.showModal = false;
    return this.tempVoluntarios;
  }

  @Watch('searchField')
  filterVoluntarios(value: string) {
    this.filteredList = this.list.filter((voluntario) => voluntario.nombreCompuesto.toLowerCase().includes(value.toLowerCase()));
  }

  obtainValues(value: string | string) {
    if (typeof value === 'string') {
      if (!this.tempVoluntarios.includes(value)) { this.tempVoluntarios.push(value); }
    }
  }

  removeValues(value: string | string) {
    if (typeof value === 'string') {
      const index = this.tempVoluntarios.indexOf(value);
      if (index > -1) { this.tempVoluntarios.splice(index, 1); }
    }
  }

  cancel() {
    this.$set(this, 'tempVoluntarios', JSON.parse(JSON.stringify(this.newVoluntarios)));
    this.$set(this, 'tempVoluntarios', [...new Set(this.tempVoluntarios)]);
    this.showModal = false;
  }
}
</script>
