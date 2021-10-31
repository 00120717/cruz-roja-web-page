import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class RoleService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/roles';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new RoleService();
