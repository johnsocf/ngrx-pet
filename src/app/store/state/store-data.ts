export interface StoreData {

  counter: number;
  displayText: string;
  petInfo: any;
  tasks: any;

}

export const INITIAL_STORE_DATA: StoreData = {
  counter: 10,
  displayText:'loading...',
  petInfo: {},
  tasks: []
};
