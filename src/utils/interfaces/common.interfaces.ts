import { IJwtRequest } from './secure.interfaces';

export interface  IPostRequest<T, P = {}> extends IMiddlewareRequest {
  body: T;
  params?: P
}

export interface IGetRequest<T = {}> extends IMiddlewareRequest {
  params?: T;
}

export interface IMiddlewareRequest {
  user?: IJwtRequest;
}

export interface IParamId {
  id: string;
}

export interface IPostWithFileRequest<T, P = {}> extends IPostRequest<T, P> {
  file: Express.Multer.File;
}
