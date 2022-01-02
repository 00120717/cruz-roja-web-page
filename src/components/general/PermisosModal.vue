<template>
  <modal :show="showModal">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 id="renew-headline" class="text-xl font-medium leading-6 text-gray-900">
          Asignar permisos
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
              placeholder="Buscar permisos"
              type="search"
            >
          </div>
        </form>
        <div class="p-3 pb-8 mb-6 overflow-auto rounded h-80 bg-gray-50">
          <div v-for="(permiso, index) in filteredList" :key="index">
            <div class="flex items-center px-2 py-2 mb-2 bg-white rounded">
              <div class="flex-shrink-0 mr-3">
                <input-checkbox
                  :id="permiso.id"
                  v-model="isPermisoSelected[permiso.id]"
                  class="m-0"
                  style="margin:0"
                  :label="permiso.nombre"
                  @change-value="obtainValues"
                  @remove-value="removeValues"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <custom-button type="button" title="Cancelar" color="white" @click="cancel" />
          <custom-button type="button" title="Guardar" @click="addPermisos" />
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

interface Permiso {
  id: number;
  nombre: string;
}

@Component({
  components: {
    Modal,
    CustomButton,
    InputCheckbox,
  },
})
export default class PermisosModal extends Vue {
  @Prop({ type: Boolean, default: false }) readonly show!: boolean;
  @Prop(String) readonly title!: string;
  @Prop({ type: Array, default: [] }) list!: Permiso[];
  @Prop({ type: Array, default: [] }) readonly newPermisos!: Array<number>;
  @PropSync('show', Boolean) showModal!: boolean;
  searchField = '';
  tempPermisos: Array<number> = [];
  filteredList: Permiso[] = [];
  isPermisoSelected: {[key: number]: boolean} = {};

  mounted() {
    if (this.newPermisos) { this.tempPermisos = JSON.parse(JSON.stringify(this.newPermisos)); }
    if (this.list) { this.filteredList = JSON.parse(JSON.stringify(this.list)); }
  }

  @Watch('list', { immediate: true, deep: true })
  handleListChange(value: Permiso[]) {
    if (value) { this.filteredList = JSON.parse(JSON.stringify(value)); }
  }

  @Watch('newPermisos', { immediate: true, deep: true })
  handleNewPermisos(value: Array<number>) {
    if (value) {
      this.$set(this, 'tempPermisos', JSON.parse(JSON.stringify(this.newPermisos)));
      this.$set(this, 'tempPermisos', [...new Set(this.tempPermisos)]);
      this.filteredList.forEach((permiso: Permiso) => {
        this.$set(this.isPermisoSelected, `${permiso.id}`, this.tempPermisos.includes(permiso.id));
      });
    }
  }

  @Watch('tempPermisos', { immediate: true, deep: true })
  handleTempPermisos(value: Array<number>) {
    if (value) {
      this.filteredList.forEach((permiso: Permiso) => {
        this.$set(this.isPermisoSelected, `${permiso.id}`, value.includes(permiso.id));
      });
    }
  }

  @Emit('update-permisos')
  addPermisos() {
    this.showModal = false;
    return this.tempPermisos;
  }

  @Watch('searchField')
  filterPermisos(value: string) {
    this.filteredList = this.list.filter((permiso) => permiso.nombre.toLowerCase().includes(value.toLowerCase()));
  }

  obtainValues(value: number | string) {
    if (typeof value === 'number') {
      if (!this.tempPermisos.includes(value)) { this.tempPermisos.push(value); }
    }
  }

  removeValues(value: number | string) {
    if (typeof value === 'number') {
      const index = this.tempPermisos.indexOf(value);
      if (index > -1) { this.tempPermisos.splice(index, 1); }
    }
  }

  cancel() {
    this.$set(this, 'tempPermisos', JSON.parse(JSON.stringify(this.newPermisos)));
    this.$set(this, 'tempPermisos', [...new Set(this.tempPermisos)]);
    this.showModal = false;
  }
}
</script>
