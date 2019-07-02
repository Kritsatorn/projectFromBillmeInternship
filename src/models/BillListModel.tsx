import { BillDataAPI } from '../definitions/types/Datalist';

export class BillListModel {

  billList: {
    billId: string;
    billName: string;
    billOwner: string;
    publishDate: string;
    image: string;
    billStatus: string;
  }[];

  static apply(datalist: BillDataAPI[]) {
    return new BillListModel(datalist);
  }

  static formatBills(datalist: BillDataAPI[]) {
    if (datalist) {
      return datalist.map(data => {
        return {
          billId: data.id,
          billName: data.name,
          billOwner: data.owner_id,
          publishDate: data.created,
          image: data.image_url,
          billStatus: data.status
        };
      });
    } else {
      return [];
    }
  }

  constructor (datalist: BillDataAPI[]) {
    this.billList = BillListModel.formatBills(datalist);
  }
}