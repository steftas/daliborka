import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material';
import {ShopComponent} from './shop.component';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes = [
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'shop/product/:id',
        component: ProductComponent
    },
    {
        path: 'shop/cart',
        component: CartComponent
    },
    {
        path: 'shop/checkout',
        component: CheckoutComponent
    }
];

@NgModule({
    imports: [
        MatTabsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ShopComponent,
        ProductComponent,
        CartComponent,
        CheckoutComponent
    ],
    providers: []
})
export class ShopModule { }