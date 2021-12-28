import BaseService from '@/services/core/BaseService';

class UsuarioService extends BaseService {
  apiVersion = '';

  apiResource = '/admin/usuario';
}

export default new UsuarioService();
