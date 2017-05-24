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

export const firebaseConfig = {
  apiKey: "AIzaSyA30SGQ-4ozFHftYzsHlQxFdqVgbvuaLVU",
  authDomain: "cypherapp-ef93a.firebaseapp.com",
  databaseURL: "https://cypherapp-ef93a.firebaseio.com",
  storageBucket: "cypherapp-ef93a.appspot.com",
  messagingSenderId: "550160402640"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainStoreReducer}),
    EffectsModule.run(MainEffects),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
