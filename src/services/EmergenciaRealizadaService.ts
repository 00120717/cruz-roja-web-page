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
}

export default new EmergenciaRealizadaService();
