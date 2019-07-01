import { BillListModel } from '../models/BillListModel';
import { BillDatasource } from '../datasources/BillDatasource';

export class BillFacade {
  static getBillList(id: string) {
    return BillDatasource.getBillList(id)
    .then(result => {
      return BillListModel.apply(result.quotations);
    });
  }
}