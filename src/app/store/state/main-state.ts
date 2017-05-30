
export interface State {
  counter: number;
  displayText: string;
  petInfo: object;
  tasks: any;
};

export const initialState: State = {
  counter: 10,
  displayText:'loading...',
  petInfo: {},
  tasks: []
}

