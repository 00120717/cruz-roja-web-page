<template>
  <main class="pb-40">
    <page-heading title="Detalle Emergencia" back-route="/emergencia" :breadcrumbs="breadcrumbs">
      <template slot="actions">
        <custom-button
          title="Editar"
          color="white"
          size="small"
          class="mr-2"
          :to="`/emergencia/${emergencia.id}/edit`"
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
              <path
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </template>
        </custom-button>
      </template>
    </page-heading>
    <section v-if="emergencia">
      <div class="overflow-hidden bg-white border border-gray-100 shadow sm:rounded-lg">
        <div class="px-4 py-5 border-b border-gray-100 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Emergencia #{{ emergencia.id }}
          </h3>
          <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
            Información general de la Emergencia {{ emergencia.emergenciaCodigo }}.
          </p>
        </div>
        <div>
          <dl>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Nombre
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ emergencia.emergenciaNombre }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Código
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ emergencia.emergenciaCodigo }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Descripcion
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergencia.emergenciaDescripcion }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Tipo emergencia
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergencia.tipoEmergencia.tipoEmergencia }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Inicio de la Emergencia
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergencia.emergenciaInicio }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Fin de la Emergencia
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ emergencia.emergenciaFinal }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <loading :active="isEmergenciaLoading" :is-full-page="false" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import PageHeading from '@/components/layout/PageHeading.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import ActiveIndicator from '@/components/ui/ActiveIndicator.vue';
import Loading from '@/components/ui/Loading.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const EmergenciaModel = namespace('emergencia');

@Component({
  components: {
    PageHeading,
    CustomButton,
    ActiveIndicator,
    Loading,
  },
})
export default class ShowEmergenciaPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Emergencia', route: '/emergencia' },
    { name: 'Detalle' },
  ]

  @EmergenciaModel.State('isLoading') isEmergenciaLoading!: boolean;
  @EmergenciaModel.State('emergencia') emergencia!: Emergencia;
  @EmergenciaModel.Action('show') fetchEmergencia!: ({ id, vm }: { id: number; vm: any }) => ActionMethod

  async mounted() {
    const { id } = this.$route.params;
    await this.fetchEmergencia({ id: +id, vm: this });
    if (!this.emergencia.id) {
      this.redirectBack();
    }
  }

  redirectBack() {
    this.$router.push('/emergencia');
  }
}
</script>
