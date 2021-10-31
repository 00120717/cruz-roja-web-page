import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class GradeService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/grades';

  list(): Promise<AxiosResponse> {
    const url = `${this.apiResource}/list`;
    return this.get({ url });
  }
}

export default new GradeService();
