import { BankListModel } from '../Models/BankListModel';
// import { BankDatasource } from '../datasources/BankDatasource';
import { data } from '../mocks/BankData';

export class BankFacade {
  static getBankList() {
    return BankListModel.apply(data.banks);
    // return BankDatasource.getBankList()
    // .then(result => {
    //   return BankListModel.apply(result.bank)
    // })
  }
}