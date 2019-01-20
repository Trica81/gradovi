import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './view/start-page/start-page.component';
import { ResaultPageComponent } from './view/resault-page/resault-page.component';
import { AuthGuard } from './service/guard.service';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'resault',
    component: ResaultPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: StartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
