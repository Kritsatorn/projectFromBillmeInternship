import { API } from '../utilities/API';

export class BillDatasource {
  static getBillList(id: string, groupId: string) {
    return API.get(
      'https://dev-kidtang.billme.co.th/services',
      `/api/bills/groups/${groupId}/owners/${id}`
    );
  }
}