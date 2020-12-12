import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private url = 'http://localhost:4000/admins'

  constructor(private http: HttpClient) {}

  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + "/signin", body)
  }
}
