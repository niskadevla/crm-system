import { IJwtRequest } from './secure.interfaces';

export interface  IPostRequest<T, P = {}> extends IMiddlewareRequest {
  body: T;
  params?: P
}

export interface IGetRequest<T, U = {}> extends IMiddlewareRequest {
  params: T;
}

export interface IMiddlewareRequest {
  user?: IJwtRequest;
}

export interface IParamId {
  id: string;
}
