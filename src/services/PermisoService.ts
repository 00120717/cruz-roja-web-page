import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class PermisoService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/permiso';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new PermisoService();
