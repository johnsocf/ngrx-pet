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
    console.log('we have a store! ' + store);

    store.select<StoreData>('storeData')
      .subscribe( (data: StoreData) => {
        debugger;
        this.data = data.petInfo;
        console.log('pet info', data.petInfo);
        this.tasks = data.petInfo['tasks'];
        // this.displayText = data.displayText;
        console.log('component sees data is: ' + data.petInfo);
        console.log('component sees data is: ' + _.keys(data.petInfo));
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
