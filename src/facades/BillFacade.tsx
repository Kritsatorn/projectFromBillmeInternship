import { BillListModel } from '../Models/BillListModel';
import { BillDatasource } from '../datasources/BillDatasource';
// import { data } from '../mocks/BillData';

export class BillFacade {

	static getBillList(id: string) {
		return BillDatasource.getBillList(id)
		.then(result => {
			return BillListModel.apply(result);
		})
	}
}