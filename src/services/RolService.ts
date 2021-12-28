import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class RolService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/rol';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new RolService();
