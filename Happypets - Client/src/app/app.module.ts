import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/account/register/register.component';
import {LoginComponent} from './components/account/login/login.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AboutComponent} from './components/main/about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/main/home/home.component';

import {MatSliderModule} from '@angular/material/slider';
import {CarouselComponent} from './components/main/home/carousel/carousel.component';
import {JumbotronComponent} from './components/main/home/jumbotron/jumbotron.component';
import {MeetTheTeamComponent} from './components/main/home/meet-the-team/meet-the-team.component';
import {ConnectLinksComponent} from './components/main/home/connect-links/connect-links.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/account/users/update-user/update-user.component';
import { UserListComponent } from './components/account/users/user-list/user-list.component';
import { UserDetailsComponent } from './components/account/users/user-details/user-details.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {FooterComponent} from './components/shared/footer/footer.component';


// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    CarouselComponent,
    JumbotronComponent,
    MeetTheTeamComponent,
    ConnectLinksComponent,
    UpdateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
