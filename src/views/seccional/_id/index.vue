<template>
  <main class="pb-40">
    <page-heading title="Detalle seccional" back-route="/seccional" :breadcrumbs="breadcrumbs">
      <template slot="actions">
        <custom-button
          title="Editar"
          color="white"
          size="small"
          class="mr-2"
          :to="`/seccional/${seccional.id}/edit`"
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
    <section v-if="seccional">
      <div class="overflow-hidden bg-white border border-gray-100 shadow sm:rounded-lg">
        <div class="px-4 py-5 border-b border-gray-100 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Seccional #{{ seccional.id }}
          </h3>
          <p class="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
            Información general de la Seccional {{ seccional.codigo }}.
          </p>
        </div>
        <div>
          <dl>
            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Nombre
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ seccional.nombre }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Código
              </dt>
              <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                {{ seccional.codigo }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Dirección
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ seccional.direccion }}
              </dd>
            </div>
            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium leading-5 text-gray-500">
                Tipo Sede
              </dt>
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
              >
                {{ seccional.tipoSede.nombreTipoSede }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
    <loading :active="isSeccionalLoading" :is-full-page="false" />
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

const SeccionalModel = namespace('seccional');

@Component({
  components: {
    PageHeading,
    CustomButton,
    ActiveIndicator,
    Loading,
  },
})
export default class ShowSeccionalPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Seccional', route: '/seccional' },
    { name: 'Detalle' },
  ]

  @SeccionalModel.State('isLoading') isSeccionalLoading!: boolean;
  @SeccionalModel.State('seccional') seccional!: Seccional;
  @SeccionalModel.Action('show') fetchSeccional!: ({ id, vm }: { id: number; vm: any }) => ActionMethod

  async mounted() {
    const { id } = this.$route.params;
    await this.fetchSeccional({ id: +id, vm: this });
    if (!this.seccional.id) {
      this.redirectBack();
    }
  }

  redirectBack() {
    this.$router.push('/seccional');
  }
}
</script>
