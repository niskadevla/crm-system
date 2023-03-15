import { IRouteConfig, IRoutesConfig } from '../models/route.models';

const login: IRouteConfig = {
  name: 'login',
  path: 'login',
  fullPath: '/login'
}

const register: IRouteConfig = {
  name: 'register',
  path: 'signup',
  fullPath: '/signup'
}

const overview: IRouteConfig = {
  name: 'overview',
  path: 'overview',
  fullPath: '/overview'
}

const analytics: IRouteConfig = {
  name: 'analytics',
  path: 'analytics',
  fullPath: '/analytics'
}

const history: IRouteConfig = {
  name: 'history',
  path: 'history',
  fullPath: '/history'
}

const order: IRouteConfig = {
  name: 'order',
  path: 'order',
  fullPath: '/order'
};

const categories: IRouteConfig = {
  name: 'categories',
  path: 'categories',
  fullPath: '/categories'
};

const newItem: IRouteConfig = {
  name: 'new',
  path: 'new',
  fullPath: '/new'
}

export const ROUTE_CONFIGS: IRoutesConfig = {
  login,
  register,
  overview,
  analytics,
  history,
  order,
  categories,
  newItem
}