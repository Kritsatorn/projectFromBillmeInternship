import { data } from '../mocks/BankData';

export class BankDatasource {
  static getBankList() {
    return data;
  };
}