import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { RegFormComponent } from '../reg-form/reg-form.component';

export const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "registration", component: RegFormComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "/about", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
