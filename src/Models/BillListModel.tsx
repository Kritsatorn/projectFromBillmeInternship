import { BillDataAPI } from '../definitions/types/Datalist';

export class BillListModel {

  billList: {
    billId: string;
    billName: string;
    billOwner: string;
    publishDate: string;
    image: string;
    billStatus: boolean;
  }[];

  static apply(datalist: BillDataAPI[]) {
    return new BillListModel(datalist);
  }

  static formatBills(datalist: BillDataAPI[]) {
    return datalist.map(data => {
      return {
        billId: data.id,
        billName: data.name,
        billOwner: data.owner_id,
        publishDate: data.publish_date,
        image: data.image,
        billStatus: data.status
      };
    });
  }

  constructor (datalist: BillDataAPI[]) {
    this.billList = BillListModel.formatBills(datalist);
  }
}