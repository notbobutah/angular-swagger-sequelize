import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent} from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';

const routes: Routes = [
{
    path:"",
    component: HomeComponent,
},
{
    path:"cards",
    component: CardComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
