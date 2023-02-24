import { IRouteConfig } from '../models/route.models';

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

export const ROUTE_CONFIGS = {
  login,
  register
}