import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GlobalStore } from '../../../../../global-store/global-store';

@Component({
  	selector: 'app-cart',
  	templateUrl: './cart.component.html',
  	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  	constructor(
  		public dialog: MatDialog,
  		private globalStore: GlobalStore
  	) {
  		console.log(this.globalStore)
  	}

  	ngOnInit() {}

  	removeItem(cartItem) {
  		console.log(cartItem);

  		const dialogRef = this.dialog.open(ConfirmRemoveDialog, {
	      	width: '450px'
	    });

	    dialogRef.afterClosed().subscribe(result => {
	      	if(result) {
	      		let itemIndex = this.globalStore['cart']['items'].find((elem, index) => {
	      			if (elem['product']['id'] === cartItem['id']) {
	      				return index;
	      			}
	      		});

	      		this.globalStore['cart']['items'].splice(itemIndex, 1);

				this.globalStore['cart']['totalPrice'] = 0;
	      		this.globalStore['cart']['items'].forEach((elem) => {
					this.globalStore['cart']['totalPrice'] = this.globalStore['cart']['totalPrice'] + (elem['quantity'] * elem['product']['price']);
				});

				localStorage.setItem('cart', JSON.stringify(this.globalStore['cart']));
			      	}
	    });
  	}
}


@Component({
  selector: 'confirm-remove-dialog',
  template: `
	<div mat-dialog-content style="text-align: center;">
  		<p>Da li ste sigurni da želite da sklonite ovaj proizvod iz korpe?</p>
	</div>
	<div mat-dialog-actions style="text-align: center;">
  		<button mat-button (click)="onNoClick()">NE</button>
  		<button mat-raised-button color="accent" (click)="this.dialogRef.close(true)" >DA</button>
	</div>`
})
export class ConfirmRemoveDialog {

  	constructor(
    	public dialogRef: MatDialogRef<any>
    ) {}

  	onNoClick(): void {
    	this.dialogRef.close();
  	}
}
