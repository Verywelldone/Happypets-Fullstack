import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/account/login/login.component';
import {RegisterComponent} from './components/account/register/register.component';
import {AboutComponent} from './components/main/about/about.component';
import {HomeComponent} from './components/main/home/home.component';
import {UserListComponent} from './components/account/users/user-list/user-list.component';
import {UpdateUserComponent} from './components/account/users/update-user/update-user.component';
import {UserDetailsComponent} from './components/account/users/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'details/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
