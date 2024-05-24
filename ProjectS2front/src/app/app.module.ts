import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list'; // Make sure this import is correct
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppbarComponent } from './views/home/appbar/appbar.component';
import { FooterComponent } from './views/home/footer/footer.component';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ForgetComponent } from './views/auth/forget/forget.component';
import { CondidatComponent } from './views/condidat/condidat.component';
import { ConfirmationComponent } from './views/auth/confirmation/confirmation.component';
import { DashboardAdminComponent } from './views/dashboard/dashboard-admin/dashboard-admin.component';
import { CondidatListComponent } from './views/dashboard/dashboard-admin/condidat-list/condidat-list.component';
import { AppbarAdminComponent } from './views/dashboard/dashboard-admin/appbar-admin/appbar-admin.component';
import { PrecondidatListComponent } from './views/dashboard/dashboard-admin/precondidat-list/precondidat-list.component';
import { AuditionListComponent } from './views/dashboard/dashboard-admin/audition-list/audition-list.component';
import { DashboardUserComponent } from './views/dashboard/dashboard-user/dashboard-user.component';
import { AuditionComponent } from './views/audition/audition.component';
import { AjoutauditionComponent } from './views/ajoutaudition/ajoutaudition.component';
import { AddConcertComponent } from './views/dashboard/dashboard-admin/gestion-concert/add-concert/add-concert.component';
import { ConcertListComponent } from './views/dashboard/dashboard-admin/gestion-concert/concert-list/concert-list.component';
import { AppbarUserComponent } from './views/dashboard/dashboard-user/appbar-user/appbar-user.component';
import { RepetitionListComponent } from './views/dashboard/dashboard-user/repetition-list/repetition-list.component';
import { LeaveFormComponent } from './views/dashboard/dashboard-user/leave-form/leave-form.component';
import { ConcertListUserComponent } from './views/dashboard/dashboard-user/concert-list-user/concert-list-user.component';
import { UpdateconcertComponent } from './views/updateconcert/updateconcert.component';
import { LeaveAbsenceListComponent } from './views/dashboard/dashboard-admin/leave-absence-list/leave-absence-list.component';
import { LeaveAbsenceConfirmListComponent } from './views/dashboard/dashboard-admin/leave-absence-confirm-list/leave-absence-confirm-list.component';
import { LsiteCandidatconcertComponent } from './views/lsite-candidatconcert/lsite-candidatconcert.component';
import { AddRepetitionComponent } from './views/dashboard/dashboard-admin/gestion-repetition/add-repetition/add-repetition.component';
import { RepetitionListAdminComponent } from './views/dashboard/dashboard-admin/gestion-repetition/repetition-list-admin/repetition-list-admin.component';
import { AccountAcceptationComponent } from './views/dashboard/dashboard-admin/account-acceptation/account-acceptation.component';
import { OeuvreComponent } from './views/dashboard/dashboard-admin/oeuvre/oeuvre.component';
import { ConfirmationCompteComponent } from './views/auth/confirmation-compte/confirmation-compte.component';
import { ChangepasswordComponent } from './views/auth/changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    AppbarComponent,
    FooterComponent,
    CondidatListComponent,
    LoginComponent,
    ForgetComponent,
    CondidatComponent,
    ConfirmationComponent,
    DashboardAdminComponent,
    AppbarAdminComponent,
    PrecondidatListComponent,
    AuditionListComponent,
    DashboardUserComponent,
    AuditionComponent,
    AjoutauditionComponent,
    AddConcertComponent,
    ConcertListComponent,
    AppbarUserComponent,
    RepetitionListComponent,
    ConcertListUserComponent,
    UpdateconcertComponent,
    LeaveAbsenceListComponent,
    LeaveAbsenceConfirmListComponent,
    LeaveFormComponent,
    LsiteCandidatconcertComponent,
    AddRepetitionComponent,
    RepetitionListAdminComponent,
    AccountAcceptationComponent,
    OeuvreComponent,
    ConfirmationCompteComponent,
    ChangepasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
