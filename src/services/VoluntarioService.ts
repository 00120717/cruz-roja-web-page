import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class VoluntarioService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/voluntario';

  showString(id: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/${id}` });
  }

  destroyString(id: string): Promise<AxiosResponse> {
    return this.delete({ url: `${this.apiResource}/${id}` });
  }

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new VoluntarioService();
