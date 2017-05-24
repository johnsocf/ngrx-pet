import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { mainStoreReducer } from './reducers/main-reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MainEffects } from './effects/main-store-effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LifestyleOverviewComponent } from './components/lifestyle-overview/lifestyle-overview.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC06PQZY0-xDGmutG_BOdu4Rqb3s5_rT00",
  authDomain: "pet-journal.firebaseapp.com",
  databaseURL: "https://pet-journal.firebaseio.com",
  projectId: "pet-journal",
  storageBucket: "pet-journal.appspot.com",
  messagingSenderId: "876681403284"
};

@NgModule({
  declarations: [
    AppComponent,
    LifestyleOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainStoreReducer}),
    EffectsModule.run(MainEffects),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
