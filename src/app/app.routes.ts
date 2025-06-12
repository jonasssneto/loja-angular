import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cartao } from './pages/cartao/cartao';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cartao', component: Cartao },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }


