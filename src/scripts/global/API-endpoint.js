import CONFIG from '../data/Config';

const APIEndpoint = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) =>`${CONFIG.BASE_URL}/detail/${id}`,
};

export default APIEndpoint;
