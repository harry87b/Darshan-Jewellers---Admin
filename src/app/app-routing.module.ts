import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanglesComponent } from './bangles/bangles.component';
import { BracletsComponent } from './braclets/braclets.component';
import { ChainComponent } from './chain/chain.component';
import { LocketComponent } from './locket/locket.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingComponent } from './ring/ring.component';

const routes: Routes = [
  {path:'bangles',component:BanglesComponent},
  {path:'braclets',component:BracletsComponent},
  {path:'chain',component:ChainComponent},
  {path:'locket',component:LocketComponent},
  { path: 'necklace', component: NecklaceComponent },
  { path: 'ring', component: RingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
