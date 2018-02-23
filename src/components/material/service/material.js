import { http } from '../../../config/services/config';

export default {
  listar: () => {
    return http.get('material.json');
  },
  listarPorData: (data) => {
    return http.get('material/' + data + '.json');
  },
}
