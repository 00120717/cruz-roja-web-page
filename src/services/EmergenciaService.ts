import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class EmergenciaService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/emergencia';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new EmergenciaService();
