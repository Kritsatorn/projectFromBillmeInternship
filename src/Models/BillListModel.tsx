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
    if (datalist) {
      return datalist.map(data => {
        return {
          billId: data.id,
          billName: data.bill_name,
          billOwner: data.owner,
          publishDate: data.published_date,
          image: data.bill_image,
          billStatus: data.bill_status
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