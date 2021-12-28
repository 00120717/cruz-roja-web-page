import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class SeccionalService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/seccional';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new SeccionalService();
