<template>
  <main class="pb-40">
    <page-heading title="Edición rol" :back-route="`/rol/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Rol
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del rol
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
                  <input-group v-model="form.name" label="Nombre" name="name" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="type"
                  name="tipo"
                  tag="div"
                  rules="required"
                >
                  <input-select
                    v-model="form.type"
                    label="Tipo"
                    placeholder="Seleccionar"
                    :options="typesList"
                    name="type"
                    display-name="name"
                    :error="errors[0]"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Permisos
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Permisos a asignar
            </p>
          </div>
          <div class="mt-5 mb-4 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div v-if="newRolPermiso && newRolPermiso.length > 0" class="col-span-6 mt-4 sm:col-span-4">
                <span
                  v-for="(permission, index) in newRolPermiso"
                  :key="index"
                  class="inline-flex px-3 py-2 mb-2 mr-2 text-xs font-semibold leading-5 text-green-700 bg-green-100 rounded-full"
                >{{ permission.name }}</span>
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
                  title="Asignar permisos"
                  @click="showPermissionsModal = true"
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
      <loading :active="isRolLoading" :is-full-page="false" />
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isRolLoading" @click.prevent="onSubmit" />
      </div>
    </div>
    <permissions-modal
      :show="showPermissionsModal"
      :new-permissions="newPermiso"
      :list="permisoList"
      @update:show="showPermissionsModal = false"
      @update-permissions="updatenewPermiso"
    />
  </main>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ActionMethod } from 'vuex';
import { namespace } from 'vuex-class';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputSelect from '@/components/ui/InputSelect.vue';
import InputGroup from '@/components/ui/InputGroup.vue';
import InputMask from '@/components/ui/InputMask.vue';
import PermissionsModal from '@/components/general/PermissionsModal.vue';
import Loading from '@/components/ui/Loading.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const RolModel = namespace('rol');
const PermissionModel = namespace('permissions');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
    InputMask,
    PermissionsModal,
    Loading,
  },
})
export default class EditRolPage extends Vue {
  showPermissionsModal = false;
  newPermiso: Array<number> = [];
  newRolPermiso: Permiso[] = [];
  form = {
    nombre: '',
    tipo: '',
    permissionId: [],
  }

  typesList = [
    { id: 'superadmin', name: 'Superadmin' },
    { id: 'admin', name: 'Administrador' },
    { id: 'voluntario', name: 'Voluntario' },
  ]

  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Roles', route: '/rol' },
    { name: 'Nuevo' },
  ]

  @RolModel.State('isLoading') isRolLoading!: boolean;
  @RolModel.State('rol') currentRol!: Rol;
  @RolModel.Action('update') updateRol!: ({ rol, vm }: { rol: any; vm: any }) => ActionMethod;
  @RolModel.Action('show') fetchRol!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;
  @PermissionModel.Action('list') fetchPermisoList!: (vm: any) => ActionMethod;
  @PermissionModel.State('isLoading') isPermisoLoading!: boolean;
  @PermissionModel.State('permisoList') permisoList!: Permission[];

  async mounted() {
    try {
      await this.fetchRol({ id: +this.$route.params.id, vm: this });
      await this.fetchPermisoList(this);
      this.setCurrentRol();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  @Watch('newPermiso', { immediate: true, deep: true })
  handleNewPermissionChange(value: Array<number>) {
    if (value && this.permisoList) {
      this.newRolPermiso = this.permisoList.filter((permission: Permiso) => value.includes(permission.id));
    }
  }

  setCurrentRol() {
    const { permissions } = this.currentRol;
    this.$set(this.form, 'id', this.currentRol.id);
    this.$set(this.form, 'nombre', this.currentRol.nombre);
    this.$set(this.form, 'tipo', this.currentRol.tipo);
    this.newPermiso = permissions.map((permission: Permiso) => permission.id);
  }

  updatenewPermiso(value: Array<number>) {
    this.newPermiso = value;
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        this.$set(this.form, 'permissionId', this.newPermiso);
        await this.updateRol({ rol: this.form, vm: this });
        this.$router.push('/rol');
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
}
</script>
