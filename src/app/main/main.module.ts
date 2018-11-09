import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseMainComponent } from './main.component';
import { FuseContentComponent } from './content/content.component';
import { FuseFooterModule } from './footer/footer.module';
import { FuseHeaderModule } from './header/header.module';

import { ConfirmRemoveDialog } from './content/pages/shop/cart/cart.component';
import { InformDialog } from './content/pages/shop/product/product.component';
import { GalleryDialog } from './content/pages/about/about.component';

@NgModule({
    declarations: [
        FuseMainComponent,
        FuseContentComponent,

        ConfirmRemoveDialog,
        InformDialog,
        GalleryDialog
    ],
    imports     : [
        RouterModule,
        FuseFooterModule,
        FuseHeaderModule
    ],
    exports     : [
        FuseMainComponent,

        ConfirmRemoveDialog,
        InformDialog
    ],
    entryComponents: []
})
export class FuseMainModule {
}