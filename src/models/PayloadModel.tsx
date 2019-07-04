import { SummaryPageState } from '../pages/SummaryPage/SummaryPageTypes';
import { Payload } from '../definitions/types/Payload';

export class PayloadModel {

  bill: Payload;

  static formatBill(data: SummaryPageState) {
    return ({
      status: 'incomplete',
      name: data.previousState.billName,
      image_url: data.url,
      selected_friends: data.previousState.selectedFriendList.map(
        friend => {
          return {
            user_id: friend.userId,
            display_name: friend.displayName,
            profile_picture_url: friend.profilePic,
            owner: friend.owner
          };
        }
      ),
      payments: data.previousState.paymentList.map(
        payment => {
          return {
            type: PayloadModel.formatType(payment.nameTh),
            name_eng: payment.nameEng,
            name_th: payment.nameTh,
            logo: payment.logo,
            number: payment.value
          };
        }
      ),
      items: data.previousState.items.map(
        item => {
          return {
            detail: item.detail,
            price: item.price
          };
        }
      ),
      vat: data.previousState.vat,
      vat_status: data.previousState.vatStatus,
      vat_price: data.previousState.vatPrice,
      service_charge: data.previousState.serviceCharge,
      service_charge_price: data.previousState.serviceChargePrice,
      service_charge_status: data.previousState.serviceChargeStatus,
      total_price: data.previousState.totalPrice,
      total_bill_price: data.previousState.totalBillPrice
    });
  }

  static formatType(name: string) {
    if ( name === 'พร้อมเพย์ - รหัสบัตรประชาชน' || name === 'พร้อมเพย์ - หมายเลขโทรศัพท์มือถือ') {
      return 'prompt_pay';
    } else {
      return 'bank';
    }
  }

  static apply(data: SummaryPageState) {
    return new PayloadModel(data);
  }

  constructor (data: SummaryPageState) {
    this.bill = PayloadModel.formatBill(data);
  }
}