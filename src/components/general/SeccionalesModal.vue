<template>
  <modal :show="showModal">
    <div class="bg-white shadow sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 id="renew-headline" class="text-xl font-medium leading-6 text-gray-900">
          Asignar seccionales
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
              placeholder="Buscar seccionales"
              type="search"
            >
          </div>
        </form>
        <div class="p-3 pb-8 mb-6 overflow-auto rounded h-80 bg-gray-50">
          <div v-for="(seccional, index) in filteredList" :key="index">
            <div class="flex items-center px-2 py-2 mb-2 bg-white rounded">
              <div class="flex-shrink-0 mr-3">
                <input-checkbox
                  :id="seccional.id"
                  v-model="isSeccionalSelected[seccional.id]"
                  class="m-0"
                  style="margin:0"
                  :label="seccional.nombre"
                  @change-value="obtainValues"
                  @remove-value="removeValues"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <custom-button type="button" title="Cancelar" color="white" @click="cancel" />
          <custom-button type="button" title="Guardar" @click="addSeccionales" />
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

interface Seccional {
  id: number;
  nombre: string;
  codigo: string;
}

@Component({
  components: {
    Modal,
    CustomButton,
    InputCheckbox,
  },
})
export default class SeccionalesModal extends Vue {
  @Prop({ type: Boolean, default: false }) readonly show!: boolean;
  @Prop(String) readonly title!: string;
  @Prop({ type: Array, default: [] }) list!: Seccional[];
  @Prop({ type: Array, default: [] }) readonly newSeccionales!: Array<number>;
  @PropSync('show', Boolean) showModal!: boolean;
  searchField = '';
  tempSeccionales: Array<number> = [];
  filteredList: Seccional[] = [];
  isSeccionalSelected: {[key: number]: boolean} = {};

  mounted() {
    if (this.newSeccionales) { this.tempSeccionales = JSON.parse(JSON.stringify(this.newSeccionales)); }
    if (this.list) { this.filteredList = JSON.parse(JSON.stringify(this.list)); }
  }

  @Watch('list', { immediate: true, deep: true })
  handleListChange(value: Seccional[]) {
    if (value) { this.filteredList = JSON.parse(JSON.stringify(value)); }
  }

  @Watch('newSeccionales', { immediate: true, deep: true })
  handleNewSeccionales(value: Array<number>) {
    if (value) {
      this.$set(this, 'tempSeccionales', JSON.parse(JSON.stringify(this.newSeccionales)));
      this.$set(this, 'tempSeccionales', [...new Set(this.tempSeccionales)]);
      this.filteredList.forEach((seccional: Seccional) => {
        this.$set(this.isSeccionalSelected, `${seccional.id}`, this.tempSeccionales.includes(seccional.id));
      });
    }
  }

  @Watch('tempSeccionales', { immediate: true, deep: true })
  handleTempSeccionales(value: Array<number>) {
    if (value) {
      this.filteredList.forEach((seccional: Seccional) => {
        this.$set(this.isSeccionalSelected, `${seccional.id}`, value.includes(seccional.id));
      });
    }
  }

  @Emit('update-seccionales')
  addSeccionales() {
    this.showModal = false;
    return this.tempSeccionales;
  }

  @Watch('searchField')
  filterSeccionales(value: string) {
    this.filteredList = this.list.filter((seccional) => seccional.nombre.toLowerCase().includes(value.toLowerCase()));
  }

  obtainValues(value: number | string) {
    if (typeof value === 'number') {
      if (!this.tempSeccionales.includes(value)) { this.tempSeccionales.push(value); }
    }
  }

  removeValues(value: number | string) {
    if (typeof value === 'number') {
      const index = this.tempSeccionales.indexOf(value);
      if (index > -1) { this.tempSeccionales.splice(index, 1); }
    }
  }

  cancel() {
    this.$set(this, 'tempSeccionales', JSON.parse(JSON.stringify(this.newSeccionales)));
    this.$set(this, 'tempSeccionales', [...new Set(this.tempSeccionales)]);
    this.showModal = false;
  }
}
</script>
