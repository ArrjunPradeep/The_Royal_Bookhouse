// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FooterComponent } from './user-profile/footer/footer.component';
import { HomeComponent } from './user-profile/home/home.component';
import { MenuComponent } from './user-profile/menu/menu.component';
import { RomanceComponent } from './user-profile/romance/romance.component';
import { SelfhelpComponent } from './user-profile/selfhelp/selfhelp.component';
import { ThrillerComponent } from './user-profile/thriller/thriller.component';
import { FantasyComponent } from './user-profile/fantasy/fantasy.component';
import { AddbooksComponent } from './user-profile/addbooks/addbooks.component';
import { AddfantasyComponent } from './user-profile/addfantasy/addfantasy.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    RomanceComponent,
    SelfhelpComponent,
    ThrillerComponent,
    FantasyComponent,
    AddbooksComponent,
    AddfantasyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
