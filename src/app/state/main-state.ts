
export interface State {
  counter: number;
  displayText: string;
  petInfo: object;
};

export const initialState: State = {
  counter: 10,
  displayText:'loading...',
  petInfo: {}
}

