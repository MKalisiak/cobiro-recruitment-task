import { DoesLogin } from 'src/app/interfaces/does-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { CobiroHubLoginBodyModel, CobiroHubLoginType, UserLoginModel } from '../domain/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements DoesLogin {

  constructor(
    private http: HttpClient
  ) { }

  public login(userLogin: UserLoginModel): Observable<any> { // using any only because return type is unknown
    const body: CobiroHubLoginBodyModel = {
      data: {
        type: CobiroHubLoginType.LOGIN,
        attributes: userLogin
      }
    };

    return this.http.post(env.BACKEND_API.LOGIN, body);
  }
}
