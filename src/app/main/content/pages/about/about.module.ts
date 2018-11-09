import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './about.component';

const routes = [
    {
        path: 'about',
        component: AboutComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AboutComponent
    ],
    providers: []
})
export class AboutModule { }