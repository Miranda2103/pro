import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component';
import { UserComponent } from './user/user.component';
import { RolComponent } from './rol/rol.component';
import { RolMenuComponent } from './rol-menu/rol-menu.component';
import { PatientComponent } from './patient/patient.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConsultComponent } from './consult/consult.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dialog-message', loadChildren: () => import('src/dialog-message/dialog-message.module').then(m => m.DialogMessageModule) },
      { path: 'dialog-confirmation', loadChildren: () => import('src/dialog-confirmation/dialog-confirmation.module').then(m => m.DialogConfirmationModule) },
      { path: 'home', component: HomeComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'consult', component: ConsultComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'organization', component: OrganizationComponent },
      { path: 'rol', component: RolComponent },
      { path: 'rol-menu', component: RolMenuComponent },
      { path: 'user', component: UserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
