import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { map } from 'rxjs';
import { Property } from '../Models/property';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private userAuth: UserAuthService) { }

  //"User" related
  signinUser(user_creds: any) {
    this.http.post("http://127.0.0.1:8000/user/signin/", user_creds).subscribe(res => alert(res["response"]))
  }

  loginUser(user_creds) {
    this.http.post("http://127.0.0.1:8000/api/token/", user_creds).subscribe(res => {
      console.log(res["access"]) //test
      this.userAuth.setToken(res["access"])
    })
  }  


  //"Property" related
  fetchProperties() {
    return this.http.get<{[key: string]: Property}>("http://127.0.0.1:8000/properties/on-sale/")
    .pipe(map((res) => {
      const properties = []
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          properties.push({...res[key], id: key})
        }
      }
      return properties
    }))
  }

  fetchProperty() {
    // console.log(`http://127.0.0.1:8000/properties/show/${id}`) //test
    return this.http.get("http://127.0.0.1:8000/properties/show/1")
    .pipe(map((res) => {
      const property = res

      return property
    }))
  }

  updateProperty(){}

  deleteProperty(){}

}
