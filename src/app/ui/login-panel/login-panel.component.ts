import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginModel } from 'src/app/domain/user-login.model';
import { DoesLogin, DOES_LOGIN } from 'src/app/interfaces/does-login';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(DOES_LOGIN) private loginService: DoesLogin
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.required]
    })
  }

  controlHasError(controlName: string, errorName: string): boolean {
    const control = this.form.get(controlName)
    return control && control.dirty && control.touched && control.invalid && control.hasError(errorName);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const userLogin: UserLoginModel = this.form.value;
      this.loginService.login(userLogin).subscribe({
        next: response => console.log('Yeah, right...'),
        error: error => console.error(error)
      })
    }
  }

}
