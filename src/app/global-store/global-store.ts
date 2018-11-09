import {Injectable} from '@angular/core';

@Injectable()
export class GlobalStore {
	cart: any = {
		items: [],
		totalPrice: 0
	};
}