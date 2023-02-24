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

const overview: IRouteConfig = {
  name: 'overview',
  path: 'overview',
  fullPath: '/overview'
}

export const ROUTE_CONFIGS = {
  login,
  register,
  overview
}