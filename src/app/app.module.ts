import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule , combineReducers} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {routerReducer, RouterStoreModule} from "@ngrx/router-store";
import {storeFreeze} from "ngrx-store-freeze";
import { mainStoreReducer } from './store/reducers/uiStoreDataReducer';
import {compose} from "@ngrx/core/compose";

import { MainEffects } from './store/effects/main-store-effects';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LifestyleOverviewComponent } from './components/lifestyle-overview/lifestyle-overview.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CalendarOverviewComponent } from './components/calendar-overview/calendar-overview.component';
import {MomentModule} from 'angular2-moment';
import {RouterModule} from "@angular/router";
import {routes} from './routes';

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
    LifestyleOverviewComponent,
    TasksComponent,
    CalendarOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MomentModule,
    StoreModule.provideStore(compose(storeFreeze, combineReducers)({storeData: mainStoreReducer, router: routerReducer})),
    EffectsModule.run(MainEffects),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
