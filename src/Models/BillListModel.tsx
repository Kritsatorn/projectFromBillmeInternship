export class BillListModel {
  billList: {
  billId: string;
  billName: string;
  billOwner: string;
  publishDate: string;
  image: string;
  billStatus: boolean;
  }[];

  static apply(datalist: {
    id: string,
    name: string,
    owner_id: string,
    publish_date: string,
    status: boolean,
    image: string
  }[]
  ) {
  return new BillListModel(datalist);
  }

  constructor (
    datalist: {
      id: string,
      name: string,
      owner_id: string,
      publish_date: string,
      status: boolean,
      image: string
    }[]
  ) {
  this.billList = datalist.map(data => {
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
}