import { API } from '../utilities/API';

const securityUrl = '';
export class BillDatasource {
	static getBillList(id: string) {
		return  API.get(securityUrl, `/link/eiei/${id}`)
		.catch(() => {
			return 0
		});
	}
}