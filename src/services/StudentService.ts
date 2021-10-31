import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class StudentService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/students';

  addSubject(id: number, payload: any): Promise<AxiosResponse> {
    const url = `/admin/students/${id}/add-subject`;
    return this.post({ url, payload });
  }

  updateNote(id: number, payload: any): Promise<AxiosResponse> {
    const url = `/admin/students/${id}/notes`;
    return this.post({ url, payload });
  }

  fetchNotes(id: number): Promise<AxiosResponse> {
    const url = `/admin/students/${id}/notes`;
    return this.get({ url });
  }
}

export default new StudentService();
