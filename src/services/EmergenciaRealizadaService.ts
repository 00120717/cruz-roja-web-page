import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class EmergenciaRealizadaService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/emergenciaRealizada';

  showString(id: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/${id}` });
  }

  destroyString(id: string): Promise<AxiosResponse> {
    return this.delete({ url: `${this.apiResource}/${id}` });
  }

  showReporteFechaUbicacion(id: string, fechaInicio: string, fechaFin: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/list-reporte-fecha-ubicacion/${id}/${fechaInicio}/${fechaFin}` });
  }

  showReporteFechaTipo(id: string, fechaInicio: string, fechaFin: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/list-reporte-fecha-tipo/${id}/${fechaInicio}/${fechaFin}` });
  }
}

export default new EmergenciaRealizadaService();
