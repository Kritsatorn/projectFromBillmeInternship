import { BankListModel } from '../models/BankListModel';
import { BankDatasource } from '../datasources/BankDatasource';

export class BankFacade {
  static getBankList() {
    return BankDatasource.getBankList()
    .then(result => {
      return BankListModel.apply(result.banks);
    });
  }
}