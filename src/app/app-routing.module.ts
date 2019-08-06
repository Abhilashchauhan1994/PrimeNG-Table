import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengTestComponent } from './component/primeng-test/primeng-test.component';

const routes: Routes = [
  {path:'',component:PrimengTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
