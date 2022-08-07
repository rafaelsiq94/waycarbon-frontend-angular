import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TableComponent } from './views/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
