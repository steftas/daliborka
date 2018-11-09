import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import { NgxGoogleMapModule } from 'ngx-google-map'

const routes = [
    {
        path: 'contact',
        component: ContactComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgxGoogleMapModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ContactComponent
    ],
    providers: []
})
export class ContactModule { }