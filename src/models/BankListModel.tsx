import { BankData } from '../definitions/types/Datalist';

export class BankListModel {

  bankList: {
    nameEng: string;
    nameTh: string;
    logo: string;
    format: string;
  }[];

  static apply(datalist: BankData[]) {
    return new BankListModel(datalist);
  }

  static formatBankData(datalist: BankData[]) {
    return datalist.map(data => {
      return {
        nameTh: data.name_th,
        nameEng: data.name_eng,
        logo: data.logo,
        format: data.format
      };
    });
  }

  constructor (datalist: BankData[]) {
    this.bankList = BankListModel.formatBankData(datalist);
  }
}