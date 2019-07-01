import { BankData } from '../definitions/types/Datalist';

export class BankListModel {

  bankList: {
    name: string;
    logo: string;
  }[];

  static apply(datalist: BankData[]) {
    return new BankListModel(datalist);
  }

  static formatBankData(datalist: BankData[]) {
    return datalist.map(data => {
      return {
        name: data.name,
        logo: data.logo
      };
    });
  }

  constructor (datalist: BankData[]) {
    this.bankList = BankListModel.formatBankData(datalist);
  }
}