import { Component, OnInit } from '@angular/core';
import { GlobalStore } from '../../global-store/global-store';

@Component({
	selector: 'fuse-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class FuseHeaderComponent implements OnInit {
	totalPrice = 0;

	constructor(
		private globalStore: GlobalStore
	) {
		if (localStorage.getItem('cart')) {
			this.globalStore['cart'] = JSON.parse(localStorage.getItem('cart'));
		}
	}

	ngOnInit() { }
}
