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
    return JSON.parse(JSON.stringify(localStorage.getItem(key)));
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
