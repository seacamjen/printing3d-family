import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from "./components/show/show.component";

const routes: Routes = [
  { path: '', redirectTo: '/show', pathMatch:'full' },
  { path: 'show', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
