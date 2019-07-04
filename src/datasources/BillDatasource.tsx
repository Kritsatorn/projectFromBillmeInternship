import { API } from '../utilities/API';
import { Payload } from '../definitions/types/Payload';

export class BillDatasource {
  static getBillList(id: string, groupId: string) {
    return API.get(
      'https://dev-kidtang.billme.co.th/services',
      `/api/bills/groups/${groupId}/owners/${id}`
    );
  }

  static ImageUpload(file: File) {
    return API.upload(
      'https://dev-kidtang.billme.co.th/services',
      'attachments',
      `/api/bills/attachments/upload`,
      file
    );
  }

  static createBill(id: string, groupId: string, data: Payload) {
    const options = {
      isRequiredToken: true,
      body: data
    };

    return API.post(
      'https://dev-kidtang.billme.co.th/services',
      `/api/bills/groups/${groupId}/owners/${id}`,
      options
    );
  }
}