import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';
import { ProductDetails } from './pages/details/details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'details', component: ProductDetails },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }


