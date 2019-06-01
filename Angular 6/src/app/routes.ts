import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './user-profile/home/home.component';
import { RomanceComponent } from './user-profile/romance/romance.component';
import { SelfhelpComponent } from './user-profile/selfhelp/selfhelp.component';
import { ThrillerComponent } from './user-profile/thriller/thriller.component';
import { FantasyComponent } from './user-profile/fantasy/fantasy.component';
import { AddbooksComponent } from './user-profile/addbooks/addbooks.component';
import { AddfantasyComponent } from './user-profile/addfantasy/addfantasy.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard],
        children:[
            {path:'',component:HomeComponent},
            {path:'romance',component:RomanceComponent},
            {path:'selfhelp',component:SelfhelpComponent},
            {path:'thriller',component:ThrillerComponent},
            {path:'fantasy',component:FantasyComponent},
            {path:'addbooks',component:AddbooksComponent},
            {path:'addnewbooks',component:AddfantasyComponent}
        ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }