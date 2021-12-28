import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class TipoEmergenciaService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/tipoEmergencia';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new TipoEmergenciaService();
