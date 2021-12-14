import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class DepartamentoXMunicipioService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/departamentoXMunicipio';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new DepartamentoXMunicipioService();
