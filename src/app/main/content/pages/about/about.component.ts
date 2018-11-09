import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  	selector: 'app-about',
  	templateUrl: './about.component.html',
  	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  	constructor(
  		public dialog: MatDialog
  	) { }

  	ngOnInit() { }

  	openGallery(type) {
  		const dialogRef = this.dialog.open(GalleryDialog, {
	      	width: '450px',
	      	panelClass: 'gallery-modal'
	    });
  	}
}

@Component({
  	selector: 'gallery-dialog',
  	template: `
		<div mat-dialog-content class="gallery-div">
			<button (click)="this.dialogRef.close()">X</button>
	  		<p>GALERIJA</p>
		</div>`,
	styleUrls: ['./about.component.scss']
})
export class GalleryDialog {

  	constructor(
    	public dialogRef: MatDialogRef<any>
    ) {}
}
