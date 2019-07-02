import { BillListModel } from '../models/BillListModel';
import { BillDatasource } from '../datasources/BillDatasource';

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
}
