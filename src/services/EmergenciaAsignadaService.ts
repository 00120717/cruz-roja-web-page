import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class EmergenciaAsignadaService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/emergenciaAsignada';

  showString(id: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/${id}` });
  }

  destroyString(id: string): Promise<AxiosResponse> {
    return this.delete({ url: `${this.apiResource}/${id}` });
  }
}

export default new EmergenciaAsignadaService();
