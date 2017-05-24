/**
 * Created by catherinejohnson on 5/24/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import {State, initialState} from '../state/main-state';
import {INCREMENT, EVENT_FROM_EFFECT} from '../actions/main-action-creator';

export const mainStoreReducer: ActionReducer<State> =
  (state = initialState, action: Action) => {

    switch (action.type) {
      case INCREMENT:
        debugger;
        return {
          counter: state.counter + 1
        }
      case EVENT_FROM_EFFECT:
        return {
          counter: 4
        }
      default: {
        return state;
      }
    }

  }
