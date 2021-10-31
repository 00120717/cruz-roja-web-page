import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class SectionService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/sections';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new SectionService();
