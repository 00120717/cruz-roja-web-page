import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class VehiculoService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/vehiculo';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new VehiculoService();
