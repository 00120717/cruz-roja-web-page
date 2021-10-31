import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class SubjectService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/subjects';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new SubjectService();
