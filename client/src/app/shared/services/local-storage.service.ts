import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem<T>(key: string): T | null {
    const token: string | null = localStorage.getItem(key);

    return token ? JSON.parse(token) : null;
  }

  public clearStorage(): void {
    localStorage.clear();
  }
}
