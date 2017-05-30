import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from './store/state/application-state';
import { INCREMENT } from './store/actions/main-action-creator';
import * as _ from 'lodash';
import {StoreData} from "./store/state/store-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet app';
  data = {};
  tasks:any = [];
  displayText:string = '';

  constructor (private store: Store <ApplicationState>) {

    store.select<StoreData>('storeData')
      .subscribe( (data: StoreData) => {
        this.data = data.petInfo;
        this.tasks = data.petInfo['tasks'];
        // this.displayText = data.displayText;
      });

    setTimeout(() => {

      this.store.dispatch({ type: INCREMENT, payload: {innerObj: {text: "derp!"}} });
      this.store.dispatch({ type: "SUPER_SIMPLE_EFFECT", payload: {seconds: 2 }});
      this.store.dispatch({ type: "SET_TIMER", payload: {seconds: 2 }});
      this.store.dispatch({ type: "SEND_PAYLOAD_TO_EFFECT", payload: {message: "The component says hello!" }});
      this.store.dispatch({ type: "PULL_ARRAY_FROM_FIREBASE"});
      this.store.dispatch({ type: "PULL_OBJECT_FROM_FIREBASE"});
    }, 2000);
  }
}
