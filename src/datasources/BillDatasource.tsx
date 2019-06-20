import { API } from '../utilities/API';
export class BillDatasource {
  static getBillList(id: string) {
    return API.get(
      'https://dev-kidtang.billme.co.th/services',
      `/api/line/users/Uf77cf2a5c273a986359267abea8fe35e/quotations`
    );
  }
}