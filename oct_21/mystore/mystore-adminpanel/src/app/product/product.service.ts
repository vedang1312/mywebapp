import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private url = 'http://localhost:4000/product'

  constructor(private http: HttpClient) { }

  getProducts() {

    // send the token along with the request
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage['token']
      })
    }

    return this.http.get(this.url, httpOptions)
  }
}
