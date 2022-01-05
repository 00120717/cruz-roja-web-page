<template>
   <main class="pb-40">
      <page-heading title="Reporte Voluntarios Sede" back-route="/reporte" :breadcrumbs="breadcrumbs">
         <template slot="actions">
            <custom-button
               title="Descargar PDF"
               color="secondary"
               size="small"
               @click="downloadWithCSS2"
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
                        d="M17.064,4.656l-2.05-2.035C14.936,2.544,14.831,2.5,14.721,2.5H3.854c-0.229,0-0.417,0.188-0.417,0.417v14.167c0,0.229,0.188,0.417,0.417,0.417h12.917c0.229,0,0.416-0.188,0.416-0.417V4.952C17.188,4.84,17.144,4.733,17.064,4.656M6.354,3.333h7.917V10H6.354V3.333z M16.354,16.667H4.271V3.333h1.25v7.083c0,0.229,0.188,0.417,0.417,0.417h8.75c0.229,0,0.416-0.188,0.416-0.417V3.886l1.25,1.239V16.667z M13.402,4.688v3.958c0,0.229-0.186,0.417-0.417,0.417c-0.229,0-0.417-0.188-0.417-0.417V4.688c0-0.229,0.188-0.417,0.417-0.417C13.217,4.271,13.402,4.458,13.402,4.688"
                        />
                  </svg>
               </template>
            </custom-button>
         </template>
      </page-heading>
      <section>
        <div ref="contentPdf" id="contentPdf">
         <simple-table-list
            :headers="headers"
            >
            <template slot="items">
               <table-item
                  v-for="(voluntario, index) in voluntarioList"
                  :key="index"
                  :item="voluntario.id"
                  :show="false"
                  :edit="false"
                  :remove="false"
                  >
                  <td
              class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
            >
              {{ voluntario.voluntarioCodigoCarnet }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              <div class="flex items-center">
                <div class="">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ (`${voluntario.persona.firstName} ${voluntario.persona.lastName}`) }}
                  </div>
                </div>
              </div>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.persona.username }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.persona.documentoIdentificacion }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.persona.tipoDocumentoPersona == 'D' ? 'DUI' : (voluntario.persona.tipoDocumentoPersona == 'NIT' ? 'NIT' : 'Pasaporte' ) }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.persona.genero == 'M'? 'Masculino' : 'Femenino' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.sede ? voluntario.sede.nombre : 'N/A' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.tipoVoluntario ? voluntario.tipoVoluntario.nombreTipoVoluntario : 'N/A' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.cuerpoFilial ? voluntario.cuerpoFilial.nombreCuerpoFilial : 'N/A' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.estado ? voluntario.estado.estadoVoluntario : 'N/A' }}
              <!--<active-indicator :status="Boolean(voluntario.estado.estadoVoluntario)" />-->
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ voluntario.modalidad ? voluntario.modalidad.nombreModalidad : 'N/A' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-center text-gray-500 whitespace-no-wrap inline-flex justify-center items-center"
            >
              <active-indicator :status="Boolean(voluntario.persona.estadoPersona)" />
            </td>
               </table-item>
            </template>
         </simple-table-list>
         </div>
      </section>
    <loading :active="isVoluntarioLoading" :is-full-page="false" />
   </main>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ActionMethod } from 'vuex';
import jspdf from 'jspdf';
import CustomButton from '@/components/ui/CustomButton.vue';
import PageHeading from '@/components/layout/PageHeading.vue';
import SimpleTableList from '@/components/ui/SimpleTableList.vue';
import TableItem from '@/components/ui/Table/TableItem.vue';
import Loading from '@/components/ui/Loading.vue';

interface Breadcrumb {
  name: string;
  route?: string;
}

const VoluntarioModel = namespace('voluntario');

@Component({
  components: {
    PageHeading,
    CustomButton,
    SimpleTableList,
    TableItem,
    Loading,
  },
})
export default class ReporteEmergenciaRealizadaTipoFecha extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Reportes', route: '/reporte' },
    { name: 'Reporte Voluntarios Sede' },
  ]

headers: Array<object> = [
  {
    name: 'Carnet',
    key: 'voluntarioCodigoCarnet',
  },
  {
    name: 'Nombre Completo',
    key: 'name',
  },
  {
    name: 'Username',
    key: 'username',
  },
  {
    name: 'Documento de Identificacion',
    key: 'documentoIdentificacion',
  },
  {
    name: 'Tipo de Documento de Identificacion',
    key: 'tipoDocumentoPersona',
  },
  {
    name: 'Genero',
    key: 'genero',
  },
  {
    name: 'Sede',
    key: 'sede',
  },
  {
    name: 'Tipo Voluntario',
    key: 'nombreTipoVoluntario',
  },
  {
    name: 'Cuerpo Filial',
    key: 'nombreCuerpoFilial',
  },
  {
    name: 'Estado Voluntario',
    key: 'estadoVoluntario',
  },
  {
    name: 'Modalidad',
    key: 'nombreModalidad',
  },
  {
    name: 'Estado',
    key: 'estadoPersona',
  },
]

  @VoluntarioModel.State('voluntarioList') voluntarioList!: Voluntario[];
  @VoluntarioModel.State('isLoading') isVoluntarioLoading!: boolean;
  @VoluntarioModel.Action('showReporteSede') showReporteSede!: (vm: any) => ActionMethod;

  async mounted() {
    await this.showReporteSede(this);
    console.log(this.voluntarioList);
  }

  formattedDate(date: string) {
    if (date) {
      const newDate = new Date(date);
      return `${newDate.toISOString().substring(8, 10)}/${newDate.toISOString().substring(5, 7)}/${newDate.toISOString().substring(0, 4)}`;
    }
  }

  formattedHour(date: string) {
    if (date) {
      const newDate = new Date(date);
      return `${newDate.toISOString().substring(11, 16)}`;
    }
  }

  downloadWithCSS2() {
    // eslint-disable-next-line new-cap
    const pdf = new jspdf('l', 'px', 'a0');
    const source = document.getElementById('contentPdf');

    const margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522,
    };

    const specialElementHandlers = {
      // eslint-disable-next-line func-names
      '#bypassme': function (element, renderer) {
        return true;
      },
    };

    const nombre = `${this.voluntarioList.length}.pdf`;
    pdf.fromHTML(
      source,
      margins.left,
      margins.top,
      {
        width: margins.width,
        elementHandlers: specialElementHandlers,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (dispose) => {
        pdf.save(nombre);
      },
      margins,
    );
  }
}
</script>
