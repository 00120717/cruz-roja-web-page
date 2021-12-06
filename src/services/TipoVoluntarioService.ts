import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class TipoVoluntarioService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/tipoVoluntario';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new TipoVoluntarioService();
