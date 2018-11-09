import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuseFooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FuseFooterComponent
    ],
    imports     : [
        RouterModule,
        CommonModule
    ],
    exports     : [
        FuseFooterComponent
    ]
})
export class FuseFooterModule { }
