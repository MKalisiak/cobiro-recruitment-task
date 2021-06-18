export interface UserLoginModel {
  email: string;
  password: string;
}

export interface CobiroHubLoginBodyModel {
  data: {
    type: CobiroHubLoginType,
    attributes: UserLoginModel
  }
}

export enum CobiroHubLoginType {
  LOGIN = 'login'
}
