import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class CuerpoFilialService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/cuerpoFilial';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new CuerpoFilialService();
