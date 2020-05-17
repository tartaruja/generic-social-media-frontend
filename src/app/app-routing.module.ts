import { RegistrationComponent } from './components/registration/registration.component';
import {NgModule} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from './components/user/user.component';

import {LoginComponent} from './components/login/login.component';

const routes: Routes = [

  { path: 'user', component: UserComponent },

  { path: 'login', component: LoginComponent },

  { path: 'registration', component: RegistrationComponent },

  {path : '', component : LoginComponent}

];

@NgModule({

  imports: [

    RouterModule.forRoot(routes)

  ],

  exports: [

    RouterModule

  ],

  declarations: []

})

export class AppRoutingModule { }
