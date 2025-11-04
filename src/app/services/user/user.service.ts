import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/auth/authRequest';
import { AuthResponse } from 'src/app/models/interfaces/auth/authResponse';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignUpUserRequest';
import { SignUpUserResponse } from 'src/app/models/interfaces/user/SignUpUserResponse';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = enviroment.API_URL

  constructor(private http: HttpClient) { }


signUpUser(requestData: SignUpUserRequest): Observable<SignUpUserResponse>{
    return this.http.post<SignUpUserResponse>(
      `${this.API_URL}/user`,
      requestData
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
     return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas)
  }

}
