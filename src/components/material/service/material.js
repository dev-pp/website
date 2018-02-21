import { http } from '../../../config/services/config';

export default {
  listar: () => {
    return http.get('material.json');
  },
}
