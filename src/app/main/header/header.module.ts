import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseHeaderComponent } from './header.component';

@NgModule({
    declarations: [
        FuseHeaderComponent
    ],
    imports     : [
        RouterModule
    ],
    exports     : [
        FuseHeaderComponent
    ]
})
export class FuseHeaderModule { }
