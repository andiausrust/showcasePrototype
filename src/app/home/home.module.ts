import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {ComponentsModule} from '../components/components.module';
import {MatCheckboxModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        ComponentsModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatPaginatorModule,
        DragDropModule,
        MatSortModule,
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
