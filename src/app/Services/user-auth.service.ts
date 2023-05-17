import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private readonly JWT_TOKEN = "JWT_TOKEN"

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token)
  }

  public getToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN)
  }

  public removeToken(): void {
    localStorage.removeItem(this.JWT_TOKEN)
  }

  public isLoggedIn(): boolean {
    return !!this.getToken()
  }
}
