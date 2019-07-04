import { BillListModel } from '../models/BillListModel';
import { BillDatasource } from '../datasources/BillDatasource';
import { PayloadModel } from '../models/PayloadModel';
import { SummaryPageState } from '../pages/SummaryPage/SummaryPageTypes';

export class BillFacade {
  static getBillList(id: string, groupId: string) {
    return BillDatasource.getBillList(id, groupId)
    .then(result => {
      return BillListModel.apply(result.quotations);
    });
  }
  static ImageUpload(file: File) {
    return BillDatasource.ImageUpload(file)
    .then(result => {
      return result;
    });
  }

  static createBill(id: string, groupId: string, bill: SummaryPageState) {
    return BillDatasource.createBill(
      id,
      groupId,
      PayloadModel.apply(bill).bill
    );
  }
}
