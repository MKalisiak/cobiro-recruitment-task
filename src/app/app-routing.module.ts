import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPanelComponent } from './ui/login-panel/login-panel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
