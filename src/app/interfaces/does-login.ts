import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { UserLoginModel } from "../domain/user-login.model";

export interface DoesLogin {
  login(userLogin: UserLoginModel): Observable<any> // using any only because return type is unknown
}

export const DOES_LOGIN = new InjectionToken<DoesLogin>('DOES_LOGIN');
