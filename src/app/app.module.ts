import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanglesComponent } from './bangles/bangles.component';
import { BracletsComponent } from './braclets/braclets.component';
import { ChainComponent } from './chain/chain.component';
import { LocketComponent } from './locket/locket.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingComponent } from './ring/ring.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BanglesComponent,
    BracletsComponent,
    ChainComponent,
    LocketComponent,
    NecklaceComponent,
    RingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
