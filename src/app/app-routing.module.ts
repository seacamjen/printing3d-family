import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureProjectsComponent } from "./components/future-projects/future-projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/future', pathMatch:'full' },
  { path: 'future', component: FutureProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
