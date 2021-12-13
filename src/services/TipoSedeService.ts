import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class TipoSedeService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/tipoSede';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new TipoSedeService();
