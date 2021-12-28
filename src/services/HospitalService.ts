import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class HospitalService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/hospital';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new HospitalService();
