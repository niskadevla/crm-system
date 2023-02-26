import { environment } from '../../../environments/environment';

const {apiRoot} = environment;

export const urls = {
  register: `${apiRoot}/auth/register`,
  login: `${apiRoot}/auth/login`,
  categories: `${apiRoot}/category`
}