/**
 * Created by catherinejohnson on 5/24/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import {StoreData, INITIAL_STORE_DATA} from '../state/store-data';
import * as _ from 'lodash';


export const mainStoreReducer: ActionReducer<StoreData> =
  (state = INITIAL_STORE_DATA, action: Action) => {
    debugger;
    switch (action.type) {
      case 'GOT_FIREBASE_ARRAY':
        if (action.payload.petInfo != undefined) {
          return {...state, petInfo: action.payload.petInfo.Pets[0], tasks: action.payload.petInfo.Pets[0]['tasks']}
        }
      case 'TASK_ADDED':
        return {...state, tasks: _.union(state.tasks, action.payload)};
      default: {
        return state;
      }
    }

  }
