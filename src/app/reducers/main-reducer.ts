/**
 * Created by catherinejohnson on 5/24/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import {State, initialState} from '../state/main-state';
import * as _ from 'lodash';
import {INCREMENT, EVENT_FROM_EFFECT} from '../actions/main-action-creator';


export const mainStoreReducer: ActionReducer<State> =
  (state = initialState, action: Action) => {

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
