import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {ShopModule} from './shop/shop.module';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';

const routes = [
    {
        path     : '',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [
    	HomeModule,
    	ShopModule,
        AboutModule,
        ContactModule,

        RouterModule.forChild(routes)
    ],
    declarations: []
})

export class FusePagesModule { }