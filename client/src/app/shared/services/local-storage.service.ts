import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | null {
    const token = localStorage.getItem(key);

    return token ? JSON.parse(token) : null;
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
