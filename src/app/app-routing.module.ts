import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordListComponent } from './record-list/record-list.component';

const routes: Routes = [ { path: 'issuesData', component: RecordListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
