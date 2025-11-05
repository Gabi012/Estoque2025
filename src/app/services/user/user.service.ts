import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/auth/AuthResponse';
import { SignUpUserRequest } from 'src/app/models/interfaces/user/SignUpUserRequest';
import { SignUpUserResponse } from 'src/app/models/interfaces/user/SignUpUserResponse';
import { enviroment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = enviroment.API_URL

  constructor(private http: HttpClient, private cookieService: CookieService) { }


signUpUser(requestData: SignUpUserRequest): Observable<SignUpUserResponse>{
    return this.http.post<SignUpUserResponse>(
      `${this.API_URL}/user`,
      requestData
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
     return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas)
  }

  isLoggedIn(): boolean{
    const JWT_TOKEN = this.cookieService.get('USER_INFO');
    return JWT_TOKEN ? true : false;
  }

}
