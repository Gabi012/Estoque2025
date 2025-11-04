import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authResponse } from 'src/app/models/interfaces/auth/authRequest';
import { authRequest } from 'src/app/models/interfaces/auth/authResponse';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignUpUserRequest';
import { SignUpUserResponse } from 'src/app/models/interfaces/user/SignUpUserResponse';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = enviroment.API_URL

  constructor(private http: HttpClient) { }


signUpUser(resquestDatas: SignUpUserRequest): Observable<SignUpUserResponse>{
  return this.http.post<SignUpUserResponse>(`${this.API_URL}/user`, {resquestDatas})
}

authUser(requestDatas: authRequest): Observable<authResponse>{
  return this.http.post<authResponse>(`${this.API_URL}/auth`, {requestDatas});
}

}
