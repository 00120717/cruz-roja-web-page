import { AxiosResponse } from 'axios';
import BaseService from '@/services/core/BaseService';

class StudentService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/voluntario';

  addSubject(id: number, payload: any): Promise<AxiosResponse> {
    const url = `/admin/voluntario/${id}/add-subject`;
    return this.post({ url, payload });
  }

  updateNote(id: number, payload: any): Promise<AxiosResponse> {
    const url = `/admin/voluntario/${id}/notes`;
    return this.post({ url, payload });
  }

  fetchNotes(id: number): Promise<AxiosResponse> {
    const url = `/admin/voluntario/${id}/notes`;
    return this.get({ url });
  }

  showString(id: string): Promise<AxiosResponse> {
    return this.get({ url: `${this.apiResource}/${id}` });
  }

  destroyString(id: string): Promise<AxiosResponse> {
    return this.delete({ url: `${this.apiResource}/${id}` });
  }
}

export default new StudentService();
