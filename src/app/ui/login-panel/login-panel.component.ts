import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginModel } from 'src/app/domain/user-login.model';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.required]
    })
  }

  controlHasErrors(controlName: string): boolean {
    const control = this.form.get(controlName)
    return control.dirty && control.touched && control.invalid;
  }

  onSubmit(): void {
    if (this.form.valid) {
      const userLogin: UserLoginModel = this.form.value;
      this.authService.login(userLogin).subscribe({
        next: response => console.log('Yeah, right...'),
        error: error => console.error(error)
      })
    }
  }

}
