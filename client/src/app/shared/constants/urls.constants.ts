import { environment } from '../../../environments/environment';
import { IUrls } from '../models/route.models';

const { apiRoot } = environment;

export const urls: IUrls = {
  register: `${apiRoot}/auth/register`,
  login: `${apiRoot}/auth/login`,
  category: `${apiRoot}/category`,
  position: `${apiRoot}/position`,
  order: `${apiRoot}/order`,
  analytics: `${apiRoot}/analytics`
};
