import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { GlobalStore } from './global-store/global-store';

import { ConfirmRemoveDialog } from './main/content/pages/shop/cart/cart.component';
import { InformDialog } from './main/content/pages/shop/product/product.component';
import { GalleryDialog } from './main/content/pages/about/about.component';


const appRoutes: Routes = [
	{
		path: '',
		loadChildren: './main/content/pages/pages.module#FusePagesModule'
	},
];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatDialogModule,
		MatButtonModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		FuseMainModule
	],
	providers: [
		GlobalStore
	],
	entryComponents: [
		ConfirmRemoveDialog,
		InformDialog,
		GalleryDialog
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
