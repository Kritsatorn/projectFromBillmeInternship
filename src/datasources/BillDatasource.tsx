import { data } from '../mocks/BillData';

export class BillDatasource {
  static getBillList(id: string) {
    return Promise.resolve(data.quotations);
  }
}