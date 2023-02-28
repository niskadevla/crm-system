import { environment } from '../../../environments/environment';

const {apiRoot} = environment;

export const urls = {
  register: `${apiRoot}/auth/register`,
  login: `${apiRoot}/auth/login`,
  category: `${apiRoot}/category`,
  position: `${apiRoot}/position`,
  order: `${apiRoot}/order`,
}