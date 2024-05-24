import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/auth/login/login.component';
import { CondidatComponent } from './views/condidat/condidat.component';
import { ConfirmationComponent } from './views/auth/confirmation/confirmation.component';
import { DashboardAdminComponent } from './views/dashboard/dashboard-admin/dashboard-admin.component';
import { CondidatListComponent } from './views/dashboard/dashboard-admin/condidat-list/condidat-list.component';
import { PrecondidatListComponent } from './views/dashboard/dashboard-admin/precondidat-list/precondidat-list.component';
import { AuditionComponent } from './views/audition/audition.component';
import { AjoutauditionComponent } from './views/ajoutaudition/ajoutaudition.component';
import { AuditionListComponent } from './views/dashboard/dashboard-admin/audition-list/audition-list.component';
import { AddConcertComponent } from './views/dashboard/dashboard-admin/gestion-concert/add-concert/add-concert.component';
import { DashboardUserComponent } from './views/dashboard/dashboard-user/dashboard-user.component';
import { ConcertListUserComponent } from './views/dashboard/dashboard-user/concert-list-user/concert-list-user.component';
import { RepetitionListComponent } from './views/dashboard/dashboard-user/repetition-list/repetition-list.component';
import { LeaveFormComponent } from './views/dashboard/dashboard-user/leave-form/leave-form.component';
import { ConcertListComponent } from './views/dashboard/dashboard-admin/gestion-concert/concert-list/concert-list.component';
import { UpdateconcertComponent } from './views/updateconcert/updateconcert.component';
import { LeaveAbsenceConfirmListComponent } from './views/dashboard/dashboard-admin/leave-absence-confirm-list/leave-absence-confirm-list.component';
import { LeaveAbsenceListComponent } from './views/dashboard/dashboard-admin/leave-absence-list/leave-absence-list.component';
import { LsiteCandidatconcertComponent } from './views/lsite-candidatconcert/lsite-candidatconcert.component';
import { AddRepetitionComponent } from './views/dashboard/dashboard-admin/gestion-repetition/add-repetition/add-repetition.component';
import { RepetitionListAdminComponent } from './views/dashboard/dashboard-admin/gestion-repetition/repetition-list-admin/repetition-list-admin.component';
import { AccountAcceptationComponent } from './views/dashboard/dashboard-admin/account-acceptation/account-acceptation.component';
import { OeuvreComponent } from './views/dashboard/dashboard-admin/oeuvre/oeuvre.component';
import { ConfirmationCompteComponent } from './views/auth/confirmation-compte/confirmation-compte.component';
import { ChangepasswordComponent } from './views/auth/changepassword/changepassword.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'confirmation/:token', component: ConfirmationComponent },
  { path: 'condidat', component: CondidatComponent },
  { path: 'audition', component: AuditionComponent },
  { path: 'ajoutaudition/:id', component: AjoutauditionComponent },
  { path: 'home', component: HomeComponent },
  {path: 'updateconcert/:id',component:UpdateconcertComponent},
  { path: 'confirmation-compte/:token', component: ConfirmationCompteComponent },


  { path: 'dashboard-admin', component: DashboardAdminComponent, children:[
    { path: 'condidat-list', component: CondidatListComponent },
    { path: 'precondidat-list', component: PrecondidatListComponent },
    {path:'changePassword',component:ChangepasswordComponent},
    { path: 'leave-absence-list', component: LeaveAbsenceListComponent },
    { path: 'leave-absence-confirm-list', component: LeaveAbsenceConfirmListComponent },
    { path: 'add-concert', component: AddConcertComponent },
    { path: 'audition-list', component: AuditionListComponent },
    { path: 'concert-list', component: ConcertListComponent },
    { path: 'concert-list-candidat', component: LsiteCandidatconcertComponent },
    { path: 'add-repetition/:id', component: AddRepetitionComponent },
    { path: 'repetition-list-admin', component: RepetitionListAdminComponent },
    { path: 'account-acceptation', component: AccountAcceptationComponent },
    { path: 'add-oeuvre', component: OeuvreComponent }
  ] },
  {
    path: 'dashboard-user', component: DashboardUserComponent, children: [
      { path: 'concert-list', component: ConcertListUserComponent },
      {path:'changePassword',component:ChangepasswordComponent},
      { path: 'repetition-list', component: RepetitionListComponent },
      { path: 'leave-from', component: LeaveFormComponent },
      
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
