import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { StartComponent } from './start/start.component'

const routes: Routes = [
{ path: 'start', component: StartComponent },
{ path: 'table', component: TableComponent },
{ path: '',
  redirectTo: '/start',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
