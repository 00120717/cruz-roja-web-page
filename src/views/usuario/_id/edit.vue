<template>
  <main class="pb-40">
    <page-heading title="Edición usuario" :back-route="`/usuario/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Usuario
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del usuario
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="username"
                  name="username"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.username" label="Username" name="username" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="name"
                  name="nombre"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.firstName" label="Nombres" name="name" :error="errors[0]" />
                </ValidationProvider>
              </div>
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="lastname"
                  name="apellidos"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.lastName" label="Apellidos" name="lastname" :error="errors[0]" />
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="contrasenia"
                  name="contraseña"
                  tag="div"
                  rules="min:8"
                >
                  <input-group
                    id="contrasenia"
                    v-model="form.contrasenia"
                    label="Contraseña"
                    type="contrasenia"
                    name="contrasenia"
                    :error="errors[0]"
                  />
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="email"
                  name="correo electrónico"
                  tag="div"
                  rules="email"
                >
                  <input-group
                    id="signin-email"
                    v-model="form.email"
                    label="Correo electrónico"
                    name="email"
                    :error="errors[0]"
                  />
                </ValidationProvider>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="rol"
                  name="rol"
                  tag="div"
                  rules="required"
                >
                  <input-select
                    v-model="form.rolId"
                    label="Rol"
                    placeholder="Seleccionar"
                    :options="rolList"
                    name="rol"
                    display-name="name"
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
                    display-name="name"
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
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isUsuarioLoading" @click.prevent="onSubmit" />
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
import InputMask from '@/components/ui/InputMask.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const UsuarioModel = namespace('usuario');
const RolModel = namespace('rol');
const SedeModel = namespace('sede');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputSelect,
    InputGroup,
    InputMask,
  },
})
export default class NewUsuarioPage extends Vue {
  form: Usuario = {
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    sedeId: 0,
    contrasenia: '',
    rolId: 0,
    estadoPersona: true,
  }

  breadcrumbs: Breadcrumb[] =[
    { name: 'Administración' },
    { name: 'Usuarios', route: '/usuario' },
    { name: 'Nuevo' },
  ]

  @RolModel.State('rolList') rolList!: Rol[];
  @RolModel.Action('list') fetchRolList!: (vm: any) => ActionMethod;
  @SedeModel.State('sedeList') sedeList!: Sede[];
  @SedeModel.Action('list') fetchSedeList!: (vm: any) => ActionMethod;
  @UsuarioModel.State('isLoading') isUsuarioLoading!: boolean;
  @UsuarioModel.State('usuario') currentUsuario!: Usuario;
  @UsuarioModel.Action('show') showUsuario!: ({ id, vm }: { id: string; vm: any }) => ActionMethod;
  @UsuarioModel.Action('update') updateUser!: ({ usuario, vm }: { usuario: any; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.showUsuario({ id: String(this.$route.params.id), vm: this });
      this.setCurrentUser();
      await this.fetchRolList(this);
      await this.fetchSedeList(this);
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentUser() {
    this.form = {
      ...this.currentUsuario,
    };
    this.form.rolId = this.currentUsuario?.rol?.id ?? 0;
    this.form.sedeId = this.currentUsuario?.sede?.id ?? 0;
  }

  currentRole() {
    return this.rolList.find((rol) => rol.id === this.form.rolId);
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateUser({ usuario: this.form, vm: this });
        this.$router.push('/usuario');
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
}
</script>
