import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class EstadoService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/estado';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new EstadoService();
