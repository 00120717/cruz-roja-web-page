<template>
  <main class="pb-40">
    <page-heading title="Nuevo Cuerpo Filial" :back-route="`/cuerpoFilial/${$route.params.id}`" :breadcrumbs="breadcrumbs" />
    <form-section>
      <ValidationObserver ref="form" tag="form" autocomplete="off" @submit.prevent="onSubmit">
        <div class="md:grid md:grid-cols-3 md:gap-8 ">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Cuerpo Filial
            </h3>
            <p
              class="mt-1 text-sm leading-5 text-gray-500"
            >
              Información del Cuerpo Filial
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="grid grid-cols-6 row-gap-2 col-gap-6">
              <div class="col-span-6 sm:col-span-4">
                <ValidationProvider
                  v-slot="{ errors }"
                  vid="nombreCuerpoFilial"
                  name="nombreCuerpoFilial"
                  tag="div"
                  rules="required"
                >
                  <input-group v-model="form.type" label="Cuerpo Filial" name="nombreCuerpoFilial" :error="errors[0]" />
                </ValidationProvider>
              </div>
            </div>
          </div>
        </div>
      </ValidationObserver>
    </form-section>
    <div class="w-full">
      <div class="flex items-center justify-end">
        <custom-button type="submit" class="ml-2" title="Guardar" :loading="isCuerpoFilialLoading" @click.prevent="onSubmit" />
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import PageHeading from '@/components/layout/PageHeading.vue';
import FormSection from '@/components/ui/FormSection.vue';
import CustomButton from '@/components/ui/CustomButton.vue';
import ToggleSelector from '@/components/ui/ToggleSelector.vue';
import InputGroup from '@/components/ui/InputGroup.vue';

const CuerpoFilialModel = namespace('cuerpoFilial');

@Component({
  components: {
    PageHeading,
    FormSection,
    CustomButton,
    ToggleSelector,
    InputGroup,
  },
})
export default class EditCuerpoFilialPage extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'CuerpoFilial', route: '/cuerpoFilial' },
    { name: 'Nuevo' },
  ]

  form: CuerpoFilial = {
    id: 0,
    nombreCuerpoFilial: '',
    encargado: '',
  };

  @CuerpoFilialModel.State('isLoading') isCuerpoFilialLoading!: boolean;
  @CuerpoFilialModel.State('cuerpoFilial') cuerpoFilial!: CuerpoFilial;
  @CuerpoFilialModel.Action('update') updateCuerpoFilial!: ({ cuerpoFilial, vm }: { cuerpoFilial: any; vm: any }) => ActionMethod;
  @CuerpoFilialModel.Action('show') fetchCuerpoFilial!: ({ id, vm }: { id: number; vm: any }) => ActionMethod;

  async mounted() {
    try {
      await this.fetchCuerpoFilial({ id: +this.$route.params.id, vm: this });
      this.setCurrentCuerpoiFilial();
    } catch (e) {
      (this as any).$snotify.error('Ha ocurrido un error');
    }
  }

  setCurrentCuerpoiFilial() {
    this.form = {
      ...this.cuerpoFilial,
    };
  }

  async onSubmit() {
    const isValid = await (this.$refs.form as any).validate();
    if (isValid) {
      try {
        await this.updateCuerpoFilial({ cuerpoFilial: this.form, vm: this });
        this.$router.push('/cuerpoFilial');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>
