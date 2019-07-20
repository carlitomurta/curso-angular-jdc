import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { HelloWorld2Component } from './components/hello-world2/hello-world2.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'primeiro' },
  { path: 'primeiro', component: HelloWorldComponent },
  { path: 'segundo', component: HelloWorld2Component },
  { path: 'contatos', component: ContactListComponent },
  { path: 'detalhe', component: ContactDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
