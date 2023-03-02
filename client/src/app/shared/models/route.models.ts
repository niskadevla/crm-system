export interface IRouteConfig {
  name: string;
  path: string;
  fullPath: string;
}

export interface IRoutesConfig {
  login: IRouteConfig;
  register: IRouteConfig;
  overview: IRouteConfig;
  analytics: IRouteConfig;
  history: IRouteConfig;
  order: IRouteConfig;
  categories: IRouteConfig;
  newItem: IRouteConfig;
}

export interface IUrls {
  register: string;
  login: string;
  category: string;
  position: string;
  order: string;
  analytics: string;
}
