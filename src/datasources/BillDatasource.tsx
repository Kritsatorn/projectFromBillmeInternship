// import { API } from '../utilities/API';
import { data } from '../mocks/BillData';

export class BillDatasource {
  static getBillList(id: string) {
    return Promise.resolve(data.quotations);
  }
}