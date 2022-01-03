<template>
   <main class="pb-40">
      <page-heading title="Reporte Emergencias Realizadas" back-route="/reporte" :breadcrumbs="breadcrumbs">
         <template slot="actions">
            <custom-button
               title="Descargar"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
                  v-for="(emergenciaRealizada, index) in emergenciaRealizadas"
                  :key="index"
                  :item="emergenciaRealizada.id"
                  :show="false"
                  :edit="false"
                  :remove="false"
                  >
                  <td
              class="px-6 py-4 text-sm font-medium leading-5 text-gray-900 whitespace-no-wrap"
            >
              <div class="flex items-center">
                <div class="">
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ emergenciaRealizada.identificadorFormulario }}
                  </div>
                </div>
              </div>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.ubicacionExacta }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ formattedDate(emergenciaRealizada.fechaRealizada) }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ formattedHour(emergenciaRealizada.fechaHoraLlamada) }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.telefono }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emisorEmergencia }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergencia.emergenciaNombre }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.voluntarios && emergenciaRealizada.voluntarios ? emergenciaRealizada.voluntarios.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaPaciente && emergenciaRealizada.emergenciaPaciente ? emergenciaRealizada.emergenciaPaciente.length : '0' }}
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap"
            >
              {{ emergenciaRealizada.emergenciaSeccional && emergenciaRealizada.emergenciaSeccional ? emergenciaRealizada.emergenciaSeccional.length : '0' }}
            </td>
               </table-item>
            </template>
         </simple-table-list>
         </div>
      </section>
    <loading :active="isEmergenciaLoading" :is-full-page="false" />
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

const EmergenciaRealizadaModel = namespace('emergenciaRealizada');

@Component({
  components: {
    PageHeading,
    CustomButton,
    SimpleTableList,
    TableItem,
    Loading,
  },
})
export default class ReporteEmergenciaRealizadaUbicacionFecha extends Vue {
  breadcrumbs: Breadcrumb[] = [
    { name: 'Administración' },
    { name: 'Reportes', route: '/reporte' },
    { name: 'Reporte Emergencias Realizadas' },
  ]

headers: Array<object> = [
  {
    name: 'Formulario #',
    key: 'identificadorFormulario',
  },
  {
    name: 'Ubicacion Exacta',
    key: 'ubicacionExacta',
  },
  {
    name: 'Fecha Realizada',
    key: 'fechaRealizada',
  },
  {
    name: 'Hora llamada',
    key: 'fechaHoraLlamada',
  },
  {
    name: 'Telefono',
    key: 'telefono',
  },
  {
    name: 'Emisor Emergencia',
    key: 'emisorEmergencia',
  },
  {
    name: 'Emergencia',
    key: 'emergenciaNombre',
  },
  {
    name: 'Voluntarios Involucrados #',
    key: 'voluntarios',
  },
  {
    name: 'Vehiculos Involucrados #',
    key: 'vehiculos',
  },
  {
    name: 'Pacientes Involucrados #',
    key: 'vehiculos',
  },
  {
    name: 'Hospitales Involucrados #',
    key: 'hospitales',
  },
  {
    name: 'Seccionales Involucrados #',
    key: 'seccionales',
  },
]

  id = 0
  fechaInicio = ''

  @EmergenciaRealizadaModel.State('emergenciaRealizadas') emergenciaRealizadas!: EmergenciaRealizada[];
  @EmergenciaRealizadaModel.State('isLoading') isEmergenciaLoading!: boolean;
  @EmergenciaRealizadaModel.Action('showReporteFechaUbicacion') showReporteFechaUbicacion!: ({
    id, fechaInicio, fechaFin, vm,
  }: { id: string; fechaInicio: string; fechaFin: string; vm: any }) => ActionMethod

  async mounted() {
    const { id, fechaInicio, fechaFin } = this.$route.params;
    const splittedInicio = fechaInicio.split('/');
    const stringNewInicio = `${splittedInicio[0]}%2F${splittedInicio[1]}%2F${splittedInicio[2]}`;
    const splittedFin = fechaFin.split('/');
    const stringNewFin = `${splittedFin[0]}%2F${splittedFin[1]}%2F${splittedFin[2]}`;
    await this.showReporteFechaUbicacion({
      id: String(id), fechaInicio: stringNewInicio, fechaFin: stringNewFin, vm: this,
    });
    console.log(this.emergenciaRealizadas);
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

    /* pdf.html(
      source.innerHTML, {
        x: 15,
        y: 15,
        width: 200,
        elementHandlers: specialElementHandlers,
      },
    ); */
    const { id, fechaInicio, fechaFin } = this.$route.params;

    const nombre = `${id}+${fechaInicio}+${fechaFin}.pdf`;
    pdf.fromHTML(
      source,
      margins.left,
      margins.top,
      {
        width: margins.width, // max width of content on PDF
        elementHandlers: specialElementHandlers,
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (dispose) => {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save(nombre);
      },
      margins,
    );

    /** WITH CSS */
    // eslint-disable-next-line new-cap
    /* const doc = new jspdf('l', 'pt', [1000, 1000]);
    doc.html(document.getElementById('contentPdf'), {
      callback: (pdf) => {
        pdf.save('web.pdf');
      },
      background: '#000',
      format: 'PNG',
      pagesplit: true,
    }); */
    /*
    domtoimage
      .toPng(this.$refs.contentPdf)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        // eslint-disable-next-line new-cap
        const doc = new jspdf({
          orientation: 'landscape',
          unit: 'mm',
          format: [500, 500],
        });
        doc.addImage(img, 'JPEG', 20, 20);
        const date = new Date();
        const filename = `timechart_${
          date.getFullYear()
        }${(`0${date.getMonth() + 1}`).slice(-2)
        }${(`0${date.getDate()}`).slice(-2)
        }${(`0${date.getHours()}`).slice(-2)
        }${(`0${date.getMinutes()}`).slice(-2)
        }${(`0${date.getSeconds()}`).slice(-2)
        }.pdf`;
        doc.save(filename);
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      }); */
  }
}
</script>
